import React from 'react';
import { HEADER_STYLES, INTERACTIVE_STYLES } from '@/lib/constants/styles';

interface PageHeaderProps {
  onBackClick?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ onBackClick }) => {
  return (
    <header className={HEADER_STYLES.header}>
      <div className={HEADER_STYLES.headerContainer}>
        <nav className={HEADER_STYLES.nav}>
        <button 
          aria-label="Back" 
          className={INTERACTIVE_STYLES.backButton}
          onClick={onBackClick}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path 
              d="M8 4l-6 6m0 0l6 6m-6-6h16" 
              stroke="#4B5563" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className={HEADER_STYLES.navText}>Your personal account</span>
      </nav>
      </div>
    </header>
  );
};
