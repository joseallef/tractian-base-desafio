import styled, { css } from "styled-components";
import { breakpointsMedia } from "../../../../../theme/utils/breakpointsMedia";

const WrapperSession = styled.div`
  position: relative;
  width: 100%;
  margin-top: 150px;
  height: -webkit-fill-available;
  padding: 20px;
  display: block;

  ${breakpointsMedia({
    lg: css`
      display: flex;
    `,
  })}
}
`;

const WrapperLeft = styled.div`
  box-sizing: border-box;

  h3 {
    color: #2563eb;
    text-transform: uppercase;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
  h2 {
    font-weight: 400;
    letter-spacing: 0.025em;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  button {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    color: #9ca3af;
    span {
      margin-right: 15px;
    }

    &:hover {
      color: black;
    }
  }

  button:nth-child(6) {
    display: none;
    color: white;
    font-weight: 500;
    font-family: inherit;
    font-size: 100%;
    line-height: inherit;
    padding: 13px;
    padding-right: 40px;
    padding-left: 40px;
  }

  ${breakpointsMedia({
    sm: css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: auto;
      width: 500px;
    `,

    lg: css`
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      width: 500px;
      padding: 20px;

      h4 {
        font-size: 2.25rem;
      }

      button:nth-child(6) {
        display: flex;
        margin-top: 40px;
      }
    `,
  })}
`;

const WrapperRight = styled.div`
  display: flex;

  ${breakpointsMedia({
    lg: css`
      display: flex;
      width: 50%;
    `,
  })}
`;
const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpointsMedia({
    lg: css`
      display: none;
      width: 50%;
    `,
  })}
`;

export { WrapperSession, WrapperLeft, WrapperRight, WrapperButton };
