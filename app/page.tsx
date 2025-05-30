'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

// Type definitions
interface PricingFeature {
  text: string;
}

interface PricingPlan {
  tier: number;
  title: string;
  price: {
    monthly: number;
    annually: number;
  };
  discount?: number;
  features: PricingFeature[];
  isPopular?: boolean;
  isCurrent?: boolean;
  hasTrial?: boolean;
  topLabel?: string;
}

// Header Component
function Header() {
  return (
    <header style={{
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(4px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '8px 24px'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7" y="3" width="10" height="18" fill="white" />
              <path d="M7 3L17 3L17 21L12 19L7 21V3Z" stroke="white" strokeWidth="1" />
            </svg>
            <div style={{ marginLeft: '8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span className="headline" style={{ fontSize: '14px', fontWeight: '700', color: 'white', lineHeight: '1' }}>NO HESI</span>
            </div>
          </a>
          
          <nav style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <a href="#" style={{ color: 'white', fontSize: '13px', fontWeight: '500', textDecoration: 'none', opacity: '0.8' }}>Get started</a>
            <a href="#" style={{ color: 'white', fontSize: '13px', fontWeight: '500', textDecoration: 'none', opacity: '0.8' }}>Shop</a>
            <a href="#" style={{ color: 'white', fontSize: '13px', fontWeight: '500', textDecoration: 'none', opacity: '0.8' }}>About us</a>
            <a href="#" style={{ color: 'white', fontSize: '13px', fontWeight: '500', textDecoration: 'none', opacity: '0.8' }}>News</a>
            <a href="#" style={{ color: 'white', fontSize: '13px', fontWeight: '500', textDecoration: 'none', opacity: '0.8' }}>Contacts</a>
            <a href="#" style={{ color: 'white', fontSize: '13px', fontWeight: '500', textDecoration: 'none', opacity: '0.8' }}>FAQ</a>
          </nav>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="#" style={{ 
            display: 'flex', 
            alignItems: 'center',
            fontSize: '13px', 
            fontWeight: '500', 
            textDecoration: 'none',
            color: 'white',
            gap: '4px'
          }}>
            <span style={{ 
              width: '6px', 
              height: '6px', 
              backgroundColor: '#ef4444', 
              borderRadius: '50%',
              display: 'inline-block'
            }}></span>
            Live
          </a>
          
          <a href="#" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px',
            fontSize: '13px', 
            fontWeight: '500', 
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.7 }}>
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Subscriptions</span>
          </a>
          
          <a href="#" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px',
            fontSize: '13px', 
            fontWeight: '500', 
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.7 }}>
              <rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
              <rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Servers</span>
          </a>
          
          <a href="#" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px',
            fontSize: '13px', 
            fontWeight: '500', 
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.7 }}>
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Download launcher</span>
          </a>
          
          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px 10px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '4px'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.7 }}>
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          <div style={{
            backgroundColor: '#6d28d9',
            borderRadius: '8px',
            padding: '6px 12px 6px 6px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              backgroundColor: 'transparent',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="User avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>JohnDoe_911</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

// Pricing Card Component
function PricingCard({ 
  tier, 
  title, 
  price, 
  isAnnual, 
  discount = 0, 
  features, 
  isPopular = false, 
  isCurrent = false, 
  hasTrial = false,
  topLabel = null
}: {
  tier: number;
  title: string;
  price: { monthly: number; annually: number };
  isAnnual: boolean;
  discount?: number;
  features: PricingFeature[];
  isPopular?: boolean;
  isCurrent?: boolean;
  hasTrial?: boolean;
  topLabel?: string | null;
}) {
  const currentPrice = isAnnual ? price.annually : price.monthly;
  const buttonText = isCurrent ? "CURRENT PLAN" : hasTrial ? "FREE 7-DAYS TRIAL" : "SUBSCRIBE";
  const [animationKey, setAnimationKey] = useState(0);
  
  // Update animation key when price changes to force re-render
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [isAnnual]);

  const iconMap = {
    0: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#333333"/>
        <path d="M12 7L15 12L12 17L9 12L12 7Z" fill="white"/>
      </svg>
    ),
    1: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#333333"/>
        <circle cx="12" cy="12" r="5" fill="white"/>
      </svg>
    ),
    2: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#333333"/>
        <path d="M7 12H17M12 7V17" stroke="orange" strokeWidth="2"/>
      </svg>
    ),
    3: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#DD0355"/>
        <circle cx="12" cy="12" r="5" fill="#DD0355"/>
      </svg>
    )
  };

  return (
    <div style={{ position: 'relative', paddingTop: topLabel ? '10px' : '0' }}>
      {topLabel && (
        <div style={{ 
          backgroundColor: '#DD0355',
          color: 'white',
          padding: '8px 15px 20px 15px',
          borderRadius: '8px 8px 0 0', 
          fontSize: '0.8rem',
          fontWeight: '500',
          fontFamily: 'michroma',
          letterSpacing: '0.03em',
          textTransform: 'uppercase',
          textAlign: 'left',
          position: 'absolute',
          top: '-20px',
          left: '0',
          right: '0',
          zIndex: 0
        }}>
          {topLabel}
        </div>
      )}
      
      <motion.div 
        className={isPopular ? "card-gradient-popular" : "card-gradient"}
        style={{
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '460px',
          background: isPopular ? 'linear-gradient(to bottom, #210526 0%, #090111 100%)' : 'linear-gradient(to bottom, #120821 0%, #050510 100%)',
          zIndex: 1
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: tier * 0.1 }}
        whileHover={{ 
          y: -5,
          boxShadow: isPopular ? '0 12px 40px rgba(221, 3, 85, 0.3)' : '0 12px 24px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'left', gap: '12px', marginBottom: '16px' }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
            width: '40px',
            height: '40px',
            borderRadius: '4px',
          }}>
            {iconMap[tier as keyof typeof iconMap]}
          </div>
          <span style={{ 
            fontSize: '0.75rem', 
            color: 'rgba(255, 255, 255, 0.9)', 
            textTransform: 'uppercase',
            fontWeight: '500',
            letterSpacing: '0.03em',
            fontFamily: 'michroma'
          }}>
            TIER {tier}
          </span>
        </div>
        
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '400', 
          marginBottom: '8px',
          marginTop: '0',
          color: 'white',
          fontFamily: 'Inter',
          textAlign: 'left'
        }}>{title}</h3>
        
        <div style={{ marginBottom: '24px', textAlign: 'left', height: '50px', overflow: 'hidden', position: 'relative' }}>
          {tier === 0 ? (
            <span style={{ 
              textAlign: 'left',
              fontSize: '2rem', 
              fontWeight: '300', 
              lineHeight: '1',
              fontFamily: 'Inter',
              display: 'block'
            }}>Free</span>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div 
                key={animationKey}
                initial={{ 
                  opacity: 0,
                  rotateX: -90,
                  y: 20,
                  scale: 0.8
                }}
                animate={{ 
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }
                }}
                exit={{ 
                  opacity: 0,
                  rotateX: 90,
                  y: -20,
                  scale: 0.8,
                  transition: {
                    duration: 0.2
                  }
                }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'left',
                  transformStyle: 'preserve-3d',
                  perspective: '800px',
                  transformOrigin: 'center center'
                }}
              >
                <SlotMachinePrice price={currentPrice} />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        
        <button style={{
          backgroundColor: isCurrent ? '#333' : 'white',
          color: isCurrent ? 'white' : 'black',
          padding: '16px',
          borderRadius: '6px',
          width: '100%',
          fontWeight: '600',
          cursor: 'pointer',
          marginBottom: '16px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontSize: '0.75rem',
          fontFamily: 'michroma',
          fontStyle: 'italic'
        }}>
          {buttonText}
        </button>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '8px',
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '0.875rem',
          marginBottom: '32px',
          cursor: 'pointer',
          textDecoration: 'underline',
          fontWeight: '300'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Send as a Gift</span>
        </div>
        
        <div>
          {features.map((feature: PricingFeature, index: number) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              fontSize: '0.95rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '16px'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '20px', marginTop: '2px' }}>
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" strokeOpacity="0.3"/>
                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function SlotMachineDigit({ value, index }: { value: string, index: number }) {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '$'];
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Don't animate decimal points or dollar signs
    if (value === '.' || value === '$') {
      setDisplayValue(value);
      return;
    }
    
    setIsAnimating(true);
    const animationDuration = 1000; // 1 second total
    const startTime = Date.now();
    const endTime = startTime + animationDuration;
    
    // Function to get a random digit
    const getRandomDigit = () => {
      return digits[Math.floor(Math.random() * (digits.length - 2))];
    };
    
    // Animation frame handler
    const animate = () => {
      const now = Date.now();
      const progress = (now - startTime) / animationDuration;
      
      if (progress >= 1) {
        // Animation complete
        setDisplayValue(value);
        setIsAnimating(false);
        return;
      }
      
      // During animation, show random digits
      // Near the end, start showing the correct value more frequently
      if (progress > 0.8 && Math.random() > 0.5) {
        setDisplayValue(value);
      } else {
        setDisplayValue(getRandomDigit());
      }
      
      // Schedule next frame
      requestAnimationFrame(animate);
    };
    
    // Start animation with a slight delay based on position
    const animationTimeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, index * 50);
    
    // Clean up
    return () => clearTimeout(animationTimeout);
  }, [value, index]);
  
  return (
    <span style={{ 
      display: 'inline-block', 
      width: value === '.' ? '8px' : value === '$' ? '16px' : '20px',
      textAlign: 'center',
      fontVariantNumeric: 'tabular-nums',
      overflow: 'hidden',
      transition: isAnimating ? 'none' : 'color 0.2s ease-out'
    }}>
      {displayValue}
    </span>
  );
}

