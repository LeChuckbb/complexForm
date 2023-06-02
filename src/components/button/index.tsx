interface Props {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: Props) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
