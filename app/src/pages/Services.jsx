import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      name: 'ABA Therapy',
      description: 'Applied Behavior Analysis therapy uses evidence-based techniques to help children develop essential life skills, reduce challenging behaviors, and increase positive behaviors.',
      benefits: ['Social skills development', 'Communication improvement', 'Behavioral intervention', 'Life skills training']
    },
    {
      name: 'Speech Language Pathology',
      description: 'Our speech-language pathologists help children develop communication skills, language comprehension, and social communication abilities.',
      benefits: ['Language development', 'Communication skills', 'Social interaction', 'Comprehension improvement']
    },
    {
      name: 'Speech Therapy',
      description: 'Focused therapy to improve speech clarity, fluency, and articulation, helping children express themselves more effectively.',
      benefits: ['Speech clarity', 'Fluency improvement', 'Articulation training', 'Confidence building']
    },
    {
      name: 'Occupational Therapy',
      description: 'Helping children develop fine motor skills, sensory processing abilities, and daily living skills for greater independence.',
      benefits: ['Fine motor skills', 'Sensory processing', 'Daily living skills', 'Independence building']
    },
    {
      name: 'Early On',
      description: 'Early intervention services for infants and toddlers, providing crucial support during the most formative years.',
      benefits: ['Early intervention', 'Developmental support', 'Family guidance', 'Milestone achievement']
    },
    {
      name: 'Telehealth',
      description: 'Remote therapy sessions that bring our services directly to your home, providing flexibility and continuity of care.',
      benefits: ['Convenient access', 'Home environment', 'Flexible scheduling', 'Continuous care']
    }
  ];

  return (
    <div className="services-page" style={{ width: '100%' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-sage), var(--color-forest-green))',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        width: '100%'
      }}>
        <div className="container-content">
          <h1 style={{
            fontSize: '3.5rem', 
            marginBottom: '1.5rem', 
            color: 'white',
            fontWeight: '700'
          }}>
            Our Comprehensive Services
          </h1>
          <p style={{
            fontSize: '1.3rem', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: '0.95'
          }}>
            Evidence-based pediatric therapy services designed to help every child reach their full potential
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'var(--color-cream)',
        width: '100%'
      }}>
        <div className="container-content">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem', marginBottom: '4rem'}}>
            {services.map((service, index) => (
              <div key={index} className="card" style={{
                padding: '3rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <h2 style={{
                  color: 'var(--color-forest-green)', 
                  marginBottom: '1.5rem', 
                  fontSize: '2rem',
                  fontWeight: '600'
                }}>
                  {service.name}
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  color: 'var(--color-forest-green)',
                  opacity: '0.8'
                }}>
                  {service.description}
                </p>
                <div>
                  <h4 style={{
                    color: 'var(--color-terracotta)', 
                    marginBottom: '1rem',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>
                    Key Benefits:
                  </h4>
                  <ul style={{listStyle: 'none', paddingLeft: 0}}>
                    {service.benefits.map((benefit, i) => (
                      <li key={i} style={{
                        padding: '0.8rem 0',
                        position: 'relative',
                        paddingLeft: '2.5rem',
                        fontSize: '1rem',
                        color: 'var(--color-forest-green)'
                      }}>
                        <span style={{
                          position: 'absolute', 
                          left: 0,
                          color: 'var(--color-sage)',
                          fontSize: '1.2rem'
                        }}>
                          ✓
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '4rem',
            borderRadius: '16px',
            border: '2px solid var(--color-sage)',
            marginTop: '2rem'
          }}>
            <h2 style={{
              color: 'var(--color-terracotta)', 
              marginBottom: '1.5rem',
              fontSize: '2.2rem'
            }}>
              Ready to Get Started?
            </h2>
            <p style={{
              fontSize: '1.2rem', 
              marginBottom: '2.5rem',
              color: 'var(--color-forest-green)',
              lineHeight: '1.6',
              maxWidth: '500px',
              margin: '0 auto 2.5rem auto'
            }}>
              Contact us today to learn more about our services and schedule a consultation for your child.
            </p>
            <Link to="/contact" className="btn" style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              backgroundColor: 'var(--color-terracotta)',
              color: 'white',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '8px'
            }}>
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
