import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const navigation = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/students', label: 'Students' },
    { path: '/career', label: 'Career' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%'
    }}>
      <div className="container-content">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 0'
        }}>
          <Link to="/" onClick={handleLogoClick} style={{textDecoration: 'none'}}>
            <img 
              src="/logo.png" 
              alt="Nurture Nest Pediatric Therapy Logo" 
              style={{height: '60px', width: 'auto'}}
            />
          </Link>
          
          <nav>
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              gap: '2rem',
              margin: 0,
              padding: 0
            }}>
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    style={{
                      textDecoration: 'none',
                      color: location.pathname === item.path ? 'white' : '#355E3B',
                      fontWeight: '500',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: location.pathname === item.path ? '#9CAF88' : 'transparent',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
