/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import { PageContext } from "../../Hooks";

const WrapperModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: stretch;
  margin: auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  margin: auto;
  transition: 0.3s;
  z-index: 200;
  top: 0;
  left: 0;
  color: white;
  display: flex;
  justify-content: center;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }

    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

const Scroll = createGlobalStyle`
  html, body {
    overflow-y: hidden;
  }
`;

export function Modal({ isOpen, onClose, children }) {
  const { isModalOpen } = useContext(PageContext);
  return (
    <WrapperModal
      isOpen={isOpen}
      onClick={(e) => {
        const isSafeArea = e.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isModalOpen && <Scroll />}
      {children({
        "data-modal-safe-area": "true",
      })}
    </WrapperModal>
  );
}
