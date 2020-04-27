import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/background.svg';

export default createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: none;
 }
 body {
    background: ${({ theme }) => theme.body} url(${githubBackground}) no-repeat
    70% top;
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;
 }

 body, input, button {
   font: 16px Roboto, sans-serif;
 }
 #root {
   max-width: 960px;
   margin: 0 auto;
   padding: 20px;
 }
 button {
   cursor: pointer;
 }
`;
