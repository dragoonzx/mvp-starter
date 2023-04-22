import React from 'react';
import { settings } from '../../settings';

const HeadMeta = () => {
  return (
    <>
      <meta name="application-name" content={settings.title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={settings.title} />
      <meta name="description" content="Best PWA App in the world" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      {/* favicons */}
      {/** 32×32 */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/assets/noggles.svg" type="image/svg+xml" />

      {/** 180×180 */}
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      <link rel="manifest" href="/manifest.json" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://yourdomain.com" />
      <meta name="twitter:title" content={settings.title} />
      <meta name="twitter:description" content="Best PWA App in the world" />
      <meta
        name="twitter:image"
        content="https://yourdomain.com/icons/android-chrome-192x192.png"
      />
      <meta name="twitter:creator" content="@DavidWShadow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={settings.title} />
      <meta property="og:description" content="Best PWA App in the world" />
      <meta property="og:site_name" content={settings.title} />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta
        property="og:image"
        content="https://yourdomain.com/icons/apple-touch-icon.png"
      />
    </>
  );
};

export default HeadMeta;
