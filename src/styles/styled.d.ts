import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    toggleBorder: string;
    gradient: string;
    lightTheme: boolean;
    card: string;
    cardTitle: string;
    cardDescription: string;
  }
}
