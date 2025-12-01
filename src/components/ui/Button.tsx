import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'outline', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300",
          variant === 'outline' && "border hover:border-signal-yellow",
          className
        )}
        style={{
          borderColor: variant === 'outline' ? 'rgba(242, 242, 242, 0.2)' : 'transparent'
        }}
        {...props}
      >
        <div 
          className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
          style={{
            backgroundColor: variant === 'outline' ? '#D6FF00' : '#F2F2F2'
          }}
        />
        <span 
          className={cn(
            "relative z-10 font-medium transition-colors duration-300",
            variant === 'outline' ? "text-[#F2F2F2] group-hover:text-[#050505]" : "text-[#050505] group-hover:text-[#F2F2F2]"
          )}
        >
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
