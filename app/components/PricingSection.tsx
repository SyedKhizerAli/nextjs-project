'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PricingToggle from './PricingToggle';
import PricingCard from './PricingCard';

// Pricing data
const pricingData = [
  {
    tier: 0,
    title: "Public",
    price: {
      monthly: 0,
      annually: 0,
    },
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
    price: {
      monthly: 2.42,
      annually: 1.94, // 20% discount applied
    },
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
    price: {
      monthly: 5.58,
      annually: 4.46, // 20% discount applied
    },
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
    price: {
      monthly: 6.67,
      annually: 4.00, // 40% discount applied
    },
    discount: 40,
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
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '64px 16px' }}>
      <motion.div 
        style={{ textAlign: 'center', marginBottom: '48px' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="gradient-text header-title" style={{ 
          fontSize: '4rem', 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          letterSpacing: '0.025em',
          marginBottom: '12px' 
        }}>
          JOIN 28,643 OTHERS <br /> ON NO HESI VIP
        </h1>
        <p style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>
          Enhance your No Hesi experience with VIP
        </p>
      </motion.div>
      
      <div style={{ marginBottom: '48px', display: 'flex', justifyContent: 'center' }}>
        <PricingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
      </div>
      
      <motion.div 
        className="pricing-grid"
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
          <AnimatePresence key={plan.tier} mode="sync">
            <PricingCard
              key={`plan-${plan.tier}-${isAnnual ? 'annual' : 'monthly'}`}
              tier={plan.tier}
              title={plan.title}
              price={plan.price}
              isAnnual={isAnnual}
              discount={plan.discount}
              features={plan.features}
              isPopular={plan.isPopular}
              isCurrent={plan.isCurrent}
              hasTrial={plan.hasTrial}
            />
          </AnimatePresence>
        ))}
      </motion.div>
    </section>
  );
} 