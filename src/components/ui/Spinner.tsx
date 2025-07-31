interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'orange' | 'gray' | 'white';
}

export default function Spinner({ size = 'md', color = 'orange' }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  
  const colorClasses = {
    orange: 'text-orange-600',
    gray: 'text-gray-600',
    white: 'text-white'
  };
  
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}>
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      <h2 className="mt-4 text-lg font-semibold text-gray-700">Loading...</h2>
    </div>
  );
}
