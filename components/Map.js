"use client";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Create custom markers - just glowing dots without labels
const createDotIcon = (color = '#3FB8AF') => {
  return L.divIcon({
    className: 'custom-dot-marker',
    html: `
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
          box-shadow: 0 0 3px ${color}, 0 2px 6px rgba(0,0,0,0.3);
          z-index: 1001;
        "></div>
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background-color: ${color};
          border-radius: 50%;
          opacity: 0.08;
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        "></div>
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
  { name: "עילבון", coords: [32.8167, 35.3333], color: "#ec4899" },
  { name: "ג'דידה-מכר", coords: [32.9333, 35.2167], color: "#f59e0b" },
  { name: "שפרעם", coords: [32.8056, 35.1711], color: "#3b82f6" },
  { name: "יפיע", coords: [32.6944, 35.2833], color: "#10b981" },
  { name: "כפר ניין", coords: [32.6278, 35.3333], color: "#ef4444" },
  { name: "דיר חנא", coords: [32.8611, 35.3708], color: "#6366f1" },
  { name: "כפר סולם", coords: [32.6167, 35.3333], color: "#f43f5e" },
  { name: "כעביה-טבאש", coords: [32.8167, 35.1667], color: "#a855f7" },
  { name: "ג'לג'וליה", coords: [32.1500, 34.9500], color: "#ec4899" },
  { name: "ירושלים", coords: [31.7683, 35.2137], color: "#f59e0b" },
  { name: "עין ראפה", coords: [32.7000, 35.3167], color: "#3b82f6" },
  { name: "כפר כנא", coords: [32.7456, 35.3394], color: "#10b981" },
  { name: "אכסאל", coords: [32.7167, 35.3167], color: "#ef4444" },
  { name: "עראבה", coords: [32.8667, 35.3500], color: "#6366f1" },
  { name: "משהד", coords: [32.7833, 35.2833], color: "#f43f5e" },
  { name: "ריינה", coords: [32.7167, 35.3167], color: "#a855f7" },
  { name: "רמלה", coords: [31.9297, 34.8672], color: "#ec4899" },
  { name: "עבלין", coords: [32.8333, 35.2667], color: "#f59e0b" },
  { name: "טמרה", coords: [32.8500, 35.2000], color: "#3b82f6" },
  { name: "כאבול", coords: [32.8833, 35.1833], color: "#10b981" },
  { name: "אח יהוד", coords: [32.0914, 34.8881], color: "#ef4444" },
  { name: "רמת גן", coords: [32.0719, 34.8239], color: "#6366f1" },
  { name: "אבו סנאן", coords: [32.9333, 35.2667], color: "#f43f5e" },
  { name: "חדרה", coords: [32.4344, 34.9181], color: "#a855f7" },
  { name: "ראשון לציון", coords: [31.9730, 34.7925], color: "#ec4899" },
  { name: "כפר מעאויה", coords: [32.3833, 35.0167], color: "#f59e0b" },
  { name: "אום אל פחם", coords: [32.5167, 35.1500], color: "#3b82f6" },
  { name: "דיר אל אסד", coords: [32.9667, 35.3667], color: "#10b981" },
  { name: "בענה", coords: [33.0167, 35.3167], color: "#ef4444" },
  { name: "כפר קרע", coords: [32.5167, 35.0667], color: "#6366f1" },
  { name: "בנימינה", coords: [32.5253, 34.9536], color: "#f43f5e" },
  { name: "אילת", coords: [29.5581, 34.9481], color: "#a855f7" },
  { name: "עוספיא", coords: [32.7167, 35.1000], color: "#ec4899" },
  { name: "דלית אל כרמל", coords: [32.6933, 35.0500], color: "#f59e0b" },
  { name: "באקה אל-גרביה", coords: [32.4167, 35.0500], color: "#3b82f6" },
  { name: "מג'דל שמס", coords: [33.2667, 35.7667], color: "#10b981" },
  { name: "מג'אר", coords: [32.9000, 35.4000], color: "#ef4444" },
  { name: "כאוכב אבו אל היג'א", coords: [32.8167, 35.2333], color: "#6366f1" },
  { name: "תל אביב-יפו", coords: [32.0853, 34.7818], color: "#f43f5e" },
  { name: "בת ים", coords: [32.0167, 34.7500], color: "#a855f7" },
  { name: "פתח תקווה", coords: [32.0853, 34.8878], color: "#ec4899" },
  { name: "מעגן מיכאל", coords: [32.5667, 34.9083], color: "#f59e0b" },
  { name: "ירכא", coords: [32.9667, 35.2000], color: "#3b82f6" },
  { name: "כפר נאעורה", coords: [32.9500, 35.3333], color: "#10b981" },
  { name: "עילוט", coords: [32.7167, 35.2833], color: "#ef4444" },
  { name: "צפת", coords: [32.9658, 35.4983], color: "#6366f1" },
  { name: "הרצליה", coords: [32.1656, 34.8431], color: "#f43f5e" }
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
      
      .custom-dot-marker {
        background: transparent !important;
        border: none !important;
      }
      
      /* Tooltip styling */
      .leaflet-tooltip {
        background: rgba(15, 23, 42, 0.95) !important;
        color: white !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 8px !important;
        padding: 6px 14px !important;
        font-family: 'Rubik', 'Segoe UI', Tahoma, sans-serif !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4) !important;
        backdrop-filter: blur(8px);
      }
      
      .leaflet-tooltip::before {
        border-top-color: rgba(15, 23, 42, 0.95) !important;
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
      
      .leaflet-tooltip-pane {
        z-index: 650 !important;
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
            icon={createDotIcon(loc.color)}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              {loc.name}
            </Tooltip>
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