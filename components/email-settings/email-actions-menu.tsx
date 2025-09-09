'use client';

import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Menu, Trash2 } from 'lucide-react';
import { INTERACTIVE_STYLES, TEXT_STYLES } from '@/lib/constants/styles';

interface EmailActionsMenuProps {
  onManage?: () => void;
  onRemove?: () => void;
}

export const EmailActionsMenu: React.FC<EmailActionsMenuProps> = ({
  onManage,
  onRemove,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleManageClick = () => {
    console.log('⚙️ [MENU] Manage menu item clicked');
    onManage?.();
  };

  const handleRemoveClick = () => {
    console.log('🗑️ [MENU] Remove menu item clicked');
    onRemove?.();
  };

  const handleMenuToggle = (open: boolean) => {
    console.log(`📋 [MENU] Email actions menu ${open ? 'opened' : 'closed'}`);
    setIsOpen(open);
  };

  return (
    <div className="relative flex items-center">
      <DropdownMenu onOpenChange={handleMenuToggle}>
        <DropdownMenuTrigger asChild>
          <button
            aria-label="Email actions"
            className={`${INTERACTIVE_STYLES.iconButton} ${
              isOpen ? 'bg-gray-100' : ''
            }`}
          >
            <span className="sr-only">Open menu</span>
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="4" cy="10" r="1.5" fill={isOpen ? "#9CA3AF" : "#6B7280"} />
              <circle cx="10" cy="10" r="1.5" fill={isOpen ? "#9CA3AF" : "#6B7280"} />
              <circle cx="16" cy="10" r="1.5" fill={isOpen ? "#9CA3AF" : "#6B7280"} />
            </svg>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="bg-white shadow-lg rounded-lg p-1 w-40 mt-2 z-50 border border-gray-200"
          align="end"
          sideOffset={4}
        >
          <DropdownMenuItem 
            className={INTERACTIVE_STYLES.menuItem}
            onClick={handleManageClick}
          >
            <Menu size={16} className="text-gray-600" />
            <span className="text-gray-700">Manage</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className={INTERACTIVE_STYLES.menuItemDanger}
            onClick={handleRemoveClick}
          >
            <Trash2 size={16} className="text-red-600" />
            <span>Remove</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
