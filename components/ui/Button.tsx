import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  asChild?: boolean;
}

const variantStyles = {
  primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 border border-transparent',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-secondary/25 border border-transparent',
  outline: 'border-2 border-primary text-primary hover:bg-primary-light/10',
  ghost: 'bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900',
  glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-sm',
  link: 'text-primary underline-offset-4 hover:underline',
};

const sizeStyles = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-14 px-8 text-lg',
  icon: 'h-11 w-11 p-0',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading = false, asChild = false, children, disabled, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 ease-out',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
      'active:scale-95',
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (asChild) {
      return React.cloneElement(children as React.ReactElement, {
        className: cn((children as React.ReactElement).props.className, classes),
        ...props,
        ref,
      });
    }

    return (
      <button
        className={classes}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
