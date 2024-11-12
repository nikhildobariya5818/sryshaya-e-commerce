import React from 'react';

function Badge({ children, variant }) {
  // Define badge classes based on the variant
  let badgeClasses = "px-2 py-1 rounded-full text-sm font-semibold";
  if (variant === "secondary") {
    badgeClasses += " bg-gray-300 text-gray-800";
  } else {
    badgeClasses += " bg-blue-500 text-white";
  }

  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
}

export { Badge };
