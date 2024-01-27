'use client'
import React, {useRef} from 'react'
import {useReactToPrint} from 'react-to-print'
import Button from '../Button/Button'
import './styles.scss'
import UserIdCard from '../UserIdCard/UserIdCard'
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

const UserIdCardComp = ({data}:{data:Data| undefined} ) => {
  const IDcard = useRef(null)
  const style:any = {display:"flex",flexDirection:"column", margin:"20px", alignItems:"center"}
  const handlePrint = useReactToPrint({
    content:()=>IDcard.current,
    documentTitle:"ID-card",
  })
  return (
    <div className='user-id-container'>
        <div className='user-id-doc' ref={IDcard} style={style}><UserIdCard data={data}/></div>
        <div className='user-id-button'><Button label='Download Card' callback={handlePrint}/></div>
      </div>
  )
}

export default UserIdCardComp