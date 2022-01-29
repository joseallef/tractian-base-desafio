import styled, { css } from "styled-components";
import { breakpointsMedia } from "../../../../../theme/utils/breakpointsMedia";

export const WrapperSensor = styled.div`
  display: block;

  h4 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

WrapperSensor.WrapperImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
  }

  ${breakpointsMedia({
    sm: css`
      img {
        width: 500px;
        height: 400px;
      }
    `,
  })}
`;