function SlotMachinePrice({ price }: { price: number }) {
  // Convert price to string with 2 decimal places
  const priceString = '$' + price.toFixed(2);
  
  return (
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <span style={{ 
        fontSize: '2rem', 
        fontWeight: '300', 
        lineHeight: '1',
        fontFamily: 'Inter'
      }}>
        {priceString.split('').map((char, index) => (
          <SlotMachineDigit key={index} value={char} index={index} />
        ))}
      </span>
      <span style={{ 
        fontSize: '1.25rem', 
        color: 'rgba(255, 255, 255, 0.7)', 
        marginLeft: '4px', 
        fontWeight: '300'
      }}>/month</span>
    </div>
  );
}

// Main Page Component
export default function Home() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingData: PricingPlan[] = [
    {
      tier: 0,
      title: "Public",
      price: { monthly: 0, annually: 0 },
      features: [
        { text: "Access to 100+ public servers" },
        { text: "Monthly public car updates" },
        { text: "Help & FAQ support" },
      ],
      isCurrent: true,
    },
    {
      tier: 1,
      title: "Public+",
      price: { monthly: 2.42, annually: 1.94 },
      discount: 20,
      features: [
        { text: "Access to \"Public Pack\" Servers" },
        { text: "In-Game Badges" },
        { text: "VIP Alternative and Drift Servers" },
        { text: "Priority Queue for Server Hosting" },
      ],
    },
    {
      tier: 2,
      title: "Midnight",
      price: { monthly: 5.58, annually: 4.46 },
      discount: 20,
      features: [
        { text: "Spec Cars in Spec Servers" },
        { text: "JDM, VTEC, & Manual Servers" },
        { text: "10 Server Hosting Presets" },
        { text: "No Server Hosting Queue" },
        { text: "6-Hour Server Hosting Limit" },
      ],
      hasTrial: true,
    },
    {
      tier: 3,
      title: "Underground",
      price: { monthly: 6.67, annually: 4.00 },
      discount: 20,
      features: [
        { text: "Early Access to Content & Features" },
        { text: "Exclusive Access to T10 Map" },
        { text: "Three New Spec Cars Every Month" },
        { text: "Exclusive Access to Spec Cars on Public Servers" },
        { text: "Unlimited Server Hosting Presets" },
        { text: "No Time Limits on Server Hosting" },
        { text: "Host Up to 32 Players on Server Hosting" },
      ],
      isPopular: true,
      topLabel: "MOST POPULAR"
    },
  ];

  return (
    <main style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #000000, #0A0014)',
      fontFamily: 'Inter, sans-serif'
    }} className="page-container">
      <Header />
      
      <section style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '64px 16px',
        textAlign: 'center',
        position: 'relative',
        background: 'radial-gradient(circle at 50% 40%, rgba(221, 3, 85, 0.2), transparent 70%), radial-gradient(circle at 80% 70%, rgba(80, 0, 100, 0.1), transparent 60%)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <h1 className="headline" style={{
            fontSize: '4rem',
            fontWeight: '400',
            marginBottom: '18px',
            lineHeight: '1.2',
            color: 'white',
            letterSpacing: '0.03em'
          }}>
            <span style={{ color: '#E2E2E2' }}>JOIN </span>
            <span style={{ color: '#DD0355' }}>28,643</span>
            <span style={{ color: '#E2E2E2' }}> OTHERS</span><br />
            <span style={{ color: '#E2E2E2' }}>ON NO HESI VIP</span>
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.125rem', fontWeight: '500' }}>
            Enhance your No Hesi experience with VIP
          </p>
        </motion.div>
        
        <div style={{ marginBottom: '48px' }}>
          <div className="toggle-container" style={{
            display: 'inline-flex',
            padding: '4px',
            borderRadius: '1%',
            position: 'relative',
            marginBottom: '16px'
          }}>
            <button
              style={{
                padding: '10px 32px',
                borderRadius: '1%',
                fontSize: '0.875rem',
                fontWeight: 600,
                background: 'transparent',
                border: 'none',
                color: !isAnnual ? 'black' : 'rgba(255, 255, 255, 0.7)',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 10
              }}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              style={{
                padding: '10px 32px',
                borderRadius: '1%',
                fontSize: '0.875rem',
                fontWeight: 600,
                background: 'transparent',
                border: 'none',
                color: isAnnual ? 'black' : 'rgba(255, 255, 255, 0.7)',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 10
              }}
              onClick={() => setIsAnnual(true)}
            >
              Annually
              {isAnnual && (
                <span className="headline primary-glow" style={{
                  position: 'absolute',
                  top: '-16px',
                  right: '0',
                  backgroundColor: '#22C55E',
                  color: 'black',
                  fontSize: '0.6rem',
                  fontWeight: 'bold',
                  padding: '4px 8px',
                  borderRadius: '9999px',
                  fontFamily: 'Inter' 
                }}>
                  Save 20%
                </span>
              )}
            </button>
            
            <motion.div
              style={{
                position: 'absolute',
                top: '4px',
                bottom: '4px',
                borderRadius: '9999px',
                backgroundColor: 'white'
              }}
              animate={{
                left: isAnnual ? '50%' : '4px',
                right: isAnnual ? '4px' : '50%',
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <div style={{ marginTop: '16px', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            Can't choose? <a href="#" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Compare plans →</a>
          </div>
        </div>
        
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {pricingData.map((plan) => (
            <PricingCard
              key={plan.tier}
              tier={plan.tier}
              title={plan.title}
              price={plan.price}
              isAnnual={isAnnual}
              discount={plan.discount}
              features={plan.features}
              isPopular={plan.isPopular}
              isCurrent={plan.isCurrent}
              hasTrial={plan.hasTrial}
              topLabel={plan.topLabel}
            />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
