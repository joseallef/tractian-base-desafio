import React from 'react';
import { WrapperCard } from './styles';

export default function Card({ children }) {
  return (
    <WrapperCard>
      {children}
    </WrapperCard>
  );
}
