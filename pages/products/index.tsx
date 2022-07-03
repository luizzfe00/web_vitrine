import React from 'react'
import ProductList from '../../components/ProdutList'

const products = [
  { name: 'Livro', value: '42' },
  { name: 'Camisa', value: '120' },
  { name: 'Camisa', value: '120' },
  { name: 'Camisa', value: '120' },
  { name: 'Camisa', value: '120' },
]

const Products = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <ProductList products={products} />
    </div>
  )
}

export default Products