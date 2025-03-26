import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--gray-200);
`;

export const FooterLink = styled.a`
  &, &:hover, &:active, &:focus, &:visited {
    color: var(--gray-800);
    text-decoration: none;
  }
`;
