import P from 'prop-types';

import { Heading } from '../Heading';

import * as Styled from './styles';

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {srcImg ? <img src={srcImg} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};
LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImage: P.string,
  link: P.string.isRequired,
};
