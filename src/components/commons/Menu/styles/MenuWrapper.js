import styled, { css } from "styled-components";
import { breakpointsMedia } from "../../../../theme/utils/breakpointsMedia";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 74px;
  padding-left: 40px;
  padding-right: 40px;
  z-index: 100;

  background: ${({ backgroundColor }) => backgroundColor};

  ${breakpointsMedia({
    md: css``,
    lg: css`
      height: 96px;
    `,
    xl: css`
      padding-left: 48px;
      padding-right: 48px;
    `,
  })}
`;

Wrapper.LeftSide = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
  padding: 0;
  margin: 0;

  img {
    box-sizing: border-box;
    display: flex;
    width: 43vw;
    height: 64px;
  }

  ${breakpointsMedia({
    sm: css`
      img {
        box-sizing: border-box;
        width: 160px;
        height: 64px;
      }
    `,
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

export const MenuWrapper = styled.nav`
  display: flex;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  ${breakpointsMedia({
    md: css`
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    `,
    lg: css`
      width: 80%;
    `,
    xl: css`
      padding-left: 48px;
      padding-right: 48px;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;

  img {
    box-sizing: border-box;
    display: flex;

    width: 50vw;
    height: 64px;
  }

  ${breakpointsMedia({
    sm: css`
      img {
        box-sizing: border-box;
        width: 160px;
        height: 64px;
      }
    `,
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

MenuWrapper.CenterSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 12px;

  button {
    box-sizing: border-box;
    border: 0 solid;
    margin-right: 10px;
    justify-content: space-between;
    gap: 6px;

    span {
      opacity: 1;
      font-family: inherit;
      font-size: 100%;
      line-height: inherit;
      margin-right: 1px;
    }

    svg {
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      vertical-align: middle;
    }
  }
  select {
    border: 0px;
    border-radius: 5px;
    background: #1f2937;
    color: #fff;
    padding: 5px;
    opacity: 0.5;
  }

  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      flex: 1;
      order: initial;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
      margin-left: 0px;
    `,
    lg: css`
      margin-left: -20px;
      order: 2;
      display: flex;
    `,
    xl: css`
      margin-left: -80px;
    `,
  })}
`;

MenuWrapper.RightSide = styled.div`
  display: flex;
  padding: 8px;
  padding: 0;
  margin: 0;
  order: 4;
  display: none;
  justify-content: flex-end;

  button {
    border-radius: 5px;

    &:hover {
      color: #fff;
      background: #61df61;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  ${breakpointsMedia({
    md: css`
      margin-right: 0px;
    `,
    lg: css`
      order: 3;
      display: flex;
      margin-right: 0px;
    `,
    xl: css`
      order: 3;
      display: flex;
      margin-right: -77px;
    `,
  })}
`;

export const ButtonRightSideMobile = styled.div`
  padding: 8px;
  padding: 0;
  margin: 0;
  order: 1;
  justify-content: flex-end;

  button {
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 0.5rem;
    width: 2.6rem;
    height: 2.6rem;
    background: transparent;
    color: #f9fafb;

    &:hover {
      cursor: pointer;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  ${breakpointsMedia({
    lg: css`
      order: 3;
      display: none;
    `,
  })}
`;

export const MenuWrapperRightSideMobile = styled.div`
  position: absolute;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  margin: auto;
  text-align: center;
  background: #fff;
  margin: auto;
  transition: 0.2s;
  z-index: 200;
  top: 0;
  left: 0;
  color: white;
  display: flex;
  overflow-y: auto;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
        transform: translateX(0) translateZ(100%);
      `;
    }

    return css`
      opacity: 0;
      pointer-events: none;
      transform: translateX(100%) translateZ(0px);
    `;
  }}

  ${breakpointsMedia({
    lg: css`
      order: 3;
      display: none;
    `,
  })}
`;

export const ContainerContent = styled.div`
  margin-top: 70px;
  overflow-y: auto;
  position: fixed;
  height: 100%;
  width: 100%;
  background: #fff;
`;

export const WrapperContentNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  background: #e5e5efe6;
  color: black;
  padding: 15px;

  img {
    max-width: 100%;
    height: auto;
  }

  svg {
    margin: 0px;
    margin-bottom: -7px;
  }

  ${breakpointsMedia({
    sm: css`
      img {
        width: 8rem;
      }
    `,
  })}
`;

export const WrapperNav = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #fff;

  color: black;
  margin: 50px;
  margin: auto;
  margin-bottom: 70px;
  overflow-y: auto;

  button {
    margin: 15px;
    transition: 0.2s;
    &:hover {
      color: #000;
    }
  }

  a {
    margin: 15px;
    &:hover {
      color: #000;
    }
  }

  select {
    border: 0 solid;
    border-radius: 5px;
    color: #000;
    padding: 5px;
    width: 4rem;
    margin-bottom: 15px;
  }

  svg {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const Select = styled.div`
  display: block;
`;
