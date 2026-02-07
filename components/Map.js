"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Create custom markers with labels
const createLabeledIcon = (name, color = '#3FB8AF') => {
  return L.divIcon({
    className: 'custom-labeled-marker',
    html: `
      <div style="position: relative; width: max-content;">
        <!-- Label -->
        <div style="
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(15, 23, 42, 0.95);
          color: white;
          padding: 6px 14px;
          border-radius: 8px;
          font-family: 'Rubik', 'Segoe UI', Tahoma, sans-serif;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          z-index: 1000;
        ">
          ${name}
        </div>
        <!-- Glowing dot marker -->
        <div style="
          position: relative;
          width: 16px;
          height: 16px;
        ">
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: ${color};
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 15px ${color}, 0 0 30px ${color}, 0 2px 8px rgba(0,0,0,0.3);
            z-index: 1001;
          "></div>
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 32px;
            height: 32px;
            background-color: ${color};
            border-radius: 50%;
            opacity: 0.3;
            animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          "></div>
        </div>
      </div>
    `,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
};

const locations = [
  { name: "ראש פינה", coords: [32.9646, 35.5360], color: "#ec4899" }, 
  { name: "טבריה", coords: [32.7940, 35.5308], color: "#f59e0b" },
  { name: "נוף הגליל", coords: [32.7065, 35.3364], color: "#3b82f6" },
  { name: "נצרת", coords: [32.7019, 35.2971], color: "#8b5cf6" },
  { name: "עכו", coords: [32.9191, 35.0718], color: "#06b6d4" },
  { name: "חריש", coords: [32.4614, 35.0394], color: "#ef4444" },
  { name: "יוקנעם", coords: [32.6595, 35.1017], color: "#6366f1" }, 
  { name: "זכרון יעקב", coords: [32.5741, 34.9515], color: "#10b981" },
  { name: "קרית שמונה", coords: [33.2073, 35.5721], color: "#f43f5e" },
  { name: "קרית ביאליק", coords: [32.8654, 35.0841], color: "#8b5cf6" },
  { name: "חיפה", coords: [32.8191, 34.9983], color: "#06b6d4" },
  { name: "עפולה", coords: [32.6074, 35.2897], color: "#a855f7" },
];

export default function Map({ zoom }) {
  const center = [32.75, 35.25];
  
  // Default zoom based on screen size if not provided
  let initialZoom = zoom;
  if (!initialZoom && typeof window !== 'undefined') {
    initialZoom = window.innerWidth < 768 ? 8.5 : 9.5;
  }
  // Fallback
  initialZoom = initialZoom || 9.5;

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');
      
      @keyframes pulse-ring {
        0% {
          transform: translate(-50%, -50%) scale(0.5);
          opacity: 0.8;
        }
        100% {
          transform: translate(-50%, -50%) scale(2.5);
          opacity: 0;
        }
      }
      
      .leaflet-container {
        width: 100%;
        height: 100%;
        background: #0f172a !important;
        font-family: 'Rubik', 'Segoe UI', sans-serif;
        border-radius: 1.5rem;
      }
      
      .custom-labeled-marker {
        background: transparent !important;
        border: none !important;
      }
      
      .leaflet-popup-content-wrapper {
        background: rgba(15, 23, 42, 0.95);
        color: white;
        border-radius: 12px;
        padding: 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(8px);
      }
      
      .leaflet-popup-content {
        margin: 12px 16px;
        font-family: 'Rubik', sans-serif;
        font-size: 14px;
      }
      
      .leaflet-popup-tip {
        background: rgba(15, 23, 42, 0.95);
      }
      
      .leaflet-control-attribution {
        background: rgba(15, 23, 42, 0.8) !important;
        color: rgba(255, 255, 255, 0.6) !important;
        font-size: 10px !important;
        padding: 2px 6px !important;
        border-radius: 4px !important;
      }
      
      .leaflet-control-attribution a {
        color: rgba(255, 255, 255, 0.8) !important;
      }

      /* Ensure z-index stacking */
      .leaflet-marker-pane {
        z-index: 600 !important;
      }
      
      .leaflet-popup-pane {
        z-index: 700 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      height: '100%',
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      borderRadius: '1.5rem',
      
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
    }}>
      <MapContainer 
        center={center} 
        zoom={initialZoom} 
        scrollWheelZoom={true} 
        style={{ 
          height: '100%', 
          width: '100%', 
          borderRadius: '1rem',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
        zoomControl={true}
        dragging={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {locations.map((loc, idx) => (
          <Marker 
            key={idx} 
            position={loc.coords} 
            icon={createLabeledIcon(loc.name, loc.color)}
          >
            <Popup>
              <div style={{ textAlign: 'center' }}>
                <strong style={{ fontSize: '16px' }}>{loc.name}</strong>
                <div style={{ 
                  marginTop: '8px', 
                  fontSize: '12px', 
                  color: 'rgba(255,255,255,0.7)' 
                }}>
                  {loc.coords[0].toFixed(4)}, {loc.coords[1].toFixed(4)}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
