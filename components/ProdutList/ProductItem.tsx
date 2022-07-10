import React from 'react'
import { Product } from './index'
import Image from 'next/image';

type ProductItemProp = {
    item: Product
}

const ProductItem = ({ item }: ProductItemProp) => {
  return (
    <div className='bg-white h-80 flex flex-col px-6 py-4 rounded shadow-lg'>
        <div className='h-full w-full bg-grey-600 relative mb-4'>
          <Image src='/nike.jpg' layout='fill' alt='product.png' objectFit='contain' />
          </div>
        <span className='text-left font-semibold'>{item.name}</span>
        <span className='text-left text-sm'>R$ {item.value}</span>
    </div>
  )
}

export default ProductItem