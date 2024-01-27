'use client'
import { Read } from '@/FirebaseCRUD'
import Button from '@/component/Common/Button/Button'
import './styles.scss'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import userIcon from '@/assets/images/User.png'
import Modal from '@/component/Common/Modal/Modal'
import UserIdCardComp from '@/component/Common/UserIdCardComp/UserIdCardComp'
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
const Dashboard =  () => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState<Data>()
    const tableData = [
        {
            label:"Email",
            value:data?.email
        },
        {
            label:"Phone",
            value:data?.phone
        },
        {
            label:"Country",
            value:data?.country
        },
        {
            label:"Date of birth",
            value:data?.dob
        },
        {
            label:"Gender",
            value:data?.gender
        },
        {
            label:"Blood Group",
            value:data?.bloodGroup
        },
        {
            label:"University",
            value:data?.univ
        },
        {
            label:"Degree",
            value:data?.degree
        },
    ]
    const session = useSession({
        required:true,
        onUnauthenticated() {
            redirect('/login')
        },
    })
    const email = session?.data?.user?.email
   
    useEffect(()=>{
        const getData =async ()=>{
            const data = await Read(email)
            console.log(data)
            setData(JSON.parse(JSON.stringify(data)))
        }
        getData()
    },[session.data?.user?.email])
    
    return (
        <>
            <div className='title'>Dashboard</div>
            <div className='profile-card'>
                <div className='profile-pic'>
                    {data?.profile === "" &&
                    <Image width={120} src={userIcon} alt=''></Image>}
                    {data?.profile!=="" &&
                    <img width={150}  src={data?.profile}></img>}
                </div>
                <div className='profile-info'>
                    <h2 className='profile-name'>{(data?.firstName === undefined ? "" : data.firstName) +" "+ (data?.lastName=== undefined ? "" :data.lastName) } </h2>
                    <span className='profile-role'>{data?.role}</span>
                </div>
            </div>
            <div className='member-details'>
                <div className='table'>
                    <div className='tr'>
                        {
                            tableData.map((item)=>{
                                return(
                                        <div className='td' key={item.label} >{item.label}</div>
                                )
                            })
                        }      
                    </div>
                    <div className='tr'>
                        {
                            tableData.map((item)=>{
                                return(
                                        <div className='td' key={item.label} >{item.value}</div>
                                )
                            })
                        }      
                    </div>
                   
                </div>
                
            </div>
            <Modal  show={show} callback={()=>{setShow(!show)}}><UserIdCardComp data={data}/></Modal>
            <div className='dash-buttondiv'>
                <Button label='Generate your card' callback={()=>{setShow(!show)}}></Button>
            </div>
        </>
      )
}

export default Dashboard
Dashboard.requireAuth = true
