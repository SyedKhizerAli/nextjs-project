'use client';

import React from 'react';

export default function Header() {
  // Header styles
  const headerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid #1f1f1f',
    padding: '12px 16px'
  };

  // Nav link styles
  const navLinkStyle = {
    color: '#9ca3af',
    fontSize: '0.875rem',
    transition: 'color 0.2s'
  };

  // User profile styles
  const userProfileStyle = {
    backgroundColor: '#6d28d9',
    borderRadius: '9999px',
    padding: '4px 12px',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <header style={headerStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span style={{ marginLeft: '8px', fontWeight: 'bold', fontSize: '1.125rem' }}>NO HESI</span>
          </div>
          
          {/* Nav links - Hidden on mobile, shown on larger screens via CSS */}
          <nav className="main-nav" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="#" style={navLinkStyle}>Get started</a>
            <a href="#" style={navLinkStyle}>Shop</a>
            <a href="#" style={navLinkStyle}>About us</a>
            <a href="#" style={navLinkStyle}>News</a>
            <a href="#" style={navLinkStyle}>Contacts</a>
            <a href="#" style={navLinkStyle}>FAQ</a>
          </nav>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="header-links" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: '500' }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '9999px', marginRight: '4px' }}></span>
              <span>Live</span>
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: '500', color: '#9ca3af' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="header-link-text">Subscriptions</span>
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: '500', color: '#9ca3af' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
              <span className="header-link-text">Servers</span>
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: '500', color: '#9ca3af' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span className="header-link-text">Download launcher</span>
            </a>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '16px' }}>
            <div style={userProfileStyle}>
              <span style={{ 
                width: '24px', 
                height: '24px', 
                backgroundColor: '#9333ea', 
                borderRadius: '9999px', 
                marginRight: '4px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '0.75rem' 
              }}>
                JD
              </span>
              <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>JohnDoe_911</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 