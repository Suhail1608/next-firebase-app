'use client'

import React, { useContext, useEffect, useState } from 'react'
import './layout.scss'
import Button from '@/component/Common/Button/Button'
import Sidebar from '@/component/Sidebar/Sidebar'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
const DashboardLayout = ({children}:{children:React.ReactNode}) => {
    const menuItem = [
        {
            label:"Dashboard",
            value:"/Dashboard"
        },
        {
            label:"Event Calender",
            value:"/Event-Calender"
        },
        {
            label:"Activities",
            value:"/Activities"
        },
        {
            label:"Settings",
            value:"/Settings"
        },
        {
            label:"Privacy",
            value:"/Privacy"
        }
    ]
    const Logout = () =>{
        signOut()
    }
    const router = useRouter()
    return (
        
        <>
            <div className='dashboard'>
                <Sidebar menuItem={menuItem} callback={Logout}/>
                <div className='dashboard-content'>
                    {children}
                </div>
            </div>
            
        </>
      )
}

export default DashboardLayout