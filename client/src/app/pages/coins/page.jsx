import React from 'react';
import CryptoList from './CryptoList';
import Footer from '@/components/footer/footer';

function Coins() {
  return (
    <>
      <section className="h-full m-auto max-w-[94%] w-[1200px]">
    

        <CryptoList />

        <Footer />
      </section>
    </>
  );
}

export default Coins;
