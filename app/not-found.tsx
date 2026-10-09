import React from 'react';
import { ArrowLeft, Home, FileQuestion } from 'lucide-react';
import ButtonLink from '@/components/ui/ButtonLink';

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        paddingTop: '6rem',
        paddingBottom: '8rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--surface-higher)',
          border: '1px solid var(--border-quiet)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent-warm)',
          marginBottom: '1.5rem',
        }}
      >
        <FileQuestion size={28} />
      </div>

      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8125rem',
          color: 'var(--accent-primary)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}
      >
        404 — PAGE NOT FOUND
      </span>

      <h1
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 700,
          color: 'var(--text-main)',
          marginBottom: '1rem',
          letterSpacing: '-0.025em',
        }}
      >
        No verified route at this address
      </h1>

      <p
        style={{
          fontSize: '1.0625rem',
          color: 'var(--text-secondary)',
          maxWidth: '52ch',
          lineHeight: 1.65,
          marginBottom: '2.5rem',
        }}
      >
        The page or project case study you requested could not be located in this portfolio.
        Please return to the homepage or explore selected projects.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <ButtonLink href="/" variant="primary" icon={<Home size={16} />}>
          Return to homepage
        </ButtonLink>
        <ButtonLink href="/#work" variant="secondary" icon={<ArrowLeft size={16} />}>
          Explore selected work
        </ButtonLink>
      </div>
    </div>
  );
}
