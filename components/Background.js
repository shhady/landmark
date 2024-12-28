'use client'

export const Background = () => {
  return (
    <>
      <div className="absolute inset-0 bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(44, 61, 80, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(44, 61, 80, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        
        {/* Large Circle */}
        <div 
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 opacity-[0.02]"
          style={{
            background: `radial-gradient(circle, rgba(44, 61, 80, 0.2) 0%, transparent 70%)`
          }}
        />
        
        {/* Small Circles Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(44, 61, 80, 0.03) 0%, transparent 20%),
              radial-gradient(circle at 70% 70%, rgba(44, 61, 80, 0.03) 0%, transparent 20%)
            `,
            backgroundSize: '100px 100px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Company Name Watermark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center transform -rotate-12">
            <div className="text-8xl font-bold text-[#2c3d50]/[0.02] whitespace-nowrap">
              סרחאן וחכרוש
            </div>
            <div className="text-4xl text-[#2c3d50]/[0.02] mt-4">
              מדידות והנדסה
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 