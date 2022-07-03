import React, { HTMLAttributes } from 'react'

interface CustomInput extends HTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: CustomInput) => {
  return (
    <input {...props} className='bg-grey-200 p-4 rounded' />
  )
}

export default Input