'use client'
import React, { FormEvent } from 'react'
import './styles.scss'
import Button from '../Button/Button'
import uploadImg from '@/assets/icons/Upload.svg'
import Image from 'next/image'
interface Props{
    placeholder?:string
    callbackwP:(value:any)=>void
}
const FileInput = ({placeholder,callbackwP}:Props) => {
    function convertBase64(e:any){
        var File = new FileReader()
        File.readAsDataURL(e.target.files[0])
        File.onload = () =>{
           callbackwP(File.result)
        }
    }
  return (
    <div className='fInputMain'>
        <input formNoValidate id='up' className='finput' type='file'  placeholder={placeholder} onChange={(e)=>{convertBase64(e)}}></input>
        <label htmlFor='up'><Image src={uploadImg} alt=''></Image> Upload</label>
    </div>
  )
}

export default FileInput