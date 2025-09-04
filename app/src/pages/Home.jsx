import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const services = [
    { 
      name: 'ABA Therapy', 
      description: 'Evidence-based behavioral intervention to help children develop essential life skills',
      icon: '🧩'
    },
    { 
      name: 'Speech Language Pathology', 
      description: 'Comprehensive communication and language development support',
      icon: '💬'
    },
    { 
      name: 'Speech Therapy', 
      description: 'Targeted intervention for speech clarity, fluency, and articulation',
      icon: '🗣️'
    },
    { 
      name: 'Occupational Therapy', 
      description: 'Building independence through daily living and motor skills development',
      icon: '✋'
    },
    { 
      name: 'Early On', 
      description: 'Early intervention services for infants and toddlers',
      icon: '🌱'
    },
    { 
      name: 'Telehealth', 
      description: 'Convenient, effective therapy sessions from the comfort of home',
      icon: '💻'
    }
  ];

  const stats = [
    { number: '500+', label: 'Families Served' },
    { number: '10+', label: 'Years Experience' },
    { number: '6', label: 'Therapy Services' },
    { number: '100%', label: 'Dedicated Care' }
  ];

  return (
    <div className="home" style={{ width: '100%' }}>
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, var(--color-sage) 0%, var(--color-forest-green) 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        width: '100%'
      }}>
        <div className="container-content">
          <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="hero-title" style={{ 
              fontSize: '3.5rem', 
              marginBottom: '1.5rem',
              fontWeight: '700',
              lineHeight: '1.2',
              color: 'white'
            }}>
              Welcome to Nurture Nest Pediatric Therapy
            </h1>
            <p className="hero-subtitle" style={{ 
              fontSize: '1.3rem', 
              marginBottom: '2.5rem',
              opacity: '0.95',
              lineHeight: '1.6'
            }}>
              Nurturing each child's growth through compassionate, evidence-based pediatric therapy in a warm, nature-inspired environment
            </p>
            <div className="hero-buttons" style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link to="/services" className="btn btn-primary" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                backgroundColor: 'white',
                color: 'var(--color-forest-green)',
                fontWeight: '600'
              }}>
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-secondary" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                backgroundColor: 'transparent',
                border: '2px solid white',
                color: 'white',
                fontWeight: '600'
              }}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" style={{
        padding: '60px 0',
        backgroundColor: 'white',
        width: '100%'
      }}>
        <div className="container-content">
          <div className="stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            {stats.map((stat, index) => (
              <div key={index} className="stat-item" style={{
                padding: '1.5rem'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: 'var(--color-terracotta)',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  color: 'var(--color-forest-green)',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section" style={{
        padding: '80px 0',
        backgroundColor: 'var(--color-cream)',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: 'var(--color-forest-green)'
            }}>
              Our Comprehensive Services
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--color-forest-green)',
              maxWidth: '600px',
              margin: '0 auto',
              opacity: '0.8'
            }}>
              Specialized therapy services designed to meet each child's unique needs and developmental goals
            </p>
          </div>
          <div className="services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {services.map((service, index) => (
              <div key={index} className="service-card card" style={{
                padding: '2rem',
                textAlign: 'center',
                border: '1px solid rgba(156, 175, 136, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  marginBottom: '1rem',
                  color: 'var(--color-forest-green)'
                }}>
                  {service.name}
                </h3>
                <p style={{
                  color: 'var(--color-forest-green)',
                  opacity: '0.8',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="section-cta" style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn-primary" style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section" style={{
        padding: '80px 0',
        backgroundColor: 'white',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                color: 'var(--color-forest-green)'
              }}>
                Why Choose Nurture Nest?
              </h2>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  color: 'var(--color-terracotta)',
                  marginBottom: '0.5rem',
                  fontSize: '1.3rem'
                }}>
                  🌿 Nature-Inspired Environment
                </h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Our warm, welcoming space incorporates natural elements to create a calming atmosphere where children feel safe and ready to learn.
                </p>
                
                <h3 style={{
                  color: 'var(--color-terracotta)',
                  marginBottom: '0.5rem',
                  fontSize: '1.3rem'
                }}>
                  👨‍⚕️ Expert Team
                </h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Our licensed therapists bring years of experience and stay current with the latest evidence-based practices in pediatric therapy.
                </p>
                
                <h3 style={{
                  color: 'var(--color-terracotta)',
                  marginBottom: '0.5rem',
                  fontSize: '1.3rem'
                }}>
                  👨‍👩‍👧‍👦 Family-Centered Care
                </h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  We believe families are essential partners in therapy. We work closely with you to ensure progress continues at home.
                </p>
              </div>
              <Link to="/about" className="btn btn-primary" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Learn About Our Team
              </Link>
            </div>
            <div style={{
              backgroundColor: 'var(--color-cream)',
              padding: '3rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '6rem',
                marginBottom: '1rem'
              }}>🏡</div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--color-forest-green)'
              }}>
                Visit Our Clinic
              </h3>
              <p style={{
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Experience our welcoming, nature-inspired space designed specifically for children's comfort and success.
              </p>
              <Link to="/contact" className="btn btn-secondary">
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" style={{
        backgroundColor: 'white',
        padding: '80px 0',
        textAlign: 'center',
        width: '100%',
        borderTop: '1px solid #f0f0f0'
      }}>
        <div className="container-content">
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: 'var(--color-terracotta)'
          }}>
            Ready to Start Your Child's Journey?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            color: 'var(--color-forest-green)',
            maxWidth: '600px',
            margin: '0 auto 2rem auto',
            lineHeight: '1.6'
          }}>
            Contact us today to learn how we can support your child's development and celebrate their unique strengths.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/contact" className="btn" style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              backgroundColor: 'var(--color-terracotta)',
              color: 'white',
              fontWeight: '600',
              border: 'none'
            }}>
              Get Started Today
            </Link>
            <Link to="/services" className="btn" style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              backgroundColor: 'transparent',
              border: '2px solid var(--color-sage)',
              color: 'var(--color-sage)',
              fontWeight: '600'
            }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
