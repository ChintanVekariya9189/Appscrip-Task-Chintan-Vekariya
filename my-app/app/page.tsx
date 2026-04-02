import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ProductFeed from '@/components/home/ProductFeed';
import JsonLd from '@/components/seo/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discover Our Products | Appscrip Task',
  description:
    'Browse our exclusive collection of products. High-quality items curated for you.',
  keywords: 'products, shopping, Appscrip, fake store, ecommerce',
  openGraph: {
    title: 'Discover Our Products | Appscrip Task',
    description: 'Browse our exclusive collection of products.',
    type: 'website',
  },
};

import { products as dummyProducts } from '@/data/products';

async function getProducts() {
  // Simulating a fast server-side "fetch" from local data
  return dummyProducts;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <JsonLd products={products} />
      <Header />
      <main>
        <Hero />
        <ProductFeed initialProducts={products} />
      </main>
      <Footer />
    </>
  );
}
