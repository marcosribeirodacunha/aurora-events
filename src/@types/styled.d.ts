import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      card: string;
      text: string;
      textSecondary: string;
    };

    font: {
      default: string;
      title1: string;
      title2: string;
      title3: string;
      small: string;
    };

    lineHeight: {
      text: number;
      title: number;
    };

    radius: string;
  }
}
