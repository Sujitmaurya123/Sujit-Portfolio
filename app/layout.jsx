import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import FooterSection from "@/components/Footer-section";

const JetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable: "--font-jetbrainsMono", 

});

export const metadata = {
  title: "Sujit Portfolio",
  description: "sujit. portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetbrainsMono.variable}>
       <Header />
       <StairTransition/>
       <PageTransition>{children}</PageTransition>
       <FooterSection/>
        </body>
    </html>
  );
}
