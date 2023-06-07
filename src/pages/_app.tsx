import { type AppType } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Nunito } from "next/font/google";

import "../styles/globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <main className={`${nunito.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
      <Analytics />{" "}
    </>
  );
};

export default MyApp;
