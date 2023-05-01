import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const getActiveTheme = (themeMode: 'light' | 'dark') => {
  return themeMode === 'light' ? lightTheme : darkTheme;
};

export default function App({ Component, pageProps }: AppProps) {
  const [activeTheme, setActiveTheme] = useState(darkTheme);
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    const desiredTheme = selectedTheme === 'light' ? 'dark' : 'light';
    setSelectedTheme(desiredTheme);
    setActiveTheme(desiredTheme === 'light' ? lightTheme : darkTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
