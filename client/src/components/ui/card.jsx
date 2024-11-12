import React from 'react';

export function Card({ children, className }) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="p-4">{children}</div>;
}


export function CardFooter({ children }) {
  return <div className="p-4">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-lg font-semibold text-gray-900 mb-2">{children}</h3>;
}

export function CardContent  ({ children })  {
  return (
    <div className="card-content">
      {children}
    </div>
  );
};