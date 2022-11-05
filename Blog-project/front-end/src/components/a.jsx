import { useParams } from "react-router-dom"


export const A = () => {
    const a = useParams();

    console.log(a)

    return (
        <div>aa</div>
    )
}