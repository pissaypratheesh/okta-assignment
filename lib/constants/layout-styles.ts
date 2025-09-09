// Layout and positioning CSS class constants

export const LAYOUT_STYLES = {
  // Container styles
  cardContainer: "bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden",
  formSection: "flex flex-col md:flex-row md:items-center p-6 gap-4",
  sectionDivider: "border-t border-gray-200 mx-6",
  
  // Page layout
  mainContainer: "max-w-3xl mx-auto",
  contentWrapper: "px-6 pb-16 pt-12", // Increased top padding for proper spacing
  sectionWrapper: "mb-10",
  sectionHeader: "ml-6",
  
  // Flexbox utilities
  flexColumn: "flex flex-col",
  flexRowResponsive: "flex flex-col md:flex-row md:items-center",
  flexBetween: "flex items-center justify-between",
  flex1: "flex-1",
} as const;
