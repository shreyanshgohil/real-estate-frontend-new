import "@/styles/sass/vendor/fontawesome.min.css";
import "@/styles/sass/vendor/bootstrap.min.css";
import "@/styles/sass/vendor/select2.min.css";
import "@/styles/globals.scss";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { useEffect } from "react";

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const interSans = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function App({ Component, pageProps }) {
 
  return <Component {...pageProps} />;
}
