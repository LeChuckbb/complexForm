import { RadioProps } from "./types";
import { RadioContainer } from "./style";

const Radio = ({ name, id, children }: RadioProps) => {
  return (
    <RadioContainer>
      <input type="radio" value={children} name={name} id={id} />
      <label htmlFor={id}>{children}</label>
    </RadioContainer>
  );
};

export default Radio;
