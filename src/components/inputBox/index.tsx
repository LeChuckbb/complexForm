import { Props } from "./types";
import Radio from "./Radio";
import Title from "./Title";
import Text from "./Text";
import Checkbox from "./Checkbox";
import * as S from "./style";

const InputBox = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>;
};

InputBox.Title = Title;
InputBox.Radio = Radio;
InputBox.Checkbox = Checkbox;
InputBox.Text = Text;

export default InputBox;
