import React from 'react'
import Table, { TableBody, TableHeader } from '../../components/Table/Table'

const headerItems: TableHeader[] = [
  { name: 'document', value: 'CPF/CNPJ' }, 
  { name: 'name', value: 'Nome' },
  { name: 'last-order-date', value: 'Data do Último Pedido' }
]
const dataItems: TableBody[] = [
  {
    row: 'luiz',
    onClick: () => console.log('opa'),
    data: [
      {
        value: '000.000.000-00'
      },
      {
        value: 'Luiz Felipe'
      },
      {
        value: new Date().toLocaleDateString()
      }
    ]
  }
]

const Clients = () => {
  return (
    <div className='w-full flex flex-col py-16 sm:px-52 justify-center items-center'>
        <Table header={headerItems} data={dataItems}  />
    </div>
  )
}

export default Clients