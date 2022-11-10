import { useState } from "react"
import { useEffect } from "react"
import { api } from "../utils/api"


export const Login = () =>{
    const [email , setEmail] = useState(''); 
    const [pwd , setPwd] = useState(''); 

    const logIn = async () => {
        if ( email !== '' && pwd !== '') {
            await api.post('/login' , {
                email: email, 
                password: pwd
            }).then((res) => console.log(res)); 
         }
         else {
           alert('Your email or pwd is not filled.'); 
           setEmail(''); 
           setPwd(''); 
           return; 
         }
    }; 
    return <div>
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="text" placeholder="password" onChange={(e) => setPwd(e.target.value)} value={pwd} />
        <button onClick={() => logIn()}> Login </button>
    </div>
}