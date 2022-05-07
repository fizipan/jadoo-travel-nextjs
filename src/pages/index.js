import Head from 'next/head';

import Header from 'components/organisms/Header';
import Hero from 'components/organisms/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jadoo</title>
        <meta
          name="description"
          content="travel app, life app, aplikasi jalan-jalan, pesan guide, dan sebagainya"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:url"
          content="https://recording-goatube-project1-jadoo.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jadoo" />
        <meta
          property="og:description"
          content="travel app, life app, aplikasi jalan-jalan, pesan guide, dan sebagainya"
        />
        <meta
          property="og:image"
          content="https://recording-goatube-project1-jadoo.vercel.app/aplikasi-travel-online.jpg"
        />
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* Hero */}
        <Hero />
      </main>
    </div>
  );
}
