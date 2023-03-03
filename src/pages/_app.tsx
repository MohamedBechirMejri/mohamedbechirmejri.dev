import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { Nunito } from "next/font/google";

import "../styles/globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={`${nunito.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </SessionProvider>
  );
};

export default MyApp;
