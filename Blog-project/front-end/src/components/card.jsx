import { useNavigate } from "react-router-dom";

export const Card = (props) => {
  const navigate = useNavigate();

  const {id, bg_pic="", title = {header: "default title", body : "This field is empty"}, author ={"name":"Macarthy Dick", "image": "this is url"} , date = "ur mom's birthday"} = props;



  return (
    <div onClick={() => navigate(`/blogs/${id}`)} className=" h-[440px] w-[360px] bg-white flex flex-col items-center justify-between overflow-hidden rounded-3xl m-5">
      <div className=" w-full h-[35%] bg-gray-300 overflow-hidden">
        <img src={bg_pic} className= "w-full" alt="" />
      </div>
      <div className="main h-[50%] w-[80%] bg-white flex flex-col ">
        <h1 className="cabin text-[24px] h-[40%] my-[5%]">{title.header}</h1>
        <p className="mulish text-[14px] h-[50%]">{title.body}</p>
      </div>
      <div className="footer h-[15%] w-full flex flex-row items-center px-5">
        <div className="prof w-[45%] flex flex-row justify-between items-center">
          <div className="circle rounded-full h-[45px] w-[45px] overflow-hidden bg-gray-300">
            <img src={author.image} className = "w-full h-full" alt="" />
          </div>
            <div className="max-w-[60%] name mulish text-[12px] text-[#6D7D8B] justify-self-end  overflow-clip ">{author.name}</div>

        </div>
        <div className="spacer mulish text-[12px] text-[#6D7D8B] w-[10%] text-center flex justify-center">|</div>
        <div className="name mulish text-[12px] text-[#6D7D8B] justify-self-end ">{date}</div>
        <div className="data"></div>
      </div>
    </div>
  );
};
