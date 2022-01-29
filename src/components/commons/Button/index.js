import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import propToStyle from "../../../theme/utils/propToStyle";

const StyledLink = styled.a`
  color: inherit;
  opacity: 1;
  text-decoration: none;
  transition: opacity 200ms ease-in-out;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

const ButtonGhost = css`
  background-color: ${({ theme }) =>
    theme.mode.light.buttons.background.secondary};
`;

const ButtonWrapper = styled.button`
  display: flex;
  flex-wrap: wrap;
  border: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  opacity: 1;
  border-radius: 8px;
  color: white;
  font-weight: 400;
  background-color: transparent;
  &:hover {
    color: #4cf2e2;
    cursor: pointer;
  }

  ${function (props) {
    if (props.ghost) {
      return ButtonGhost;
    }
  }}
  ${propToStyle("paddingRight")}
  ${propToStyle("paddingLeft")}
  ${propToStyle("backgroundColor")}
  ${propToStyle("marginTop")}
  ${propToStyle("color")}
  ${propToStyle("fontWeight")}
  ${propToStyle("hover")}
  ${propToStyle("border")}
  ${propToStyle("padding")}
`;
// background-color: #22c55e; green
// background: #2563eb; Blue

export function Button({ href, children, ...props }) {
  const hashHref = Boolean(href);
  const tag = hashHref ? StyledLink : "button";
  return (
    <ButtonWrapper as={tag} href={href} {...props}>
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
