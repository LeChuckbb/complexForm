import Title from "./Title";
import Body from "./Body";
import { Props } from "./types";
import { Container } from "./style";

const Callout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

Callout.Title = Title;
Callout.Body = Body;

export default Callout;
