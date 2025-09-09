'use client';

import { useState, useCallback } from 'react';
import { emails } from '@/lib/data/emails';

export const useEmailSettings = () => {
  const [primaryEmail, setPrimaryEmail] = useState(emails[0].email);
  const [backupEmail, setBackupEmail] = useState('Allow all verified emails');
  const [isPrivate, setIsPrivate] = useState(false);

  const handleManageEmail = useCallback((email: string) => {
    console.log('🔧 [EMAIL ACTION] Manage clicked for email:', email);
    // Implement manage functionality
  }, []);

  const handleRemoveEmail = useCallback((email: string) => {
    console.log('🗑️ [EMAIL ACTION] Remove clicked for email:', email);
    // Implement remove functionality
  }, []);

  const handleBackClick = useCallback(() => {
    console.log('⬅️ [NAVIGATION] Back button clicked');
    // Implement navigation back
  }, []);

  const handlePrimaryEmailChange = useCallback((email: string) => {
    console.log('📧 [SETTINGS] Primary email changed to:', email);
    setPrimaryEmail(email);
  }, []);

  const handleBackupEmailChange = useCallback((email: string) => {
    console.log('📧 [SETTINGS] Backup email changed to:', email);
    setBackupEmail(email);
  }, []);

  const handlePrivacyToggle = useCallback((isPrivate: boolean) => {
    console.log('🔒 [SETTINGS] Privacy setting toggled to:', isPrivate ? 'PRIVATE' : 'PUBLIC');
    setIsPrivate(isPrivate);
  }, []);

  return {
    // State
    primaryEmail,
    backupEmail,
    isPrivate,
    
    // Enhanced event handlers with logging
    handlePrimaryEmailChange,
    handleBackupEmailChange,
    handlePrivacyToggle,
    handleManageEmail,
    handleRemoveEmail,
    handleBackClick,
  };
};
