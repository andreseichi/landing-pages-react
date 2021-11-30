import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Home } from '.';
import { theme } from '../../styles/theme';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

test('renders learn react link', () => {
  renderTheme(<Home />);
});
