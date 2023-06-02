import { Props } from "./types";

const Title = ({ children }: Props) => {
  return (
    <p>
      <b>{children}</b>
    </p>
  );
};

export default Title;
