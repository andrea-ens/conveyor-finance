import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import { Toaster } from "react-hot-toast";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://conveyor.finance"),
  title: {
    default: "Conveyor — Institutional crypto infrastructure",
    template: "%s | Conveyor",
  },
  description:
    "Conveyor is the operating system for digital-asset desks: DeFi portfolio intelligence, live trading, and risk controls — built for conveyor.finance.",
  keywords: [
    "Conveyor",
    "crypto",
    "DeFi",
    "trading",
    "portfolio dashboard",
    "conveyor.finance",
  ],
  openGraph: {
    title: "Conveyor — Institutional crypto infrastructure",
    description:
      "Portfolio, liquidity, and execution in one professional stack.",
    url: "https://conveyor.finance",
    siteName: "Conveyor",
    type: "website",
  },
  alternates: {
    canonical: "https://conveyor.finance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="dark"
        >
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
