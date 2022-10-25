import { useState, useEffect } from "react"
import axios from "axios"

// const port = "http://0.0.0.0:3001/"

const fetch_data = async () =>{
    return await axios.get("http://0.0.0.0:3001/blogs")
}

export const Make = () =>{

    useEffect(()=>{
        console.log(fetch_data())
    },[])


    return <div> hello make </div>
} 