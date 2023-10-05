import { ClientThemeProvider } from "@/components/Providers";
import {
  josefinSans,
  krylon,
  kenjoI,
  kenjoII,
  hiraganoMincho,
  omegaSans,
  roboto,
  inter,
} from "../utils/fonts";
import "./globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Spinner from "@/components/Spinner";

export const metadata: Metadata = {
  title: "Ben Di Giorgio",
  description: "Portfolio of Ben Di Giorgio",
};
const DynamicMouse = dynamic(() => import("@/components/Mouse"), {
  ssr: false,
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${krylon.variable} ${kenjoI.variable} ${kenjoII.variable} ${hiraganoMincho.variable} ${omegaSans.variable} ${roboto.variable} scroll-smooth`}
    >
      <body className={inter.className}>
        <ClientThemeProvider>
          <DynamicMouse />
          <Nav className="fixed right-24 top-6" />
          <div className="w-full h-full overflow-hidden">{children}</div>

          <div className="fixed right-12 bottom-12">
            <Spinner />
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
