import React from 'react';
import Head from 'next/head';

export default ({ data }) => (
  <Head>

    <title>{data.title}</title>

    <meta content={data.description} name="description"/>
    <meta content={data.keywords} name="keywords"/>

    <meta name="language" content="EN"/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@moonidapp"/>
    <meta name="twitter:title" content="🌚 Mooni"/>
    <meta name="twitter:description" content="Transfer funds from your crypto wallet to your bank account, without KYC !"/>
    <meta name="twitter:image" content="https://mooni.tech/img/app_thumbnail.jpg"/>
    <meta name="twitter:image:alt" content="Mooni dApp"/>

    <meta property="og:title" content="🌚 Mooni" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://mooni.tech/" />
    <meta property="og:image" content="https://mooni.tech/img/app_thumbnail.jpg" />
    <meta property="og:description" content="Transfer funds from your crypto wallet to your bank account, without KYC !" />
    <meta property="og:site_name" content="Mooni" />
    <meta property="og:video:secure_url" content="https://www.youtube.com/watch?v=99E2U4Qgsrc"/>
    <meta property="og:image:alt" content="Mooni dApp"/>

    <meta name="robots" content="index,follow" />

  </Head>
)