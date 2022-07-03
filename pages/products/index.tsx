import React from 'react'
import Input from '../../components/Input'
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
    <div>
      <div className='w-full flex flex-col py-16 sm:px-52 justify-center items-center'>
        <div className='flex w-full justify-end mb-4'>
          <Input placeholder='Nome' />
        </div>
        <ProductList products={products} />
      </div>
    </div>
  )
}

export default Products