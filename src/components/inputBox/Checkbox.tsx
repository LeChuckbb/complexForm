import { CheckboxProps } from "./types";

const Checkbox = ({ id, children }: CheckboxProps) => {
  return (
    <div>
      <input type="checkbox" id={id} value={id} />
      <label htmlFor={id}>{children}</label>
      <p>보기</p>
    </div>
  );
};

export default Checkbox;
