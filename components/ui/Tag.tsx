import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'accent' | 'secondary' | 'warm';
  className?: string;
}

export default function Tag({ label, variant = 'default', className = '' }: TagProps) {
  let variantClass = 'tag-pill';
  if (variant === 'accent') variantClass = 'tag-pill tag-pill-accent';

  return <span className={`${variantClass} ${className}`.trim()}>{label}</span>;
}
