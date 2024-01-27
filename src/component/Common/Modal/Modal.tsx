'use client'
import React, { useState } from 'react'
import './Modal.scss'

interface Prop{
  children:React.ReactNode
  show:boolean
  callback:()=>void
}
const Modal = ({children, show=false, callback}:Prop) => {

  const handleModalShow = ()=>{
    callback()
  }
  return (
    <div className='modal' style={{display:`${show ? 'flex' : 'none'}`}}>
      <div className='modal-content'>
        <div className='modal-button'>
          <button className='modal-close' onClick={handleModalShow}>X</button>
        </div>
      {children}
      </div>
    </div>
  )
}

export default Modal