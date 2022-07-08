import React from 'react'

const Clients = () => {
  return (
    <div className='w-full flex flex-col py-16 sm:px-52 justify-center items-center'>
        <div className='bg-white rounded shadow-lg'>
            <table className='table-auto text-left'>
                <thead>
                    <tr className='bg-gray-300 shadow-bottom-inset'>
                        <th className=' px-6 py-4'>Documento</th>
                        <th className=' px-6 py-4'>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className=' px-6 py-4'>000.000.000-00</td>
                        <td className=' px-6 py-4'>$100</td>
                    </tr>
                    <tr>
                        <td className=' px-6 py-4'>February</td>
                        <td className=' px-6 py-4'>$80</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className=' px-6 py-4'>Sum</td>
                        <td className=' px-6 py-4'>$180</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  )
}

export default Clients