import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
	/* My tag body have a default 8px margin that I don't know how to delete */
	margin: 0;
	padding: 0;
	box-sizing: border-box;

	font-family: sans-serif;
`;

export const MyGlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
`;
