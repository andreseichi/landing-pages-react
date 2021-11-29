// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      white: string;
    };

    font: {
      family: {
        default: string;
        secondary: string;
      };
    };
  }
}
