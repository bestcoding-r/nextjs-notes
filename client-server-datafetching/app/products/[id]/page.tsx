// app/product/[id]/page.tsx
import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

// Params ko Promise type dena behtar hai
export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  
  // 🔥 CRITICAL FIX: Params ko await karein
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 3600 } 
  });
  
  // Agar API se data na mile toh error handle karein
  if (!res.ok) {
    return <div className="p-10 text-red-500">Product not found!</div>;
  }

  const product: Product = await res.json();

  return (
    <main className="p-8 max-w-4xl mx-auto border m-10 rounded-xl shadow-sm bg-white">
      <h1 className="text-3xl font-bold text-gray-900 italic">
        {product.title}
      </h1>
      
      {/* Aapne yahan bg-red-500 aur text-white rakha hai, check karein agar ye nazar aa raha hai */}
      <p className="mt-4 text-white leading-relaxed bg-red-500 p-4 rounded">
        {product.description}
      </p>
      
      <div className="mt-6 text-2xl font-semibold text-green-600">
        Price: ${product.price}
      </div>
      
      <div className="mt-2 text-sm text-gray-400">
        ID: {product.id} (Fetched from Server)
      </div>
    </main>
  );
}