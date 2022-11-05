import { createContext , useEffect, useState } from "react";

export const UserContext = createContext(); 

export const UserContextPrv = ({children}) => {

    const [name, setName] = useState("Tsogt")
    const [prof_pic_url, setProf_pic_url] = useState("")
    const [blog_content, setBlog_content] = useState("")
    const [title, setTitle] = useState("")
    const [bg_picture, setBg_picture] = useState("")
    const [summary, setSummary] = useState("")


    return (
        <UserContext.Provider value = {{name, prof_pic_url, blog_content, title, bg_picture, summary, setName, setProf_pic_url, setBlog_content, setTitle,setBg_picture, setSummary}}>
             {children}
        </UserContext.Provider>
    )
}

export default UserContextPrv; 