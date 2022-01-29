import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

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
  margin-top: 20px;
  margin-bottom: 20px;
  overflow-y: auto;
  

  ${breakpointsMedia({
    md: css`
      width: 95%;
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
    color: #1e40af;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    
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


  ${breakpointsMedia({
    md: css`
      h2 {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
    
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

const ButtonClose = styled.div`
  display: block;
  width: 30px;
  float: right;
  cursor: pointer;
  margin: 10px;
  margin-bottom: 15px;
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
    lg: css`
    `,
  })}
`;


const WrapperGroupCard = styled.div`
  padding-top: 2rem;
`;

const WrapperCards = styled.div`

  p {
    font-weight: 600;
    font-size: .875rem;
    line-height: 1.25rem;
    text-align: center;
    padding-bottom: 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export { WrapperContent, Content, ButtonClose,
  WrapperGroupCard, WrapperCards, Cards };