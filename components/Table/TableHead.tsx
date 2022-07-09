import React from 'react'
import { TableHeader } from './Table'
import TableCell from './TableCell';

type TableHeadProps = {
    items: TableHeader[];
}

const TableHead = ({ items }: TableHeadProps) => {
  return (
    <thead>
        <tr className='bg-gray-300 shadow-inline-bottom-thead'>
            {items.map((item) => (
                <TableCell key={item.name} item={item} />
            ))}
        </tr>
    </thead>
  )
}

export default TableHead