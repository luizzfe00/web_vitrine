import React from 'react'
import { TableBody } from './Table'
import TableCell from './TableCell';

type TableBodyProps = {
    items: TableBody[];
}

const TableBody = ({ items }: TableBodyProps) => {
  return (
    <tbody>
        {items.map((row) => (
            <tr key={row.row} onClick={row.onClick} className='border-b border-gray-200 hover:bg-blue-200 hover:cursor-pointer'>
                {row.data.map((item) => (
                    <TableCell key={item.value.toString()} item={item} />
                ))}
            </tr>
        ))}
    </tbody>
  )
}

export default TableBody