import React from 'react'
import { TableBody, TableBodyData, TableHeader } from './Table';

type TableCellProps = {
    header?: boolean;
    item: TableHeader | TableBodyData;
}

const TableCell = ({ header, item }: TableCellProps) => {
  const getClassName = (header: boolean) => {
    if (header) 
      return 'text-md font-semibold'

    return 'text-sm font-normal'
  }

  return (
    <th className={`px-6 py-4 min-w-[10rem] ${getClassName(!!header)}`}>{item.value}</th>
  )
}

export default TableCell