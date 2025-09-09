'use client';

import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { CustomSelect } from '@/components/ui/custom-select';
import { emails } from '@/lib/data/emails';
import { TEXT_STYLES, LAYOUT_STYLES, INTERACTIVE_STYLES } from '@/lib/constants/styles';

// Text constants
const TEXT = {
  PRIMARY_EMAIL_LABEL: 'Primary email address',
  PRIMARY_EMAIL_DESCRIPTION: 'Select an email to be used for account-related notifications and can be used for password reset.',
  BACKUP_EMAIL_LABEL: 'Backup email address',
  BACKUP_EMAIL_DESCRIPTION: 'Your backup email address will be used as an additional destination for security-relevant account notifications and can also be used for password resets.',
  PRIVACY_LABEL: 'Keep my email addresses private',
  PRIVACY_DESCRIPTION: 'We\'ll remove your public profile email when performing web-based operations and sending email on your behalf.',
  PRIVACY_ARIA_LABEL: 'Keep my email addresses private',
} as const;

interface EmailSettingsFormProps {
  primaryEmail: string;
  setPrimaryEmail: (email: string) => void;
  backupEmail: string;
  setBackupEmail: (email: string) => void;
  isPrivate: boolean;
  setIsPrivate: (isPrivate: boolean) => void;
}

export const EmailSettingsForm: React.FC<EmailSettingsFormProps> = ({
  primaryEmail,
  setPrimaryEmail,
  backupEmail,
  setBackupEmail,
  isPrivate,
  setIsPrivate,
}) => {
  const emailOptions = emails.map(e => e.email);
  const backupOptions = ['Allow all verified emails', ...emailOptions];

  return (
    <div className={LAYOUT_STYLES.cardContainer}>
      <div>
        {/* Primary Email */}
        <div className={LAYOUT_STYLES.formSection}>
          <div className={LAYOUT_STYLES.flex1}>
            <div className={TEXT_STYLES.sectionLabel}>{TEXT.PRIMARY_EMAIL_LABEL}</div>
            <p className={TEXT_STYLES.description}>
              {TEXT.PRIMARY_EMAIL_DESCRIPTION}
            </p>
          </div>
          <div className="w-full md:w-80">
            <CustomSelect
              value={primaryEmail}
              onChange={setPrimaryEmail}
              options={emailOptions}
              label={TEXT.PRIMARY_EMAIL_LABEL}
            />
          </div>
        </div>

        {/* Divider */}
        <div className={LAYOUT_STYLES.sectionDivider}></div>

        {/* Backup Email */}
        <div className={LAYOUT_STYLES.formSection}>
          <div className={LAYOUT_STYLES.flex1}>
            <div className={TEXT_STYLES.sectionLabel}>{TEXT.BACKUP_EMAIL_LABEL}</div>
            <p className={TEXT_STYLES.description}>
              {TEXT.BACKUP_EMAIL_DESCRIPTION}
            </p>
          </div>
          <div className="w-full md:w-80">
            <CustomSelect
              value={backupEmail}
              onChange={setBackupEmail}
              options={backupOptions}
              label={TEXT.BACKUP_EMAIL_LABEL}
            />
          </div>
        </div>

        {/* Divider */}
        <div className={LAYOUT_STYLES.sectionDivider}></div>

        {/* Keep Private */}
        <div className={LAYOUT_STYLES.formSection}>
          <div className={LAYOUT_STYLES.flex1}>
            <div className={TEXT_STYLES.sectionLabel}>{TEXT.PRIVACY_LABEL}</div>
            <p className={TEXT_STYLES.description}>
              {TEXT.PRIVACY_DESCRIPTION}
            </p>
          </div>
          <div className="w-full md:w-80 flex items-center justify-end">
            <Switch.Root
              className={INTERACTIVE_STYLES.switch}
              id="private-switch"
              checked={isPrivate}
              onCheckedChange={setIsPrivate}
              aria-label={TEXT.PRIVACY_ARIA_LABEL}
            >
              <Switch.Thumb className={INTERACTIVE_STYLES.switchThumb} />
            </Switch.Root>
          </div>
        </div>
      </div>
    </div>
  );
};
