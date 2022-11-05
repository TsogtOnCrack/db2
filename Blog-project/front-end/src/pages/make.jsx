import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Make() {

  const { setTitle, title, blog_content, setBlog_content } = useContext(UserContext)

  const api = axios.create({
    baseURL: "http://0.0.0.0:3001/blogs",
  });
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function fetchData() {
      api.get("/").then((res) => {
        console.log(...res.data.Blog);
        setPosts(...res.data.Blog);
      });
    }
    fetchData();
  }, []);

  return (
    <div className="w-screen max-w-MAX_WIDTH flex flex-col justify-end items-center">
      <div className="w-[80vw] mb-5 flex justify-between">
        <input
          val={title}
          onChange={(event) => {
            setTitle(event.target.value)
          }}

          placeholder="Title" className=" w-[80%]  outline-none " />
        <Link to="/style">
          <button className=" p-1 rounded-md border-[2px] border-gray-400 cursor-pointer font-bold text-gray-600">Next</button></Link>
      </div>
      <textarea
        val={blog_content}
        onChange={(event) => {
          setBlog_content(event.target.value)
        }}
        className=" w-[90vw] h-[70vh] border-[2px] rounded-md border-gray-400 p-3 outline-none"
        name=""
        id=""
      ></textarea>
      
    </div>
  );
}
