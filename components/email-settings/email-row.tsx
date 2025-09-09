import React from 'react';
import { Badge } from '@/components/ui/badge';
import { EmailActionsMenu } from './email-actions-menu';
import { Email } from '@/lib/data/emails';

// Text constants
const TEXT = {
  DEFAULT_EMAIL_DESCRIPTION: 'This email address is the default for all notifications and account access.',
} as const;

interface EmailRowProps extends Email {
  onManage?: (email: string) => void;
  onRemove?: (email: string) => void;
}

export const EmailRow: React.FC<EmailRowProps> = ({
  email,
  primary,
  verified,
  unverified,
  default: isDefault,
  onManage,
  onRemove,
}) => {
  const handleManage = () => {
    onManage?.(email);
  };

  const handleRemove = () => {
    onRemove?.(email);
  };

  return (
    <div className="flex items-start justify-between py-4 px-6 hover:bg-gray-50 transition">
      <div className="flex flex-col">
        <div className="flex items-center text-sm text-gray-900">
          <span className="font-bold">{email}</span>
          {primary && <Badge label="PRIMARY" variant="orange" />}
          {verified && <Badge label="VERIFIED" variant="green" />}
          {unverified && <Badge label="UNVERIFIED" variant="gray" />}
        </div>
        {isDefault && (
          <p className="text-xs text-gray-500 mt-1">
            {TEXT.DEFAULT_EMAIL_DESCRIPTION}
          </p>
        )}
      </div>
      <EmailActionsMenu onManage={handleManage} onRemove={handleRemove} />
    </div>
  );
};
