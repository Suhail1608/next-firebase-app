'use client'
import React, { FormEvent, useState } from 'react'
import './styles.scss'
import Image from 'next/image'
import loginImg from '@/assets/images/login.jpg'
import Col from '@/component/Common/Wrapper/Col'
import Input from '@/component/Common/Input/Input'
import Button from '@/component/Common/Button/Button'
import { Read } from '@/FirebaseCRUD'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'


interface Data{
    firstName:string
    lastName:string
    username:string
    password:string
    dob:string,
    profile:string,
    country:string,
    gender:string,
    bloodGroup:string,
    email:string,
    phone:string,
    univ:string,
    degree:string,
    role:string
}

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e:FormEvent) =>{
        e.preventDefault()
        const data = await Read(email)
        
        console.log(data)
        sessionStorage.setItem("auth",email)
        signIn('credentials', {email,password, redirect:true, callbackUrl:"/dashboard"})
       
    }
  return (
    <div className='login-content'>
        <div className='login-left'>
        <h2>Leadership is for every young person.</h2>
            <Image className='img' width={450} src={loginImg} alt=''></Image>
           
        </div>
        <div className='login-right'>
            <form className='login-form'>
                <Col>
                    <h2 id='heading'>Login</h2>
                    <Input value={email} callbackwP={(value)=>{setEmail(value)}} placeholder='Email'></Input>
                    <Input value={password} callbackwP={(value)=>{setPassword(value)}} placeholder='password' pwd></Input>
                    <div className='buttondiv'><Button label='Login' callback={handleSubmit} /></div>
                </Col>
            </form>
        </div>
    </div>
  )
}

export default Login