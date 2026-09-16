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
    default: "Conveyor Finance — On-chain trading infrastructure",
    template: "%s | Conveyor Finance",
  },
  description:
    "Conveyor Finance is a founder-led company building on-chain trading infrastructure. Corporate site: work, careers, and company at conveyor.finance.",
  keywords: [
    "Conveyor",
    "crypto",
    "on-chain trading",
    "careers",
    "conveyor.finance",
  ],
  openGraph: {
    title: "Conveyor Finance — On-chain trading infrastructure",
    description:
      "Corporate website for Conveyor Finance: selected work, organization, and careers.",
    url: "https://conveyor.finance",
    siteName: "Conveyor",
    type: "website",
  },
  icons: {
    icon: "/images/logo/icon.png",
    apple: "/images/logo/icon.png",
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
