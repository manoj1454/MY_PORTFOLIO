import React from 'react';
import Link from 'next/link';
import styles from './ButtonLink.module.css';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'subtle';
  isExternal?: boolean;
  className?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
}

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  isExternal = false,
  className = '',
  icon,
  ariaLabel,
}: ButtonLinkProps) {
  const combinedClass = `${styles.btn} ${styles[variant]} ${className}`.trim();

  if (isExternal) {
    return (
      <a
        href={href}
        className={combinedClass}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        <span>{children}</span>
        {icon && <span className={styles.iconWrapper}>{icon}</span>}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClass} aria-label={ariaLabel}>
      <span>{children}</span>
      {icon && <span className={styles.iconWrapper}>{icon}</span>}
    </Link>
  );
}
