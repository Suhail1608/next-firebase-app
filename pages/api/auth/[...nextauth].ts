import { auth } from "@/FirebaseAuth"
import { signInWithEmailAndPassword } from "firebase/auth"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  pages:{
    signIn:'/login'
  },
  providers: [
    CredentialsProvider({
      name:'Credentials',
      credentials:{},
      async authorize(credentials): Promise<any>{
        return await signInWithEmailAndPassword(auth,(credentials as any).email || '', (credentials as any).password || '')
        .then(userCredential => {
            if(userCredential.user){
                return userCredential.user
            }
            return null
        }).catch(error =>{console.log(error)})
      }
    })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)