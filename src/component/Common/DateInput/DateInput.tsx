import React from 'react'
import './styles.scss'
interface Props{
    placeholder?:string
    value:string
    callbackwP:(value:string)=>void
}
const DateInput = ({placeholder, value, callbackwP}:Props) => {
  return (
    <input className='input' type='date' value={value} placeholder={placeholder} onChange={(e)=>{callbackwP(e.target.value)}}></input>
  )
}

export default DateInput