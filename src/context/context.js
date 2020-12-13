import {createContext} from 'react';
export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
      type:'primary'
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
      type:'ghost'
    },
};
export const ThemeContext = createContext(themes.dark);