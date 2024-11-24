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
    <div className={`transition-colors duration-200 ${theme === 'dark' ? 'dark' : ''} dark:bg-[#121212] bg-fixed bg-red-500 bg-[radial-gradient(#ffffff90_1px,#f2f2f2_1px)] bg-[size:20px_20px] dark:bg-[radial-gradient(#ffffff15_1px,#121212_1px)]`}>
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