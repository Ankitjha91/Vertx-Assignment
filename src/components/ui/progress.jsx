import * as React from "react";

export const Progress = ({ value, color = "#4F46E5", className = "" }) => {
  return (
    <div className={`relative w-full bg-gray-700 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className="h-full rounded-full transition-all duration-300"
        style={{ width: `${value}%`, backgroundColor: color }}
      />
    </div>
  );
};

