import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PreferencesProvider } from "@/context/PreferencesContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Increase.id — Inclusive Creative Social Enterprise",
  description:
    "Membangun ekosistem kerja dan ekonomi kreatif yang inklusif serta aksesibel bagi talenta disabilitas di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <body className="font-sans antialiased">
        <PreferencesProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </PreferencesProvider>
      </body>
    </html>
  );
}