import React from 'react';
import { EmailRow } from './email-row';
import { emails } from '@/lib/data/emails';
import { LAYOUT_STYLES } from '@/lib/constants/styles';

interface EmailListProps {
  onManageEmail?: (email: string) => void;
  onRemoveEmail?: (email: string) => void;
}

export const EmailList: React.FC<EmailListProps> = ({
  onManageEmail,
  onRemoveEmail,
}) => {
  return (
    <div className={LAYOUT_STYLES.cardContainer}>
      {emails.map((email, index) => (
        <React.Fragment key={email.email}>
          <EmailRow 
            {...email} 
            onManage={onManageEmail}
            onRemove={onRemoveEmail}
          />
          {index < emails.length - 1 && (
            <div className={LAYOUT_STYLES.sectionDivider} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
