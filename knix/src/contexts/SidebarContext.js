import React, { createContext, useState } from 'react';

export const SideBarContext = createContext();

/**
 * Open and close the Sidebar for CART
 */
const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return <SideBarContext.Provider value={{ isOpen, toggleSidebar }}>{ children }</SideBarContext.Provider>;
};

export default SideBarProvider;
