import React from 'react'
import TableBody from './TableBody';
import TableHead from './TableHead';

type CellAlignment = 'left' | 'center' | 'right';

export type TableHeader = { name: string, value: string, alignment?: CellAlignment };

export type TableBodyData = {
  value: (JSX.Element | string), 
  alignment?: CellAlignment, 
  iconField?: boolean, 
  inline?: boolean, 
  secondaryValue?: string 
}

export type TableBody = { 
  row: string,
  onClick?: () => void, 
  data: TableBodyData[]
}

type TableProps = {
  header: TableHeader[];
  data: TableBody[];
}

const Table = ({ header, data }: TableProps) => {
  return (
    <table className='table-auto border-collapse text-left shadow-lg w-full'>
      <TableHead items={header} />
      <TableBody items={data} />
    </table>
  )
}

export default Table