import type { Metadata, Viewport } from 'next';
import './globals.css';
import SkipLink from '@/components/layout/SkipLink';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: '%s · Manoj',
  },
  description: siteConfig.subheadline,
  keywords: [
    'Manoj',
    'Software Engineer',
    'Applied Machine Learning',
    'Computer Science',
    'PyTorch',
    'Next.js',
    'React',
    'Object Detection',
    'Retrieval-Augmented Generation',
  ],
  authors: [{ name: 'Manoj' }],
  creator: 'Manoj',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: siteConfig.title,
    description: siteConfig.subheadline,
    siteName: 'Manoj Portfolio',
  },
  twitter: {
    card: 'summary',
    title: siteConfig.title,
    description: siteConfig.subheadline,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0B1014' },
    { media: '(prefers-color-scheme: light)', color: '#F6F8FB' },
  ],
};

const themeInitScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme-preference');
      if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="main-content" style={{ flexGrow: 1 }}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
