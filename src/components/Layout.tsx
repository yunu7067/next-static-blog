import {BlogConfigType} from '@types';
import Head from 'next/head';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  config: BlogConfigType;
}

function Layout({children, config}: LayoutProps) {
  // console.debug(config);
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name='description' content='Generated by create next app' />
        {config.subtitle && <meta name='description' content={config.subtitle} />}

        {/* Open Graph Metatag */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={config.baseurl} />
        <meta property='og:title' content={config.title} />
        {config.avatar.enabled && <meta property='og:image' content={config.avatar.src} />}
        {config.subtitle && <meta property='og:description' content={config.subtitle} />}
        <meta property='og:site_name' content={config.title} />
        <meta property='og:locale' content={config.locale.languageCode} />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <aside>{config.avatar?.enabled && <img src={`/${config.avatar.src}`} alt='avatar' width='64' />}</aside>
      <main>{children}</main>
    </>
  );
}

export default Layout;
