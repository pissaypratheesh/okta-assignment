'use client';

import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { CustomSelect } from '@/components/ui/custom-select';
import { emails } from '@/lib/data/emails';
import { TEXT_STYLES, LAYOUT_STYLES, INTERACTIVE_STYLES } from '@/lib/constants/styles';

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
            <div className={TEXT_STYLES.sectionLabel}>Primary email address</div>
            <div className={TEXT_STYLES.description}>
              Select an email to be used for account-related notifications and can be used for password reset.
            </div>
          </div>
          <div className="w-full md:w-80">
            <CustomSelect
              value={primaryEmail}
              onChange={setPrimaryEmail}
              options={emailOptions}
              label="Primary email address"
            />
          </div>
        </div>

        {/* Divider */}
        <div className={LAYOUT_STYLES.sectionDivider}></div>

        {/* Backup Email */}
        <div className={LAYOUT_STYLES.formSection}>
          <div className={LAYOUT_STYLES.flex1}>
            <div className={TEXT_STYLES.sectionLabel}>Backup email address</div>
            <div className={TEXT_STYLES.description}>
              Your backup email address will be used as an additional destination for security-relevant 
              account notifications and can also be used for password resets.
            </div>
          </div>
          <div className="w-full md:w-80">
            <CustomSelect
              value={backupEmail}
              onChange={setBackupEmail}
              options={backupOptions}
              label="Backup email address"
            />
          </div>
        </div>

        {/* Divider */}
        <div className={LAYOUT_STYLES.sectionDivider}></div>

        {/* Keep Private */}
        <div className={LAYOUT_STYLES.formSection}>
          <div className={LAYOUT_STYLES.flex1}>
            <div className={TEXT_STYLES.sectionLabel}>Keep my email addresses private</div>
            <div className={TEXT_STYLES.description}>
              We'll remove your public profile email when performing web-based operations and sending 
              email on your behalf.
            </div>
          </div>
          <div className="w-full md:w-80 flex items-center justify-end">
            <Switch.Root
              className={INTERACTIVE_STYLES.switch}
              id="private-switch"
              checked={isPrivate}
              onCheckedChange={setIsPrivate}
              aria-label="Keep my email addresses private"
            >
              <Switch.Thumb className={INTERACTIVE_STYLES.switchThumb} />
            </Switch.Root>
          </div>
        </div>
      </div>
    </div>
  );
};
