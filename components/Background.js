export const Background = () => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      background: '#ffffff',
      backgroundImage: `
        radial-gradient(circle at 30% 30%, rgba(44, 61, 80, 0.05), rgba(44, 61, 80, 0) 50%),
        radial-gradient(circle at 70% 70%, rgba(44, 61, 80, 0.05), rgba(44, 61, 80, 0) 50%),
        radial-gradient(circle at 50% 50%, rgba(44, 61, 80, 0.1), rgba(44, 61, 80, 0) 80%)
      `,
      backgroundSize: '400px 400px',
      backgroundRepeat: 'no-repeat',
      backgroundClip: 'content-box',
      maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
    }}
  />
) 