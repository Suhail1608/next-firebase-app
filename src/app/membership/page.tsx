import React from 'react'
import './styles.scss'
import secondpage from '@/assets/images/secondpage.jpg'
import MembershipForm from '@/component/Forms/MembershipForm/MembershipForm'
import Image from 'next/image'
const Membership = () => {
   
  return (
    <div className='membership-content'>
       <div className='section'>
            <div className='left'>
                <h2>
                    Become an AIESEC member
                </h2>
                <p>
                    Develop yourself through practical experiences in the world’s largest youth-led organization
                </p>
                
            </div>
            <div className='right'>
                <MembershipForm/>
            </div>
       </div>
    </div>
  )
}

export default Membership