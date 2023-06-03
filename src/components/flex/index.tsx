import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  direction?: "column" | "row";
  flex?: string;
  align?: string;
  gap?: string;
}

const Flex = ({
  children,
  direction = "row",
  align = "baseline",
  flex = "1 1 100%",
  ...rest
}: Props) => {
  return (
    <FlexDiv direction={direction} flex={flex} align={align} {...rest}>
      {children}
    </FlexDiv>
  );
};

export default Flex;

interface FlexDivProps {
  direction: "column" | "row";
  flex?: string;
  align?: string;
  gap?: string;
}

const FlexDiv = styled.div<FlexDivProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex: ${(props) => props.flex};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
`;
