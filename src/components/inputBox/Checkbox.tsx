import Flex from "../flex";
import { CheckboxProps } from "./types";

const Checkbox = ({ id, children }: CheckboxProps) => {
  return (
    <Flex gap="8px">
      <input type="checkbox" id={id} value={id} />
      <label htmlFor={id}>{children}</label>
      <p>보기</p>
    </Flex>
  );
};

export default Checkbox;
