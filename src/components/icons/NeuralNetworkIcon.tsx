import React from 'react';

interface NeuralNetworkIconProps {
  className?: string;
}

const NeuralNetworkIcon: React.FC<NeuralNetworkIconProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Nodes */}
      {/* Input layer */}
      <circle cx="4" cy="6" r="2" />
      <circle cx="4" cy="12" r="2" />
      <circle cx="4" cy="18" r="2" />
      
      {/* Hidden layer 1 */}
      <circle cx="12" cy="4" r="2" />
      <circle cx="12" cy="10" r="2" />
      <circle cx="12" cy="16" r="2" />
      <circle cx="12" cy="22" r="2" />
      
      {/* Output layer */}
      <circle cx="20" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      
      {/* Connections */}
      {/* Input to hidden connections */}
      <path d="M6 6L10 4" />
      <path d="M6 6L10 10" />
      <path d="M6 12L10 10" />
      <path d="M6 12L10 16" />
      <path d="M6 18L10 16" />
      <path d="M6 18L10 22" />
      
      {/* Hidden to output connections */}
      <path d="M14 4L18 8" />
      <path d="M14 10L18 8" />
      <path d="M14 16L18 16" />
      <path d="M14 22L18 16" />
    </svg>
  );
};

export default NeuralNetworkIcon; 