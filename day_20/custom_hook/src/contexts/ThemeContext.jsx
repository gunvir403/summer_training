import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

export const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();

  return <button className='theme-button' onClick={toggleTheme}>Toggle Theme</button>;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'dark' : 'light'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
