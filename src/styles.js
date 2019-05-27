import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {

// colors
--c-black: #0e0301;
--c-dark: #280a00;

--c-primary: #5a1a00;
--c-accent: #ab4214;

--c-white: #fff;
--c-light-grey: #eee;
--c-grey: #ccc;
--c-grey-dark: #777;

--via-appia:#a9502b;
--via-aurelia:#b5975e;
--via-flamina:#a8a9ad;
--via-pompeia:#bc2232;

// grid
--grid-width: 114rem;
--gutter-vertical: 8rem;
--gutter-horizontal: 6rem;

// font
--default-font-size: 1.6rem;
--header-font: "Trajan Pro 3", serif;
--base-font: "Roboto", sans-serif;

}

// CSS reset

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  padding: 3rem;
  box-sizing: border-box;
  font-size: 1.6rem;
}

.section {
  padding: 8rem 0;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

//typography

body {
  font-family: var(--base-font);
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  padding: 3rem;
  box-sizing: border-box;
  color: var(--c-black);
}

h1, h2, h3 {
  font-family: var(--header-font);
  font-weight: 200;
}

h4, h5 {
  font-family: var(--header-font);
  font-weight: 700;
}

h5 {
  font-size: 1.6rem;
}

.secondary-heading {
  text-align: center;
  font-size: 3em;
}

.u-center-text {
  text-align: center;
}

.u-margin-bottom-big {
  margin-bottom: 8rem;
}

.u-margin-bottom-small {
  margin-bottom: 1.5rem;
}

.u-margin-bottom-med {
  margin-bottom: 4rem;
}

.fade-in {
  animation: fade-in 5s;
  animation-fill-mode: forwards;
}

`