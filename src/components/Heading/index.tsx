import * as Styled from './styles';

interface HeadingProps {
  // children: JSX.Element;
  children: string;
  light?: boolean;
}

export function Heading({ children, light = false }: HeadingProps) {
  return <Styled.Title light={light}>{children}</Styled.Title>;
}
