import React from 'react'
import ProductDev from '@/components/product-dev'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Software development',
};

const Software = () => {
  return (
    <ProductDev/>
  )
}

export default Software