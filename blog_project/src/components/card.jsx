export const Card = (props) => {
  const { title, author, image } = props;

  return (
    <div className=" h-[440px] w-[360px] bg-white flex flex-col items-center justify-between overflow-hidden rounded-3xl">
      <div className=" w-full h-[35%] bg-gray-300"></div>
      <div className="main h-[50%] w-[80%] bg-white flex flex-col ">
        <h1 className="cabin text-[24px] h-[30%] py-[5%]">Title</h1>
        <p className="mulish text-[14px] h-[60%]">body</p>
      </div>
      <div className="footer h-[15%] w-full flex flex-row items-center px-5">
        <div className="prof w-[45%] flex flex-row justify-between items-center">
          <div className="circle rounded-full h-[45px] w-[45px] bg-gray-300"></div>
            <div className="name mulish text-[12px] text-[#6D7D8B] justify-self-end ">Nmae</div>

        </div>
        <div className="spacer mulish text-[12px] text-[#6D7D8B] w-[10%] text-center flex justify-center">|</div>
        <div className="name mulish text-[12px] text-[#6D7D8B] justify-self-end ">2/20/2022</div>
        <div className="data"></div>
      </div>
    </div>
  );
};
