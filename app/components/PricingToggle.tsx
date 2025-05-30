'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface PricingToggleProps {
  isAnnual: boolean;
  onChange: (isAnnual: boolean) => void;
}

export default function PricingToggle({ isAnnual, onChange }: PricingToggleProps) {
  // Toggle container styles
  const containerStyle = {
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: '4px',
    borderRadius: '9999px',
    position: 'relative' as const
  };

  // Toggle button styles
  const buttonStyle = {
    padding: '8px 24px',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 500,
    position: 'relative' as const,
    zIndex: 10,
    transition: 'all 0.3s',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer'
  };

  // Badge styles
  const badgeStyle = {
    position: 'absolute' as const,
    top: '-16px',
    right: '0',
    backgroundColor: '#22C55E',
    fontSize: '0.75rem',
    color: 'white',
    fontWeight: 'bold',
    padding: '2px 8px',
    borderRadius: '9999px'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={containerStyle}>
        <button
          style={{ ...buttonStyle, color: !isAnnual ? 'black' : '#9ca3af' }}
          onClick={() => onChange(false)}
        >
          Monthly
        </button>
        <button
          style={{ ...buttonStyle, color: isAnnual ? 'black' : '#9ca3af' }}
          onClick={() => onChange(true)}
        >
          Annually
          {isAnnual && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={badgeStyle}
            >
              Save 20%
            </motion.span>
          )}
        </button>
        
        {/* Sliding background */}
        <motion.div
          style={{
            position: 'absolute',
            top: '4px',
            bottom: '4px',
            borderRadius: '9999px',
            backgroundColor: 'white'
          }}
          initial={false}
          animate={{
            left: isAnnual ? '50%' : '4px',
            right: isAnnual ? '4px' : '50%',
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginLeft: '16px' }}>
        <button 
          style={{ 
            background: 'transparent', 
            border: 'none', 
            color: '#9ca3af', 
            cursor: 'pointer', 
            transition: 'color 0.2s' 
          }} 
          onClick={() => {}}
        >
          Can't choose? Compare plans &rarr;
        </button>
      </div>
    </div>
  );
} 