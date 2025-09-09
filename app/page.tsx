'use client';

import React from 'react';
import { 
  EmailList, 
  EmailSettingsForm, 
  PageHeader 
} from '@/components/email-settings';
import { useEmailSettings } from '@/hooks/use-email-settings';
import { LAYOUT_STYLES, TEXT_STYLES } from '@/lib/constants/styles';

// Text constants
const TEXT = {
  EMAILS_TITLE: 'Emails',
  EMAILS_DESCRIPTION: 'Emails you can use to sign in to your account.',
  EMAIL_SETTINGS_TITLE: 'Email settings',
  EMAIL_SETTINGS_DESCRIPTION: 'Configure how emails are used in relation to your account.',
} as const;

export default function EmailSettingsPage() {
  const {
    primaryEmail,
    backupEmail,
    isPrivate,
    handlePrimaryEmailChange,
    handleBackupEmailChange,
    handlePrivacyToggle,
    handleManageEmail,
    handleRemoveEmail,
    handleBackClick,
  } = useEmailSettings();

  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <PageHeader onBackClick={handleBackClick} />
      
      <div className={LAYOUT_STYLES.mainContainer}>
        <div className={LAYOUT_STYLES.contentWrapper}>
          <section className={LAYOUT_STYLES.sectionWrapper}>
            <div className={LAYOUT_STYLES.sectionHeader}>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{TEXT.EMAILS_TITLE}</h1>
              <p className="text-gray-600 mb-6">
                {TEXT.EMAILS_DESCRIPTION}
              </p>
            </div>
            <EmailList 
              onManageEmail={handleManageEmail}
              onRemoveEmail={handleRemoveEmail}
            />
          </section>

          <section>
            <div className={LAYOUT_STYLES.sectionHeader}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{TEXT.EMAIL_SETTINGS_TITLE}</h2>
              <p className="text-gray-600 mb-6">
                {TEXT.EMAIL_SETTINGS_DESCRIPTION}
              </p>
            </div>
            <EmailSettingsForm
              primaryEmail={primaryEmail}
              setPrimaryEmail={handlePrimaryEmailChange}
              backupEmail={backupEmail}
              setBackupEmail={handleBackupEmailChange}
              isPrivate={isPrivate}
              setIsPrivate={handlePrivacyToggle}
            />
          </section>
        </div>
      </div>
    </main>
  );
}