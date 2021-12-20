import * as Styled from './styles';

import { Heading } from '../../components/Heading';
import { Base } from '../Base';
import { mockBase } from '../Base/Base.stories';

export function Home() {
  return <Base {...mockBase} />;
}
