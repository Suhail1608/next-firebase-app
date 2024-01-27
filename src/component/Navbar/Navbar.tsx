'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './styles.scss'
import Logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import Button from '../Common/Button/Button'
import { useSession } from 'next-auth/react'
import { Read } from '@/FirebaseCRUD'
interface Data {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    dob: string;
    profile: string;
    country: string;
    gender: string;
    bloodGroup: string;
    email: string;
    phone: string;
    univ: string;
    degree: string;
    role: string;
  }

const Navbar = () => {
    const session = useSession({
        required:true,
        onUnauthenticated() {
            
        },
    })
    const [data, setData] = useState<Data>()
    useEffect(()=>{
        const getData =async ()=>{
            const data = await Read(session.data?.user?.email)
            console.log(data)
            setData(JSON.parse(JSON.stringify(data)))
        }
        getData()
    },[session.data?.user?.email])
  return (
    <div className='header'>
        <nav>
            <span><Link href={"/"}><Image src={Logo} alt='logo'/></Link></span>
            <ul>
                <li>
                    <Link className='link' href='#'>Our Partners</Link>
                </li>
                <li>
                    <Link className='link' href='#'>About Us</Link>
                </li>
                <li>
                    <Link className='link' href='#'>For Organizations</Link>
                </li>
                <li>
                    {session.data?.user?.email && 
                    <span className='profile-button'>
                        <img className='profile-img' src={data?.profile}></img>
                    </span>}
                    {!session.data?.user?.email &&
                    <Button  url='/login' type='type2' label='Login'/>}
                </li>
            </ul>
            
        </nav>
    </div>
  )
}

export default Navbar