import { TextInput } from "./style";
import { TextProps } from "./types";

const Text = ({ placeholder, type = "text" }: TextProps) => {
  return <TextInput type={type} placeholder={placeholder} />;
};

export default Text;
