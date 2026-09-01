import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus:ring-2 focus:ring-accent-primary/50 disabled:opacity-50 disabled:cursor-not-allowed select-none';
  
  const sizeStyles = {
    sm: 'text-xs px-4 py-2.5 min-h-[44px] rounded-lg gap-2',
    md: 'text-sm sm:text-base px-6 py-3 min-h-[44px] sm:min-h-[48px] rounded-xl gap-2.5',
    lg: 'text-base sm:text-lg px-8 py-3.5 min-h-[48px] sm:min-h-[52px] rounded-xl gap-3 font-bold',
  };

  const variantStyles = {
    primary: 'bg-accent-primary text-white hover:bg-accent-hover shadow-[0_10px_25px_rgba(79,70,229,0.25)] hover:shadow-[0_15px_35px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    secondary: 'bg-white text-text-primary border border-border-medium hover:border-accent-primary hover:bg-bg-surface2 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    outline: 'bg-white text-text-primary border-2 border-border-medium hover:border-accent-primary hover:text-accent-primary hover:bg-accent-glow active:scale-[0.98]',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-surface2 active:scale-[0.98]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
