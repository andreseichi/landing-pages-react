import * as Styled from './styles';

interface HeadingProps {
  children: JSX.Element;
}

export function Heading({ children }: HeadingProps) {
  return <Styled.Title>{children}</Styled.Title>;
}
