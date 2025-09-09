'use client';

import React from 'react';
import { 
  EmailList, 
  EmailSettingsForm, 
  PageHeader 
} from '@/components/email-settings';
import { useEmailSettings } from '@/hooks/use-email-settings';
import { LAYOUT_STYLES, TEXT_STYLES } from '@/lib/constants/styles';

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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Emails</h1>
              <p className="text-gray-600 mb-6">
                Emails you can use to sign in to your account.
              </p>
            </div>
            <EmailList 
              onManageEmail={handleManageEmail}
              onRemoveEmail={handleRemoveEmail}
            />
          </section>

          <section>
            <div className={LAYOUT_STYLES.sectionHeader}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Email settings</h2>
              <p className="text-gray-600 mb-6">
                Configure how emails are used in relation to your account.
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