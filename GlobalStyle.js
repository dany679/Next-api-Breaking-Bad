import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --maxWidth: '1280px';
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontLargeBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMedium: 1.2rem; 
    --fontSmall: 1.0rem; 
    }
    *{
        box-sizing: border-box;
        font-family: 'abel',sans-serif;
    }
    body{
        margin: 0;
        padding: 0;
    }
    h1,h2{
        font-size: 2rem;
        font-weight: 600;
        color: var(--white);
    }
 
    h3{
        font-size: 1.1rem;
        font-weight: 600;
    }
    p{
        font-size: var(--fontSmall);
        color: #1c1c1c var(--white);
    }

`;
