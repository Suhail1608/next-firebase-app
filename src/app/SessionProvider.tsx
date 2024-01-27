'use client'
import {SessionProvider as Provider} from 'next-auth/react'
import React from 'react'
interface Props{
    children:React.ReactNode
}
function SessionProvider({children}:Props){
    return(
        <Provider>
            {children}
        </Provider>
    )
}
export default SessionProvider