import React from 'react'
import { TableBody, TableHeader } from './Table';

type TableCellProps = {
    header?: boolean;
    item: TableHeader | TableBody;
}

const TableCell = ({ header, item }: TableCellProps) => {
  return (
    <th className='px-6 py-4'>{item.value}</th>
  )
}

export default TableCell