import type { Metadata } from 'next';
import { Bebas_Neue } from 'next/font/google';

import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Wise Clothes',
  description: 'The Future of Fashion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={bebasNeue.className}>{children}</body>
    </html>
  );
}
