'use client'
import React from 'react'
import './styles.scss'

interface Obj{
    label:string,
    value:string
}
interface Props{
    options:Obj[]
    callbackwP:(value:string)=>void
    value:string
 
}
const MultiSelect = ({options,callbackwP, value}:Props) => {
  return (
    <div className='Select' >
        <select name='country' id='country' value={value} onChange={(e)=>callbackwP(e.target.value)}>
        {options.map((opt)=>{
            return <option key={opt.label} value={opt.value}>{opt.label}</option>
        })}
        </select>
       
    </div>
  )
}

export default MultiSelect