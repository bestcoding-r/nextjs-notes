'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface StockData {
  status: string;
  count: number;
}

async function fetchStock(productId: string): Promise<StockData> {
  // Mock API call - replace with actual API
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await res.json();
  // Simulate stock based on product id
  return {
    status: 'available',
    count: Math.floor(Math.random() * 10) + 1
  };
}

function LiveStock({ productId }: { productId: string }) {
  // useQuery hook ka istemal
  const { data: stock, isLoading, isError } = useQuery<StockData>({
    queryKey: ['stock', productId], // Unique key for caching
    queryFn: () => fetchStock(productId),
    refetchInterval: 5000, // Optional: Har 5 sec baad auto-refresh (Live feel)
  });

  if (isLoading) {
    return <div className="animate-pulse text-gray-400">Checking stock...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Error fetching stock</div>;
  }

  const isInStock = stock && stock.count > 0;

  return (
    <div className={`mt-4 p-2 rounded-lg inline-block font-medium ${
      isInStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    }`}>
      {isInStock ? `In Stock: ${stock.count}` : 'Out of Stock'}
    </div>
  );
}

export default function Page() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">Product Stock</h1>
      <LiveStock productId="1" />
    </main>
  );
}