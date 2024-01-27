import { ImageProps } from 'next/image'
import React from 'react'
import './styles.scss'
interface Props{
    label:string,
    icon?:React.ReactElement
}
const Chip = ({label,icon}:Props) => {
  return (
    <span className='chip'><div className='icon'>{icon}</div>Applying for AIESEC in {label}</span>
  )
}

export default Chip