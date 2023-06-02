import { Props } from "./types";
import Radio from "./Radio";
import Title from "./Title";
import Text from "./Text";
import Checkbox from "./Checkbox";

const InputBox = ({ children }: Props) => {
  return <div>{children}</div>;
};

InputBox.Title = Title;
InputBox.Radio = Radio;
InputBox.Checkbox = Checkbox;
InputBox.Text = Text;

export default InputBox;
