import React from 'react';

interface TransferLearningIconProps {
  className?: string;
}

const TransferLearningIcon: React.FC<TransferLearningIconProps> = ({ className }) => {
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
      {/* Source Network (smaller) */}
      <circle cx="6" cy="7" r="1.5" /> {/* Input layer */}
      <circle cx="6" cy="11" r="1.5" />
      
      <circle cx="10" cy="6" r="1.5" /> {/* Hidden layer */}
      <circle cx="10" cy="9" r="1.5" />
      <circle cx="10" cy="12" r="1.5" />
      
      <circle cx="14" cy="9" r="1.5" /> {/* Output layer */}
      
      {/* Source Network Connections */}
      <path d="M7.5 7L8.5 6" />
      <path d="M7.5 7L8.5 9" />
      <path d="M7.5 11L8.5 9" />
      <path d="M7.5 11L8.5 12" />
      <path d="M11.5 6L12.5 9" />
      <path d="M11.5 9L12.5 9" />
      <path d="M11.5 12L12.5 9" />
      
      {/* Transfer Arrow */}
      <path d="M16 9L19 14" strokeWidth="2.5" />
      <path d="M19 12L19 14L17 14" /> {/* Arrow head */}
      
      {/* Target Network (larger) */}
      <circle cx="6" cy="17" r="1.5" /> {/* Input layer */}
      <circle cx="6" cy="21" r="1.5" />
      
      <circle cx="10" cy="16" r="1.5" /> {/* Hidden layer */}
      <circle cx="10" cy="19" r="1.5" />
      <circle cx="10" cy="22" r="1.5" />
      
      <circle cx="14" cy="19" r="1.5" /> {/* Output layer */}
      
      {/* Target Network Connections */}
      <path d="M7.5 17L8.5 16" />
      <path d="M7.5 17L8.5 19" />
      <path d="M7.5 21L8.5 19" />
      <path d="M7.5 21L8.5 22" />
      <path d="M11.5 16L12.5 19" />
      <path d="M11.5 19L12.5 19" />
      <path d="M11.5 22L12.5 19" />
    </svg>
  );
};

export default TransferLearningIcon; 