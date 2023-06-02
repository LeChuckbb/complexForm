export interface Props {
  children: React.ReactNode;
}

export interface RadioProps {
  name: string;
  id: string;
  children: string;
}

export interface CheckboxProps extends Props {
  id: string;
}

export type TextProps = React.HTMLProps<HTMLInputElement>;
