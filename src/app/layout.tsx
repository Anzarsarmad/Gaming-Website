// app/layout.tsx
import { Lato } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
});

export const metadata = {
  title: 'Board Gaming',
  description: 'Discover the best gaming experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.variable}>
      <body className={lato.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}