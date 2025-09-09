// Interactive element CSS class constants (buttons, dropdowns, switches, etc.)

export const INTERACTIVE_STYLES = {
  // Button styles
  button: "cursor-pointer",
  iconButton: "p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer",
  backButton: "p-1 -ml-1 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer",
  
  // Menu item styles
  menuItem: "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm",
  menuItemDanger: "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-red-50 text-red-600 cursor-pointer text-sm",
  
  // Dropdown styles
  dropdownButton: "w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between cursor-pointer",
  dropdownContainer: "absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1",
  dropdownOption: "w-full px-4 py-2 text-sm text-left hover:bg-gray-50 flex items-center justify-between cursor-pointer text-gray-900",
  
  // Switch styles
  switch: "w-11 h-6 bg-gray-200 rounded-full relative data-[state=checked]:bg-gray-900 outline-none cursor-pointer transition-colors",
  switchThumb: "block w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-[22px]",
} as const;
