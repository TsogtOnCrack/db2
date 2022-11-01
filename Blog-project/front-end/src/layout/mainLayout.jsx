import {Header} from "../components/header"
const pathname = window.location.pathname
const blogs = "/"

export const MainLayout = ({children}) =>{

    return <div className={`flex flex-col items-center min-h-screen ${pathname == blogs ? "bg-[#F5F7FA]" : "bg-transparent" }`}>
        <Header/>
        <div className="h-[100px]"></div>
        {children}
    </div>

}