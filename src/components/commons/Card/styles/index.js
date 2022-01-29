import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const WrapperCard = styled.div`
  display: block;
  width: 120px;
  height: 155px;
  font-size: 12px;
  margin: 12px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0/0.1),0 1px 2px -1px rgb(0 0 0/0.1);
  border: 1px solid;
  border-color: #e5e7eb;
  padding: 16px;

  img {  
    width: 60px;
    height: 60px;  
  }

  label,  p {
      font-size: .9rem;
      line-height: 1rem;
      font-weight: 400;
      &:hover {
        cursor: pointer;
      }
  }

  &:hover {
    background: #ddeafe;
    cursor: pointer;
  }

  ${breakpointsMedia({
    md: css`
      width: 11rem;
      height: 175px;
      padding: 25px;
      margin: 15px;
    `,
  })}
`;

export { WrapperCard };
