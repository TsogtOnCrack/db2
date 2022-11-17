import { Text as TextRn } from "react-native";
import tw from "twrnc";

const Text = ({ className, children, ...rest }) => {
  return <TextRn style={tw`${className}`} {...rest}>{children}</TextRn>
};

export{ Text };