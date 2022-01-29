import styled, { css } from "styled-components";
import { breakpointsMedia } from "../../../../../theme/utils/breakpointsMedia";

const BoxContent = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 90%;
  background: #fff;

  color: black;
  margin: 50px;
  margin: auto;
  margin-top: -20px;
  margin-bottom: 20px;
  overflow-y: auto;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
        display: flex;
      `;
    }

    return css`
      opacity: 0;
      pointer-events: none;
      display: none;
    `;
  }}

  p {
    display: block;
    width: 100%;
    margin: 3px;
    color: #1e40af;
    font-weight: 600;
  }

  p:nth-child(2) {
    text-transform: uppercase;
  }

  ${breakpointsMedia({
    lg: css`
      display: flex;
      background: #f5f5f4;

      position: absolute;
      width: 100%;
      flex-direction: column;
      align-items: stretch;
      margin: auto;
      text-align: center;
      margin: auto;
      z-index: 3;
      top: 90px;
      left: 0;

      overflow-x: hidden;
      height: 100vh;

      justify-content: center;

      p {
        display: block;
        width: 100%;
        margin: 3px;
        color: #1e40af;
        font-weight: 600;
      }

      p:nth-child(2) {
        text-transform: uppercase;
      }
    `,
  })}
`;

const CardOptions = styled.div`
  border-radius: 8px;
  display: flex;
  padding-top: 1.6rem;
}

  svg {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    color: #2563eb;

    display: block;
    vertical-align: middle;
  }


  img {
    display: inline-block;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    margin: 0px;
    width: 115px;
    height: 60px;
  }

  &:hover {
    background: #ddeafe;
    cursor: pointer;
  }

  button {
    &:hover {
      color: #000;
    }
  }

  ${breakpointsMedia({
    lg: css`
    border-radius: 8px;
    display: flex;
  
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
  
    svg {
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
      color: #2563eb;
  
      display: block;
      vertical-align: middle;
    }
  
  
    img {
      display: inline-block;
      overflow: hidden;
      position: relative;
      box-sizing: border-box;
      margin: 0px;
      width: 115px;
      height: 60px;
    }
  
    &:hover {
      background: #ddeafe;
      cursor: pointer;
    }
  
    button {
      &:hover {
        color: #000;
      }
    }
    `,
  })}
`;

const CardOptionsMaterial = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  display: block;
  width: 100%;

  border-radius: 0.5rem;

  p {
    color: #6b7280;
    text-align: left;
  }

  &:hover {
    background: #ddeafe;
    cursor: pointer;
  }

  button {
    &:hover {
      color: #000;
    }
  }

  ${breakpointsMedia({
    lg: css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      display: flex;
      width: 40%;
      margin-right: 4.75rem;

      border-radius: 0.5rem;

      p {
        color: #6b7280;
        text-align: left;
      }

      &:hover {
        background: #ddeafe;
        cursor: pointer;
      }

      button {
        &:hover {
          color: #000;
        }
      }
    `,
  })}
`;

const CardOptionsMaterialLeft = styled.div`
  display: flex;

  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  margin-left: 0.75rem;
  margin-right: 0.75rem;

  border-radius: 0.5rem;

  padding: 10px;

  p {
    color: #6b7280;
    text-align: left;
  }

  &:hover {
    background: #fff;
    cursor: pointer;
  }
`;

const WrapperText = styled.div`
  text-align: left;
  margin-left: 1rem;

  p:nth-child(1) {
    color: #1f2937;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  p:nth-child(2) {
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-transform: inherit;
    opacity: 1;
    font-weight: 500;
  }

  span {
    display: block;
    margin-top: 20px;
    color: #1d4ed8;
    font-weight: 400;
  }

  button {
    font-weight: 500;
  }

  button:hover {
    color: #1d4ed8;
  }
`;

const WrapperVideo = styled.div`
  display: flex;

  img {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    margin: 0px;
    width: 35rem;
    max-height: 6rem;
    border-radius: 10px;
  }
`;

export {
  BoxContent,
  CardOptions,
  WrapperText,
  WrapperVideo,
  CardOptionsMaterial,
  CardOptionsMaterialLeft,
};
