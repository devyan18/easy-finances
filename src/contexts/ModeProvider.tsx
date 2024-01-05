import React, { useState, useContext, createContext } from "react";

const ModeContext = createContext({
  advancedMode: false,
  toggleAdvancedMode: () => {},
});

type Props = {
  children: React.ReactNode;
};

const ModeProvider = (props: Props) => {
  const [advancedMode, setAdvancedMode] = useState(false);

  const toggleAdvancedMode = () => {
    setAdvancedMode(!advancedMode);
  };

  return (
    <ModeContext.Provider value={{ advancedMode, toggleAdvancedMode }}>
      {props.children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
export default ModeProvider;
