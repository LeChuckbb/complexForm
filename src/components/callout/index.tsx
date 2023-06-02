import Title from "./Title";
import Body from "./Body";
import { Props } from "./types";

const Callout = ({ children }: Props) => {
  return <div style={{ background: "blue" }}>{children}</div>;
};

Callout.Title = Title;
Callout.Body = Body;

export default Callout;
