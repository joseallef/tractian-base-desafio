import styled, { css } from "styled-components";
import { breakpointsMedia } from "../../../../theme/utils/breakpointsMedia";

const WrapperContent = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 90%;
  background: #fff;

  color: black;
  margin: 50px;
  margin: auto;
  border-radius: 0.5rem;
  margin-top: 50px;
  margin-bottom: 20px;
  overflow-y: auto;

  ${breakpointsMedia({
    md: css`
      max-width: 48rem;
    `,
  })}
`;

const Content = styled.section`
  display: block;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin: auto;

  h2 {
    display: flex;
    width: 100%;
    font-weight: 600;
    text-align: center;
    align-items: center;
    justify-content: center;

    font-size: inherit;
    font-weight: inherit;
  }

  h3 {
    display: block;
    width: 100%;
    margin: auto;

    text-align: center;
    max-width: 36rem;
    margin-top: 1.25rem;
    font-size: inherit;
    font-weight: inherit;
  }

  label {
    display: flex;
    text-align: left;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  ${breakpointsMedia({
    md: css`
      h2 {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
    `,
    lg: css`
      display: flex;
    `,
    xl: css`
      max-width: 900px;
      padding: 50px 0 40px 0;
      h3 {
        margin-top: 1.5rem;
      }
    `,
  })}
`;

const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 17px;
  border: 0.5px solid #ddd;
  font-size: 14px;
  margin-bottom: 0;
  background: #fff;

  &:focus {
    outline: none;
  }
  ${breakpointsMedia({
    md: css`
      font-size: 17px;
    `,
  })}
`;

const WrapperLabel = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 0.875rem;
  line-height: 1.25rem;

  input {
    width: 30px;
  }
`;

const ButtonClose = styled.div`
  display: block;
  width: 30px;
  float: right;
  cursor: pointer;
  margin: 10px;
  text-align: right;
  text-align: center;
  padding: 0;

  svg {
    width: 20px;

    &:hover {
      cursor: pointer;
    }
  }

  ${breakpointsMedia({
    lg: css``,
  })}
`;

const ButtonSend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.25rem;

  button {
    width: 90%;
  }
`;

const WrapperImg = styled.div`
  display: flex;
  margin-top: 45px;
  img {
    width: 100%;
  }

  ${breakpointsMedia({
    lg: css`
      margin-top: 0px;
      img {
        width: 85%;
      }
    `,
  })}
`;

const ImageMobile = styled.div`
  display: flex;
  ${breakpointsMedia({
    lg: css`
      display: none;
    `,
  })}
`;

const ImageDesc = styled.div`
  display: none;
  ${breakpointsMedia({
    lg: css`
      display: block;
    `,
  })}
`;

const WrapperForm = styled.div`
  margin: 46px 0;

  ${breakpointsMedia({
    lg: css`
      display: block;
      width: 100%;

      h2 {
        font-size: 1.25rem;
        line-height: 1.5rem;
        font-weight: 600;
        font-size: inherit;
      }
    `,
  })}
`;

export {
  WrapperContent,
  Content,
  ButtonClose,
  WrapperImg,
  Input,
  WrapperLabel,
  ButtonSend,
  ImageMobile,
  ImageDesc,
  WrapperForm,
};
