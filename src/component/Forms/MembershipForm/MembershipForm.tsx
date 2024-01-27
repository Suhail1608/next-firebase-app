'use client'
import Button from '@/component/Common/Button/Button';
import Chip from '@/component/Common/Chip/Chip';
import MultiSelect from '@/component/Common/MutliSelect/MultiSelect'
import { redirect, useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import company from '@/assets/icons/Company.svg'
import Image from 'next/image';
import Input from '@/component/Common/Input/Input';
import Row from '@/component/Common/Wrapper/Row';
import Col from '@/component/Common/Wrapper/Col';
import DateInput from '@/component/Common/DateInput/DateInput';
import FileInput from '@/component/Common/FileInput/FileInput';
import './styles.scss'
import { Create } from '@/FirebaseCRUD';
import { signIn } from 'next-auth/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/FirebaseAuth';


const MembershipForm = () => {
    const countries = [
        { label: "India", value: "India" },
        { label: "United States", value: "United States" },
        { label: "Canada", value: "Canada" },
        { label: "United Kingdom", value: "United Kingdom" },
        { label: "Australia", value: "Australia" },
        { label: "Germany", value: "Germany" },
        { label: "France", value: "France" },
        { label: "Brazil", value: "Brazil" },
        { label: "China", value: "China" },
        { label: "Japan", value: "Japan" },
        { label: "South Korea", value: "South Korea" },
        { label: "Mexico", value: "Mexico" },
        { label: "Italy", value: "Italy" },
        { label: "Spain", value: "Spain" },
        { label: "Russia", value: "Russia" },
        { label: "South Africa", value: "South Africa" },
        { label: "Argentina", value: "Argentina" },
        { label: "New Zealand", value: "New Zealand" },
        { label: "Netherlands", value: "Netherlands" },
        { label: "Switzerland", value: "Switzerland" }
    ];
    const degrees = [
        {
          label: "B.E",
          value: "Bachelor of Engineering"
        },
        {
          label: "B.A",
          value: "Bachelor of Arts"
        },
        {
          label: "B.Sc",
          value: "Bachelor of Science"
        },
        {
          label: "B.Com",
          value: "Bachelor of Commerce"
        },
        {
          label: "B.Tech",
          value: "Bachelor of Technology"
        },
        {
          label: "M.E",
          value: "Master of Engineering"
        },
        {
          label: "M.A",
          value: "Master of Arts"
        },
        {
          label: "M.Sc",
          value: "Master of Science"
        },
        {
          label: "M.Com",
          value: "Master of Commerce"
        },
        {
          label: "M.Tech",
          value: "Master of Technology"
        },
        {
          label: "Ph.D",
          value: "Doctor of Philosophy"
        }
      ];
      const roles = [
        {
          label: "Junior Marketing Manager",
          value: "Junior Marketing Manager"
        },
        {
          label: "Senior Marketing Manager",
          value: "Senior Marketing Manager"
        },
        {
          label: "Product Manager",
          value: "Product Manager"
        },
        {
          label: "Sales Representative",
          value: "Sales Representative"
        },
        {
          label: "Software Engineer",
          value: "Software Engineer"
        },
        {
          label: "Graphic Designer",
          value: "Graphic Designer"
        },
        {
          label: "Human Resources Specialist",
          value: "Human Resources Specialist"
        },
        {
          label: "Financial Analyst",
          value: "Financial Analyst"
        },
        {
          label: "Customer Support Specialist",
          value: "Customer Support Specialist"
        },
        {
          label: "Data Scientist",
          value: "Data Scientist"
        }
      ];
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [dob, setDob] = useState("")
    const [profile, setProfile] = useState("")
    const [country, setCountry] = useState(countries[0].value)
    const [gender, setGender] = useState("Male")
    const [bloodGroup, setBloodGroup] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [univ, setUniv] = useState("")
    const [degree, setDegree] = useState(degrees[0].value);
    const [role, setRole] = useState(roles[0].value)
    const router = useRouter()
    const handleSubmit = (e:FormEvent) =>{
        const saltRounds = 10;
       
        const formData = JSON.stringify(
            {
                firstName:firstName==="" ? "NA" : firstName,
                lastName:lastName==="" ? "NA" : lastName,
                username:username==="" ? "NA" : username,
                password:password,
                dob:dob==="" ? "NA" : dob,
                profile:profile,
                country:country==="" ? "NA" : country,
                gender:gender==="" ? "NA" : gender,
                bloodGroup:bloodGroup==="" ? "NA" : bloodGroup,
                email:email==="" ? "NA" : email,
                phone:phone==="" ? "NA" : phone,
                univ:univ==="" ? "NA" : univ,
                degree:degree==="" ? "NA" : degree,
                role:role==="" ? "NA" : role
            }
        )
        e.preventDefault()
        Create(email,JSON.parse(formData))
        createUserWithEmailAndPassword(auth,email,password)
        router.replace('/login')
        
        window.alert(formData)
    }
    
    const handleNext = () =>{
        setFormIndex(1)
    }
    const handleBack = () =>{
        setFormIndex(0)
    }
    const [formIndex, setFormIndex] = useState(0)
    switch (formIndex) {
        case 0:
            return (
                <form className='member-form' onSubmit={(e)=>{handleSubmit(e)}}>
                    <h2>
                        Select a country that you wish to apply at.
                    </h2>
                    <MultiSelect options={countries} value={country} callbackwP = {(value)=>{setCountry(value)}}/>
                    <div className='buttondiv'><Button label='Next' callback={handleNext}/></div>
                </form>
              )
        case 1:
            return (
                <form className='member-form' onSubmit={(e)=>{handleSubmit(e)}}>
                    <h1>
                        Join AIESEC
                    </h1>
                    <p>We'll need a few details to get you started.</p>
                    <Chip icon={<Image src={company} alt=''/>} label={country}/>
                    <Row>
                        <Col>
                            <label>First Name</label>
                            <Input placeholder='ex. John' value={firstName} callbackwP={(value)=>{setFirstName(value)}}/>
                        </Col>
                        <Col>
                            <label>Last Name</label>
                            <Input placeholder='ex. Doe' value={lastName} callbackwP={(value)=>{setLastName(value)}}/>
                        </Col>
                    </Row>
                    <Row>
                      <Col>
                      <label>Username</label>
                      <Input placeholder='username' value={username} callbackwP={(value)=>{setUsername(value)}}></Input>
                      <label>Password</label>
                      <Input placeholder='password' value={password} callbackwP={(value)=>{setPassword(value)}}></Input>
                      </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Date of birth</label>
                            <DateInput value={dob} callbackwP={(value)=>{setDob(value)}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Profile photo</label>
                            <FileInput  callbackwP={(value)=>{setProfile(value)}}/>
                            <img src={profile} width={100} alt=''></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Gender</label>
                            <MultiSelect options={[{label:"Male",value:"Male"},{label:"Female",value:"Female"}]} value={gender} callbackwP={(value)=>{setGender(value)}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Blood Group</label>
                            <Input placeholder='O +ve' value={bloodGroup} callbackwP={(value)=>{setBloodGroup(value)}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Email</label>
                            <Input placeholder='example@gmail.com' value={email} callbackwP={(value)=>{setEmail(value)}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Phone</label>
                            <Input placeholder='8999976555' value={phone} callbackwP={(value)=>{setPhone(value)}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>University</label>
                            <Input placeholder='Anna University' value={univ} callbackwP={(value)=>{setUniv(value)}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Degree</label>
                            <MultiSelect options={degrees} value={degree} callbackwP={(value)=>{setDegree(value)}}></MultiSelect>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Role</label>
                            <MultiSelect options={roles} value={role} callbackwP={(value)=>{setRole(value)}}></MultiSelect>
                        </Col>
                    </Row>
                    <div className='buttondiv'>
                    <Button label='Back' callback={handleBack} secondary={true}/>
                        <Button label='Submit' callback={handleSubmit}/>
                        
                    </div>
                </form>
              )
              
    
        default:
            break;
    }
}

export default MembershipForm