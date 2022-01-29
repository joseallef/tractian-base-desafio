import styled, { css } from "styled-components";
import { breakpointsMedia } from "../../../../theme/utils/breakpointsMedia";

 export const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 10;
  background: linear-gradient(to left, #2563eb, #1e3a8a);

  ${breakpointsMedia({
    md: css`
    
    `,
  })}

`;
HeaderWrapper.Container = styled.div`
  width: 100%;
  padding: 1.5rem;
  padding-top: 8rem;
  margin-right: auto;
  margin-left: auto;
  margin: auto;

  ${breakpointsMedia({
    md: css`
    font-size: 1.6rem;
      max-width: 768px;
      padding-left: 24px;
      padding-right: 24px;
    `,
    lg: css`
      max-width: 1280px;
      margin: auto;
      padding-left: 48px;
      padding-right: 48px;
    `,
    xl: css`
      padding-left: 0px;
      padding-right: 0px;
      max-width: 1200px;
    `,
  })}
`;
HeaderWrapper.Content = styled.div`
  display: block;
  width: 100%;  

  h1 {
    display: block;
    width: 100%;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    flex-direction: row;
    color: #FFF;
  }

  h4 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 300;
    color: #FFF;
    line-height: initial;
  }
  p {
    font-weight: 300;
    color: #FFF;
    margin-bottom: 0;
  
    a {
      font-weight: 600;
      color: #FFF;
      text-decoration: none;
    }
  }

  ${breakpointsMedia({
    md: css`

      h1 {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
      h4 {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
      p {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
    `,
    lg: css`
      max-width: 65%;
      h1 {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }

      h4 {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
    `,
  })}
`;

HeaderWrapper.Stars = styled.div`
  display: flex;
  width: 66%;

  filter: brightness(1.5);
  svg {
    margin-right: 1rem;
  }

  ${breakpointsMedia({
    sm: css`
      width: 33%;
    `,
    md: css`
      font-size: 2.5rem;
      line-height: 2.5rem;

      svg {
      }
    `,
    lg: css`
    `,
  })}
`;

HeaderWrapper.Button = styled.div`
  display: flex;
  font-size: 1rem;
  button {
    &:hover {
      color: #FFF;
      background: #61df61;
    }
  }

`;

HeaderWrapper.Svg = styled.div`
  width: 100%;
  img {
    margin-bottom: -5px;

  }
`;

