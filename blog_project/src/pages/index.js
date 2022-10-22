import { Card, Title } from "../components"

export default function Home() {

    return <div className="text-whitex flex flex-col items-center">

        <Title />

        <div className=" w-[90vw] flex flex-wrap justify-center">
            <Card />
        </div>

    </div>
}