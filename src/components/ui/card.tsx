import React from "react";
export default function Card({ children, ...props }) {
  return (
    <div className="bg-white rounded-lg shadow p-4" {...props}>
      {children}
    </div>
  );
}
export function CardContent({ children, ...props }) {
  return (
    <div className="mt-2" {...props}>
      {children}
    </div>
  );
}