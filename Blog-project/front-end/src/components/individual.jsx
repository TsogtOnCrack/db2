import axios from "axios"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Indiv = () => {

    const id = useParams().id

    const api = axios.create({
        baseURL: "http://0.0.0.0:3001/blogs",
    });
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            api.get(`/${id}`).then(res => {
                console.log(res.data.data)
                setPosts(res.data.data)
            })
        }
        fetchData();
    }, []);

    console.log(posts)

    const title = posts.title.header !== "undefined" ? posts.title.header : "Loading ..."
    const author_pic = posts.author.image !== "undefined" ? posts.author.image : "Loading ..."
    const author_name = posts.author.name !== "undefined" ? posts.author.name : "Loading ..."
    const date = posts.content.date !== "undefined" ? posts.content.date : "Loading ..."
    const bg_pic = posts.content["background-picture" !== "undefined"]? posts.content["background-picture"] : "Loading"
    const body = posts.content.body !== "undefined" ? posts.content.body : "Loading"


 


     return <div className="w-screen min-h-[70vh] flex flex-col items-center">

        <div className="flex flex-col mt-20  max-w-[60%]">
            <h1 className=" text-[48px] font-[800] font-mukta">
                {title}</h1>




            <div className="footer py-4 h-[15%] w-[250px] flex flex-row items-center">
                <div className="prof w-[45%] flex flex-row justify-between items-center">
                    <div className="circle rounded-full h-[45px] w-[45px] overflow-hidden bg-gray-300">
                        <img src={author_pic} className="w-full h-full" alt="" />
                    </div>
                    <div className="max-w-[60%] name mulish text-[12px] text-[#6D7D8B] justify-self-end  overflow-clip ">{author_name}</div>

                </div>
                <div className="spacer mulish text-[12px] text-[#6D7D8B] w-[10%] text-center flex justify-center">|</div>
                <div className="name mulish text-[12px] text-[#6D7D8B] justify-self-end ">{date}</div>
                <div className=""></div>
            </div>


        </div>

        <div className="max-h-[500px] overflow-hidden my-20">
            <img className=" max-w-MAX_WIDTH w-screen px-10" src={bg_pic} alt="" />
        </div>

        <div className="max-w-[60vw]">
            {body}
        </div>


    </div>
}