import React from 'react'
import { TableBody } from './Table'
import TableCell from './TableCell';

type TableBodyProps = {
    data: TableBody[];
}

const TableBody = ({ data }: TableBodyProps) => {
  return (
    <tbody>
        {data.map((row) => (
            <tr key={row.name} className='border-b border-gray-200'>
                {Object.entries(row).map(([key, value]) => (
                    <div key={key}>{key}{value}</div>
                ))}
            </tr>
        ))}
    </tbody>
  )
}

export default TableBody