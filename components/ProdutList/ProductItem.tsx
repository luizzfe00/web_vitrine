import React from 'react'
import { Product } from '.'

type ProductItemProp = {
    item: Product
}

const ProductItem = ({ item }: ProductItemProp) => {
  return (
    <div className='bg-white flex flex-col px-6 py-4 rounded shadow-lg'>
        <div className='h-[300px] w-[260px] bg-grey-600' />
        <span className='text-left'>{item.name}</span>
        <span className='text-left'>{item.value}</span>
    </div>
  )
}

export default ProductItem