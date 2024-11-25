import { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "@/components/interface/Footer";
import Header from "@/components/interface/Header";
import { useCookies } from 'react-cookie';

interface MainLayoutProps {
  children: React.ReactNode;
  useHead?: boolean;
}

function MainLayout({ children, useHead = true }: MainLayoutProps) {
  const [cookies, setCookie] = useCookies(['theme']);
  const [theme, setTheme] = useState(cookies.theme || 'dark');

  useEffect(() => {
    setCookie('theme', theme, { sameSite: 'lax' });
  }, [theme]);

  return (
    <div className={`dark transition-colors duration-200 bg-[#0D0A12] bg-fixed`}>
      {useHead && (
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
        </Head>
      )}

      <div
        className="p-2 absolute inset-0 bg-gradient-to-b from-[#1a1240] to-[#1e1e42]"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #1e1e42 0%, transparent 50%)'
        }}
      />
      <Header />
      <div className="flex">
        <div className="z-10 w-full px-5 min-h-[90vh]">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;