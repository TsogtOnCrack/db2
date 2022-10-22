const axios = require ("axios")
import { useEffect, useState } from "react";

const link = "http://0.0.0.0:3001/blogs"
const get_data = async()=>{
    const data = await axios.get(link)
    return data
}
get_data()

const data = get_data()

export default function create(){

    

    console.log(data)
    return <div className="flex flex-col h-screen justify-around w-[30vw]">
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <button className="w-[300px] h-[100px] bg-green-600">add</button>

    </div>
}