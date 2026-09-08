import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
//Updated on 7th Sep
const intertight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});



export const metadata = {
  title: "Yume Prime - Your Dream, Executed with Prime Precision",
  description: "Institutional-grade execution, razor-thin spreads from 0.0 pips, and deep multi-asset liquidity across global financial markets with Yume Prime.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${intertight.variable} `}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
