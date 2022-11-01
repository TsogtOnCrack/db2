import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Make() {
  const api = axios.create({
    baseURL: "http://0.0.0.0:3001/",
  });

  // const {state, setState} = useState( {
  //     blogs:[]
  // })

  const { posts, setPosts } = useState([]);

  useEffect(() => {
    // api.get("/").then(res=>{
    //     console.log(...res.data.Blog)
    //     setData(...res.data.Blog)
    //     // setData = (JSON.parse(String(res.data)))
    // })

    async function fetchData() {
      const response = await api.get("/");
      let result = response.data;
      setPosts(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="text-red-500">
      {" "}
      hello Make
      <button
        className="text-black"
        onClick={() => {
          console.log(posts);
        }}
      >
        click this
      </button>
      {/* 
{
    this.state.blogs.map((el)=>{
        return <div>
            {el.id}
        </div>
    })

  } */}
    </div>
  );
}
