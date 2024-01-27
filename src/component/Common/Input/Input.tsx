import React from 'react'
import './styles.scss'
interface Props{
    placeholder?:string
    value:string
    pwd?:boolean
    callbackwP:(value:string)=>void
}
const Input = ({placeholder,value,callbackwP, pwd}:Props) => {
  return (
    <input className='input' type={pwd?'password' : "text"} value={value} placeholder={placeholder} onChange={(e)=>{callbackwP(e.target.value)}}></input>
  )
}

export default Input