import { TextProps } from "./types";

const Text = ({ placeholder, type = "text" }: TextProps) => {
  return (
    <>
      <input type={type} placeholder={placeholder} />
    </>
  );
};

export default Text;
