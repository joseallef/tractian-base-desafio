/* eslint-disable func-names */
import styled, { css } from "styled-components";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";
import propToStyle from "../../../theme/utils/propToStyle";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  ${breakpointsMedia({
    xs: css`
      max-width: initial;
      flex-wrap: wrap;
    `,
    sm: css``,
    md: css`
      padding-right: 16px;
      padding-left: 16px;
    `,
    lg: css`
      width: 100%;
      display: flex;
    `,
  })}

  ${propToStyle("marginTop")}
  ${propToStyle("marginLeft")}
  ${propToStyle("marginRight")}
  ${propToStyle("paddingRight")}
  ${propToStyle("paddingLeft")}
  ${propToStyle("paddingBottom")}
  ${propToStyle("display")}
  ${propToStyle("flex")}
  ${propToStyle("alignItems")}
`;

const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${function ({ value }) {
    if (typeof value === "number") {
      return css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    }

    return breakpointsMedia({
      xs: value?.xs
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.xs) / 12}%;
            max-width: ${(100 * value.xs) / 12}%;
            ${value.xs}
          `
        : "",
      sm: value?.sm
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.sm) / 12}%;
            max-width: ${(100 * value.sm) / 12}%;
            ${value.sm}
          `
        : "",
      md: value?.md
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.md) / 12}%;
            max-width: ${(100 * value.md) / 12}%;
            ${value.md}
          `
        : "",

      lg: value?.lg
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            padding-right: 16px;
            padding-left: 16px;
            flex-basis: ${(100 * value.lg) / 12}%;
            max-width: ${(100 * value.lg) / 12}%;
            ${value.lg}
          `
        : "",

      xl: value?.xl
        ? css`
            flex-shrink: 0;
            flex-basis: ${(100 * value.xl) / 12}%;
            max-width: ${(100 * value.xl) / 12}%;
            ${value.xl}
          `
        : "",
    });
  }}

  ${function ({ offset }) {
    if (typeof offset === "number") {
      return css`
        margin-left: ${(100 * offset) / 12}%;
      `;
    }
    return breakpointsMedia({
      xs: offset?.xs
        ? css`
            margin-left: ${(100 * offset.xs) / 12}%;
          `
        : "",
      sm: offset?.sm
        ? css`
            margin-left: ${(100 * offset.sm) / 12}%;
          `
        : "",
      md: offset?.md
        ? css`
            margin-left: ${(100 * offset.md) / 12}%;
          `
        : "",

      lg: offset?.lg
        ? css`
            margin-left: ${(100 * offset.lg) / 12}%;
            ${propToStyle("paddingBottom")}
            ${propToStyle("paddingRight")}
          `
        : "",

      xl: offset?.xl
        ? css`
            margin-left: ${(100 * offset.xl) / 12}%;
          `
        : "",
    });
  }}

    ${propToStyle("display")}
    ${propToStyle("order")}
    ${propToStyle("alignItems")}
    ${propToStyle("justifyContent")}
    ${propToStyle("flexDirection")}
    ${propToStyle("marginTop")}
    ${propToStyle("marginLeft")}
    ${propToStyle("marginRight")}
    ${propToStyle("backgroundColor")}
    
    ${propToStyle("paddingLeft")}
   
    ${propToStyle("flexGrow")}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${propToStyle("display")}
  ${propToStyle("flex")}
  ${propToStyle("marginLeft")}
  ${propToStyle("marginRight")}
  ${propToStyle("justifyContent")}
  ${propToStyle("marginBottom")}
  ${propToStyle("flexDirection")}
  ${propToStyle("borderBottom")}
  ${propToStyle("textAlign")}
  ${propToStyle("paddingBottom")}
  ${propToStyle("padding")}

  ${breakpointsMedia({
    xs: css`
      display: block;
    `,
    lg: css`
      ${propToStyle("marginTop")}
      display: flex;
      width: 100%;
    `,
  })}
`;

export const Grid = {
  Container,
  Row,
  Col,
};
