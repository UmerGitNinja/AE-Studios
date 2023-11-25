import type { Metadata } from "next";
import { Poppins, League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const poppin = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppin.className} `}>
        
        <div
          className="wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}