import React from 'react'
import ProductItem from './ProductItem'

export type Product = {
    name: string,
    value: string,
}

type ProductListProp = {
    products: Product[]
}

const ProductList = ({ products }: ProductListProp) => {
  return (
    <div className='w-full h-full flex flex-col space-y-8 sm:grid sm:grid-cols-4 sm:gap-8 sm:space-y-0'>
        {products.map((product) => (
            <ProductItem key={product.name} item={product} />
        ))}
    </div>
  )
}

export default ProductList