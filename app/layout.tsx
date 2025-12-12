import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Phuong To - DevOps Software Engineer',
  description:
    'DevOps Software Engineer specializing in CI/CD pipelines, Docker, Kubernetes, and Full-Stack Development. Based in Seattle, WA.',
  keywords: [
    'DevOps',
    'Software Engineer',
    'Full-Stack Developer',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'React',
    'Next.js',
    'TypeScript',
    'Seattle',
  ],
  authors: [{ name: 'Phuong To' }],
  openGraph: {
    title: 'Phuong To - DevOps Software Engineer',
    description:
      'DevOps Software Engineer specializing in CI/CD pipelines, Docker, Kubernetes, and Full-Stack Development.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
