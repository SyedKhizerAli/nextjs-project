'use client';

import { motion } from 'framer-motion';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  tier: number;
  title: string;
  price: {
    monthly: number;
    annually: number;
  };
  isAnnual: boolean;
  discount?: number;
  features: PricingFeature[];
  isPopular?: boolean;
  isCurrent?: boolean;
  hasTrial?: boolean;
}

export default function PricingCard({
  tier,
  title,
  price,
  isAnnual,
  discount = 0,
  features,
  isPopular = false,
  isCurrent = false,
  hasTrial = false,
}: PricingCardProps) {
  // Calculate the price based on whether annual billing is selected
  const currentPrice = isAnnual ? price.annually : price.monthly;
  
  // Determine the action button text
  const buttonText = isCurrent 
    ? "CURRENT PLAN"
    : hasTrial 
      ? "FREE 7-DAYS TRIAL"
      : "SUBSCRIBE";

  // Card styles
  const cardStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(4px)',
    borderRadius: '12px',
    padding: '24px',
    border: isPopular ? '2px solid #DD0355' : '1px solid #1f1f1f',
    transition: 'all 0.5s',
    position: 'relative' as const
  };

  // Button styles
  const buttonStyle = {
    backgroundColor: isCurrent 
      ? '#333'
      : buttonText === "FREE 7-DAYS TRIAL"
        ? 'transparent' 
        : 'white',
    color: isCurrent || buttonText === "FREE 7-DAYS TRIAL" ? 'white' : 'black',
    border: buttonText === "FREE 7-DAYS TRIAL" ? '2px solid white' : 'none',
    padding: '12px',
    borderRadius: '6px',
    width: '100%',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s'
  };

  // Badge styles
  const badgeStyle = {
    backgroundColor: '#DD0355',
    position: 'absolute' as const,
    top: '-12px',
    right: '16px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    padding: '4px 16px',
    borderRadius: '9999px',
    color: 'white'
  };

  const discountBadgeStyle = {
    backgroundColor: '#22C55E',
    fontSize: '0.75rem',
    color: 'white',
    fontWeight: 'bold',
    padding: '2px 8px',
    borderRadius: '9999px',
    marginLeft: 'auto'
  };

  return (
    <motion.div 
      style={cardStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: tier * 0.1 }}
    >
      {isPopular && (
        <div style={badgeStyle}>
          MOST POPULAR
        </div>
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af', marginBottom: '8px' }}>
        <span style={{ backgroundColor: '#333', padding: '4px', borderRadius: '4px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          </svg>
        </span>
        <span style={{ textTransform: 'uppercase', fontSize: '0.875rem' }}>TIER {tier}</span>
        
        {discount > 0 && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={discountBadgeStyle}
          >
            -{discount}%
          </motion.span>
        )}
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{title}</h3>
      </div>
      
      <motion.div
        key={`price-${isAnnual ? 'annual' : 'monthly'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ marginBottom: '24px' }}
      >
        {tier === 0 ? (
          <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Free</span>
        ) : (
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>${currentPrice.toFixed(2)}</span>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '4px', marginLeft: '4px' }}>/month</span>
          </div>
        )}
      </motion.div>
      
      <button style={buttonStyle}>
        {buttonText}
      </button>
      
      <button style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '8px', 
        color: '#9ca3af', 
        fontSize: '0.875rem', 
        marginTop: '16px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer' 
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12v10H4V12"/>
          <path d="M2 7h20v5H2z"/>
          <path d="M12 22V7"/>
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
        </svg>
        Send as a Gift
      </button>
      
      <div style={{ marginTop: '24px' }}>
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '12px', 
              fontSize: '0.875rem', 
              color: '#9ca3af', 
              marginBottom: '12px' 
            }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 