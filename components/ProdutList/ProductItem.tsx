import React from 'react'
import { Product } from './index'
import Image from 'next/image';

type ProductItemProp = {
    item: Product
}

const ProductItem = ({ item }: ProductItemProp) => {
  return (
    <div className='bg-white h-80 flex flex-col rounded shadow-lg'>
        <div className='h-full w-full bg-grey-600 relative'>
          <Image src='/nike.jpg' layout='fill' alt='product.png' objectFit='cover' />
        </div>
        <div className='flex flex-col px-6 py-4'>
          <span className='text-left font-semibold'>{item.name}</span>
          <span className='text-left text-sm'>R$ {item.value}</span>
        </div>
    </div>
  )
}

export default ProductItem