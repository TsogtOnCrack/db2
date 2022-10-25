import { useState, useEffect } from "react"
import axios from "axios"

const port = "http://0.0.0.0:3001/"

const fetch_data = async () =>{
    return await axios.get("http://0.0.0.0:3001/")
}

export const Make = () =>{

    let data = []
    // useEffect(()=>{
    //     console.log(fetch_data())
    // },[])

    axios.get( port, )
    .then(function (response) {
        // console.log(response.data);
        data.push([...response.data.Blog]) //tjos
    })
    data.map((el)=>{
        console.log(el)
    })

    return <div> hello make </div>
} 