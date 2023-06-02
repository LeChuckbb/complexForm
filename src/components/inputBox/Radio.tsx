import { RadioProps } from "./types";

const Radio = ({ name, id, children }: RadioProps) => {
  return (
    <>
      <input type="radio" value={children} name={name} id={id} />
      <label htmlFor={id}>{children}</label>
    </>
  );
};

export default Radio;
