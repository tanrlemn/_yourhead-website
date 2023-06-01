import "./globals.css";
import { BsArrowRight } from "react-icons/bs";
import navStyles from "./nav.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YOURHEAD",
  description: "Unique portrait paintings by artist, YOURHEAD.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={navStyles.navWrapper}>
          <div className={navStyles.innerNav}>
            <a href="/" className={navStyles.brandBlock}>
              <div className={navStyles.brandTitle}>YOURHEAD</div>
            </a>
            <div className={navStyles.navMenu}>
              <div className={navStyles.navLinkWrap}>
                <a href="/" className={navStyles.navLink}>
                  Home
                </a>
                <a href="/commissions" className={navStyles.navLink}>
                  Commissions
                </a>
                <a href="/about" className={navStyles.navLink}>
                  About
                </a>
                <a href="/recents" className={navStyles.navLink}>
                  Recents
                </a>
                <a href="/contact" className={navStyles.navLink}>
                  Contact
                </a>
              </div>
              <div className={navStyles.navButton}>
                <a href="/" className={navStyles.navLinkBlock}>
                  <div className={navStyles.buttonLabel}>
                    Request a painting
                  </div>
                  <BsArrowRight />
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
