import React from 'react';

type ButtonProps = {
  children: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="btn">
      {children}
    </button>
  );
};
