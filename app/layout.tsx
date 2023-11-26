import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const poppin = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AE Studio | Custom Software Development",
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
