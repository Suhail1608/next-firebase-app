'use client'
import React, { FormEvent } from 'react'
import './styles.scss'
import { useRouter } from 'next/navigation'
interface Props{
label:string,
url?:string,
leftIcon?:React.ReactNode,
rightIcon?:HTMLImageElement,
secondary?:boolean
type?:string
callback?:(x:FormEvent)=>void
}
const Button = ({label,url,leftIcon,rightIcon,secondary,type, callback=(e)=>{e.preventDefault()}}:Props) => {
  const router = useRouter()
  const handleLink = (url:string) =>{
    router.push(url)
  }
  if(url){
    return (
      <button className={secondary ? "secondary" : ""} id={`${type==="type2" || !url?'type2':""}`} onClick={()=>{handleLink(url)}}>{label} </button>
    )
  }else{
     return  <button className={secondary ? "secondary" : ""}  onClick={callback} id={`${type==="type2" || !url ?'type2':""}`}><>{leftIcon}</>{label}</button>
  }
 
}

export default Button