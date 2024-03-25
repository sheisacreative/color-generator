import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import styles from "./layout.module.css";
import { AppProvider } from "./context";
import "react-toastify/dist/ReactToastify.css";

export const playfair = Playfair_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Color Generator",
  description: "A super sinple color generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${styles.appContainer}`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
