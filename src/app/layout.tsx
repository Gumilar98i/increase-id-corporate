import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Increase.id | Inclusive Creative Social Enterprise',
  description:
    'Menggerakkan ekosistem bisnis dan ekonomi kreatif yang setara, ramah disabilitas, dan berdampak nyata di Indonesia melalui Incubator, Impact Accelerator, serta Business & Inclusion Advisory.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}