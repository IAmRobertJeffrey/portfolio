import { createGlobalStyle } from 'styled-components';


import poppins from "../fonts/Outfit-Light.ttf";
import poppinsThick from "../fonts/Outfit-ExtraBold.ttf";

export default createGlobalStyle`

   

	@font-face {
        font-family: 'poppins';
        src: url(${poppins}) format('woff2')
    }

	@font-face {
        font-family: 'poppinsThick';
        src: url(${poppinsThick}) format('woff2')
    }
`;
