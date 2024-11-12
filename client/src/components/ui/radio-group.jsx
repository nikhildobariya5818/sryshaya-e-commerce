// components/ui/radio-group.js

import React from 'react';

export function RadioGroup({ value, onChange, children }) {
  return (
    <div onChange={onChange} value={value}>
      {children}
    </div>
  );
}

export function RadioGroupItem({ id, value }) {
  return (
    <input type="radio" id={id} name="radiogroup" value={value} />
  );
}
