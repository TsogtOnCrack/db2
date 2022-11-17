import { View as ViewRn } from "react-native";
import tw from "twrnc";

const ViewNew = ({className, children , ...rest}) =>{
    return <ViewRn style={tw.style(className)} {...rest} >{children}</ViewRn>
}

export {ViewNew}