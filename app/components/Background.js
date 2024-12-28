'use client'

const Background = () => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          linear-gradient(rgba(44, 61, 80, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(44, 61, 80, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: 'center center'
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(44, 61, 80, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(44, 61, 80, 0.05) 0%, transparent 50%)
          `
        }}
      />
    </div>
  )
}

export { Background } 