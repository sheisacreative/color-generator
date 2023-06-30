import { Inter, Playfair_Display } from "next/font/google";

export const playfair = Playfair_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
