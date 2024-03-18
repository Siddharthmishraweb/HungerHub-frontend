// import { CssBaseline, ThemeProvider } from 'styled-components';
import { CssBaseline, ThemeProvider } from '@mui/material';
import GoogleFontsLoader from './component/Navbar/GoogleFontsLoader';


import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { darkTheme } from './Theme/DarkTheme';
import { Home } from './component/Home/Home';

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
              <GoogleFontsLoader />

        <CssBaseline />
         <Navbar />
         <Home />
      </ThemeProvider>
  );
}

export default App;
