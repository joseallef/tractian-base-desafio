/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

const BoxContainer = styled.div`
  width: 100%;
  position: relative;
 
  ${breakpointsMedia({
    xl: css`
    `,
  })}
`;

const Chat = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 54px;
  height: 54px;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer; 

  img {
    width: 32px!important;
    height: 26px!important;
  }

  background-color: #1972F5 !important;

  ${breakpointsMedia({
    lg: css`
      width: 60px;
      height: 60px;
      bottom: 20px;
      right: 20px;

    `,
  })}
`;

export default function Box({ children }) {
  return (
    <BoxContainer>
      {children}
      <Chat>      
        <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMwIiB3aWR0aD0iMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIGhlaWdodD0iMTM4LjclIiB3aWR0aD0iMTMxLjQlIiB4PSItMTUuNyUiIHk9Ii0xNS4xJSI+PGZlTW9ycGhvbG9neSBpbj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJkaWxhdGUiIHJhZGl1cz0iMSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRPdXRlcjEiLz48ZmVPZmZzZXQgZHk9IjEiIGluPSJzaGFkb3dTcHJlYWRPdXRlcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIgc3RkRGV2aWF0aW9uPSIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93Qmx1ck91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA3IDAiLz48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTE0LjIzIDIwLjQ2bC05LjY1IDEuMUwzIDUuMTIgMzAuMDcgMmwxLjU4IDE2LjQ2LTkuMzcgMS4wNy0zLjUgNS43Mi00LjU1LTQuOHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiB4bGluazpocmVmPSIjYiIvPjwvZz48L3N2Zz4=" alt="" />
      </Chat>
    </BoxContainer>
  );
}
