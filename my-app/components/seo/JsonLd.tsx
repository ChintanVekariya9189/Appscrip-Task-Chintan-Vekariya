import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface JsonLdProps {
  products: Product[];
}

const JsonLd: React.FC<JsonLdProps> = ({ products }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://mettamuse.com/products/${product.id}`, // Mock URL
      "name": product.title,
      "image": product.image,
      "description": product.description,
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "USD"
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
