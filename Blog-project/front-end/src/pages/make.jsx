import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Make() {

  
  const api = axios.create({
    baseURL: "http://0.0.0.0:3001/blogs",
  });
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function fetchData() {
      api.get("/").then(res=>{
        console.log(...res.data.Blog)
        setPosts(...res.data.Blog)
    })
    }
    fetchData();
  }, []);



  return (
    <div className="w-screen max-w-MAX_WIDTH min-h-screen flex flex-col">

      <input type="text" name="" placeholder="Enter Author name" className=" my-2 w-48 h-[40px] border-[2px] border-gray-500 rounded-md pl-1" id="" />
      <input type="text" name="" placeholder="Enter Title" className=" my-2 w-48 h-[40px] border-[2px] border-gray-500 rounded-md pl-1" id="" />
      <input type="text" name="" placeholder="Enter Subtitle" className=" my-2 w-48 h-[40px] border-[2px] border-gray-500 rounded-md pl-1" id="" />
      <input type="text" name="" placeholder="main content" className=" my-2 w-48 h-[40px] border-[2px] border-gray-500 rounded-md pl-1" id="" />
      
    </div>
  );
}
