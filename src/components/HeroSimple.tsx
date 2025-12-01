// Simplified Hero for debugging
const HeroSimple = () => {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#050505',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <h1 style={{ 
        color: '#F2F2F2', 
        fontSize: '80px',
        fontFamily: 'sans-serif',
        margin: 0
      }}>
        WE ENGINEER CULTURE
      </h1>
      <button style={{
        backgroundColor: 'transparent',
        border: '2px solid #F2F2F2',
        color: '#F2F2F2',
        padding: '15px 30px',
        borderRadius: '25px',
        fontSize: '16px',
        cursor: 'pointer'
      }}>
        Start a Project
      </button>
      <div style={{
        position: 'absolute',
        bottom: '30px',
        right: '30px',
        color: '#D6FF00',
        fontSize: '14px'
      }}>
        ● SYSTEM: ONLINE
      </div>
    </div>
  );
};

export default HeroSimple;
