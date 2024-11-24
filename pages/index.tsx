import Head from "next/head";

import LandingPage from "@/components/LandingPage";
import MainLayout from "@/components/interface/MainLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Munchyroll</title>
        <meta name="title" content="Munchyroll" />
        <meta
          name="description"
          content="An ad-free anime streaming website aimed at minimality and responsive design. Share this with friends!"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Munchyroll"
        />
        <meta
          property="og:description"
          content="An ad-free anime streaming website aimed at minimality and responsive design. Share this with friends!"
        />


        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Munchyroll"
        />
        <meta
          property="twitter:description"
          content="An ad-free anime streaming website aimed at minimality and responsive design. Share this with friends!"
        />
        <meta name="theme-color" content="#C4AD8A" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <MainLayout>
        <LandingPage />
      </MainLayout>
    </>
  );
}