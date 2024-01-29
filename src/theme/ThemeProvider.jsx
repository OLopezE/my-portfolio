import { useState, createContext, useEffect  } from "react";
import palette from "./palette/palette";
import Switch from "../components/switch/Switch";
import { SwitchContainer } from "./Theme.style";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState('light');
  const myPalette = palette[themeColor];

  const handleTheme = () => setThemeColor(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));


  useEffect(() => {
    console.log(myPalette);
  }, [themeColor]);

  return (
    <ThemeContext.Provider value={{themeColor, myPalette}}>
      <SwitchContainer>
        <Switch label="Dark mode" handleClick={() => handleTheme(themeColor)} />
      </SwitchContainer>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext };