'use client'
import React from 'react'
import './styles.scss'
interface MenuItems{
    label:string
    value:string
}
interface Props{
    menuItem:MenuItems[]
    callback?:()=>void
}
const Sidebar = ({menuItem, callback}:Props) => {
  return (
            <div className='sidebar'>
                <div className='sidebar-menu'>
                    {menuItem.map((item)=>{
                        return(
                            <div key={item.value} className='sidebar-item'>
                               {item.label}
                            </div>
                        )
                    })
                    }
                </div>
                <button className='logout' onClick={callback}>Logout</button>
            </div>
  )
}

export default Sidebar