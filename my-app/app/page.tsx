import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ProductFeed from '@/components/home/ProductFeed';
import JsonLd from '@/components/seo/JsonLd';
import { Metadata } from 'next';
import { products as localProducts } from '@/data/products';

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

async function getProducts() {
  // try {
  //   const res = await fetch(
  //     'https://api.escuelajs.co/api/v1/products?offset=0&limit=21',
  //     {
  //       next: { revalidate: 3600 }, // Cache for 1 hour
  //     },
  //   );

  //   if (!res.ok) throw new Error('Failed to fetch products');

  //   const data = await res.json();

  //   // Map Platzi API to our component schema
  //   return data.map((item: any) => ({
  //     id: item.id,
  //     title: item.title,
  //     price: item.price,
  //     description: item.description,
  //     // Map first image, handling potential string or array
  //     image: Array.isArray(item.images) ? item.images[0] : item.images,
  //     category: item.category?.name || 'Uncategorized',
  //   }));
  // } catch (error) {
  //   console.error('Error fetching products:', error);
  //   return []; // Return empty array on failure
  // }
  return localProducts;
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
