import React, { useContext, useState } from "react";

const ToggleContext = React.createContext();
const ToggleUpdateContext = React.createContext();

export function ToggleProvider({ children }) {
  const [toggletab1, settoggletab1] = useState(false);

  const toggleTab1 = () => {
    settoggletab1(!toggletab1);
  };

  return (
    <ToggleContext.Provider value={toggletab1}>
      <ToggleUpdateContext.Provider value={toggleTab1}>
        {children}
      </ToggleUpdateContext.Provider>
    </ToggleContext.Provider>
  );
}
