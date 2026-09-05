import type { Metadata } from 'next';
import './globals.css';
import PwaRegister from './pwa-register';

export const metadata: Metadata = {
  title: 'Mayur Kamble | HIL & Test Automation Engineer',
  description: 'Automotive HIL, Python and test automation portfolio of Mayur Kamble.',
  manifest: '/manifest.webmanifest',
  appleWebApp: { capable: true, title: 'Mayur Kamble', statusBarStyle: 'black-translucent' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><PwaRegister />{children}</body></html>;
}
