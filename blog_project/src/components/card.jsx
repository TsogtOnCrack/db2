export const Card = (props) => {
    const{image, title, body } = props
    return <div className="w-[370px] h-[400px] bg-white rounded-[30px] overflow-hidden flex flex-col justify-between items-center m-4">

        <div className="h-[150px] w-full bg-red-500 ">
            this is where the image will be
        </div>
        <h1 className=" font-bold text-[20px]">Title</h1>
        <div className="h-[35%]">
            <h1>body</h1>
        </div>




    </div>
}