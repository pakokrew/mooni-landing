import React from 'react';
import Head from 'next/head'

export default () => (
  <>

    <Head>

      <meta charSet="utf-8"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

      <link href="favicon.ico" rel="icon"/>
      <link href="img/logo512.png" rel="apple-touch-icon"/>

      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,600,700,700i|Montserrat:300,400,500,600,700"
        rel="stylesheet"/>

      <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>

      <link href="lib/font-awesome/css/all.min.css" rel="stylesheet"/>
      <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet"/>

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-68373171-8"/>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'UA-68373171-8');
            gtag('event', 'landing');
          `,
        }}
      />
      <script async defer data-domain="mooni.tech" src="https://plausible.opac.me/js/plausible.js"/>
    </Head>

    <script src="lib/jquery/jquery.min.js"></script>
    <script src="lib/jquery/jquery-migrate.min.js"></script>
    <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/mobile-nav/mobile-nav.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>

    <script src="js/main.js"></script>

  </>
)