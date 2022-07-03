import React from 'react'

const Clients = () => {
  return (
    <div className='w-full flex flex-col py-16 sm:px-52 justify-center items-center'>
        <div className='bg-white p-1 rounded shadow-lg'>
            <table className='table-auto border-collapse border border-slate-400 text-left'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 px-6 py-4'>Documento</th>
                        <th className='border border-slate-300 px-6 py-4'>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-300 px-6 py-4'>000.000.000-00</td>
                        <td className='border border-slate-300 px-6 py-4'>$100</td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 px-6 py-4'>February</td>
                        <td className='border border-slate-300 px-6 py-4'>$80</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className='border border-slate-300 px-6 py-4'>Sum</td>
                        <td className='border border-slate-300 px-6 py-4'>$180</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  )
}

export default Clients