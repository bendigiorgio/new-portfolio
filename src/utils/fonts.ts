import { Inter, Josefin_Sans, Roboto } from "next/font/google";
import localFont from "next/font/local";
export const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--josefin-font",
});
export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--roboto-font",
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const krylon = localFont({
  src: "../../public/fonts/Krylon-Regular.woff2",
  variable: "--krylon-font",
});
export const kenjoI = localFont({
  src: "../../public/fonts/KenjoI.woff",
  variable: "--kenjoI-font",
});
export const kenjoII = localFont({
  src: "../../public/fonts/KenjoII.woff2",
  variable: "--kenjoII-font",
});
export const hiraganoMincho = localFont({
  src: [
    {
      path: "../../public/fonts/hiraganoMincho/HiraMinProN-W3.otf",
      weight: "300",
    },
  ],
  variable: "--hiraganoMincho-font",
});
export const omegaSans = localFont({
  src: [
    {
      path: "../../public/fonts/omegaSans/omega_sans_light-webfont.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/omegaSans/omega_sans_regular-webfont.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/omegaSans/omega_sans_medium-webfont.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/omegaSans/omega_sans_bold-webfont.woff2",
      weight: "700",
    },
  ],
  variable: "--omegaSans-font",
});
