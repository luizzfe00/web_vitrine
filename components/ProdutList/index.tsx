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
    <div className='h-full py-16 px-8 flex flex-col space-y-8'>
        {products.map((product) => (
            <ProductItem key={product.name} item={product} />
        ))}
    </div>
  )
}

export default ProductList