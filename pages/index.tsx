import React from 'react';
import Head from 'next/head';
import { LandingPage } from '@/components/LandingPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js TailwindCSS Template</title>
        <meta name="description" content="This is going to be a great Next.js project" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="text-[#F2F2F2] min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-950">
        <LandingPage />
      </div>
    </>
  );
}