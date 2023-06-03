import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: Props) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  width: 100%;
  height: 36px;
`;
