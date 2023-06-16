"use client";
import styled, { css } from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledDiv>
      <ul>
        <li>
          <StyledLink $home href="/">
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink $leistungen href="/leistungen">
            Leistungen
          </StyledLink>
        </li>
        <li>
          <StyledLink $referenzen href="/">
            Referenzen
          </StyledLink>
        </li>
        <li>
          <StyledLink $kontakt href="/">
            Kontakt
          </StyledLink>
        </li>
      </ul>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background: #333;
  padding: 10px;
  margin: 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid black;

  ul {
    position: relative;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    position: relative;
    margin: 0;
    padding: 0;
    float: left;
    height: 100%;
  }
`;
const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #111;
  }

  ${(props) =>
    props.$home &&
    css`
      &:hover::after {
        width: 100%;
        left: 0%;
      }
      &::after {
        position: absolute;
        transition: 0.3s;
        content: "";
        width: 0;
        left: 50px;
        bottom: 0;
        height: 3px;
        background: #f7f7f7;
      }
    `};

  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.$leistungen &&
    css`
      &:hover::after {
        width: 100%;
        left: 0%;
      }
      &::after {
        position: absolute;
        transition: 0.3s;
        content: "";
        width: 0;
        left: 50px;
        bottom: 0;
        height: 3px;
        background: #f7f7f7;
      }
    `};

  ${(props) =>
    props.$referenzen &&
    css`
      &:hover::after {
        width: 100%;
        left: 0%;
      }
      &::after {
        position: absolute;
        transition: 0.3s;
        content: "";
        width: 0;
        left: 50px;
        bottom: 0;
        height: 3px;
        background: #f7f7f7;
      }
    `};

  ${(props) =>
    props.$kontakt &&
    css`
      &:hover::after {
        width: 100%;
        left: 0%;
      }
      &::after {
        position: absolute;
        transition: 0.3s;
        content: "";
        width: 0;
        left: 50px;
        bottom: 0;
        height: 3px;
        background: #f7f7f7;
      }
    `};
`;