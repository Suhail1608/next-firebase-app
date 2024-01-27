import React from 'react'
import dummyImage from '@/assets/images/User.png'
import logo from '@/assets/images/logo.svg'
import QR from '@/assets/images/QR.png'
import Image from 'next/image'
import './styles.scss'
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
const UserIdCard = ({data}:{data:Data | undefined}) => {
  return (
    <>
    <div className='user-id-front'>
          <div className='user-image-content'>
            <img className='user-profile' src={data?.profile} alt=''></img>
            <div className='logo'> <Image src={logo} alt=''></Image></div>
           
          </div>
          <div className='user-id-info'>
            <ul>
              <li><label>Name:</label><div className='val'>{data?.firstName+" "+data?.lastName}</div></li>
              <li><label>Role:</label><div className='val'>{data?.role}</div></li>
              <li><label>Email:</label><div className='val'>{data?.email}</div></li>
              <li><label>Phone:</label><div className='val'>{data?.phone}</div></li>
             
            </ul>
          </div>
        </div>
        <div className='user-id-back'>
          <div className='user-id-info'>
            <ul>
              <li><label>Country:</label><div className='val'>{data?.country}</div></li>
              <li><label>Gender:</label><div className='val'>{data?.gender}</div></li>
              <li><label>Blood Group:</label><div className='val'>{data?.bloodGroup}</div></li>
              <li><label>University:</label><div className='val'>{data?.univ}</div></li>
              <li><label>Degree:</label><div className='val'>{data?.degree}</div></li>
             
            </ul>
          </div>
          <div className='user-image-content'>
            
            <div className='logo'> <Image className='qr' src={QR} alt=''></Image></div>
           
          </div>
          
        </div>
    </>
  )
}

export default UserIdCard