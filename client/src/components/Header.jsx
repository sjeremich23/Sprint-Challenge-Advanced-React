import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import styled from "styled-components";

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggle = () => {
    setDarkMode(!darkMode);
  };

  return (
      <>
        <Center>
        
          <h1>Women's World Cup Players Google Search Results</h1>
        
        
        <div className="dark-mode__toggle">
          <div
            onClick={toggle}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
        </Center>
      </>
    
  );
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`; 

export default Header;