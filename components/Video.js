"use client";

export default function Video() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="video-section">
      <div className="bg-img" data-background="assets/img/bg-img/video-bg-1.png"></div>
      <div className="container container-2">
        <div className="video-content">
          <h2 className="video-title">Unlock Your Dream <br /> Home Today!</h2>
          <p>We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.</p>
          <div className="mt-4">
            <button 
              onClick={scrollToContact} 
              className="btn btn-primary btn-lg" 
              style={{
                backgroundColor: '#1a1a1a', 
                color: '#fff', 
                padding: '12px 30px', 
                borderRadius: '8px', 
                border: 'none', 
                cursor: 'pointer', 
                fontWeight: '600', 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                transition: 'all 0.3s ease'
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
