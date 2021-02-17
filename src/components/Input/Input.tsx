import React, { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent) => void;
}

export const Input: React.FC<InputProps> = ({ label, value, name, onChange }: InputProps) => {
  return (
    <label className="input-group">
      <input name={name} value={value} onChange={onChange} className="input-group__input"/>
      <span className={`input-group__label ${value.length ? 'active' : ''}`}>{label}</span>
    </label>
  );
}
;
