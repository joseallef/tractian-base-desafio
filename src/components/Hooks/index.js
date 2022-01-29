/* eslint-disable react/prop-types */
import React, { useState, createContext } from "react";

export const PageContext = createContext();

export function ContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenScheduleDemo, setIsOpenScheduleDemo] = useState(false);
  return (
    <PageContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isOpenMenu,
        setIsOpenMenu,
        isOpenScheduleDemo,
        setIsOpenScheduleDemo,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
