import React from 'react';
import Imports from '../components/Imports';

import '../styles/style.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Imports />
      <Component {...pageProps} />
    </>
  )
}