import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
   const [theme, setTheme] = React.useState('dark');

   const rawSetTheme = rawTheme => {
      const root = window.document.documentElement;
      const isDark = rawTheme === 'dark';

      root.classList.remove(isDark ? 'light' : 'dark');
      root.classList.add(rawTheme);

      localStorage.setItem('color-theme', rawTheme);
   };

   if (initialTheme) {
      rawSetTheme(initialTheme);
   }

   React.useEffect(() => {
      rawSetTheme(theme);
   }, [theme]);

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};
