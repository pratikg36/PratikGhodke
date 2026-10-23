import React from 'react';

export const ShinyText = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${
        disabled
          ? 'text-white'
          : 'bg-gradient-to-r from-slate-200 via-sky-300 to-slate-200 bg-[length:200%_auto] animate-shimmer'
      } ${className}`}
      style={{
        animationDuration: disabled ? undefined : animationDuration,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
