import styled, { css } from 'styled-components';

interface TitleProps {
  light: boolean;
}

export const Title = styled.h1<TitleProps>`
  ${({ theme, light }) => css`
    color: ${light ? theme.colors.white : theme.colors.primaryColor};
  `}
`;
