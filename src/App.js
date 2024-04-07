// import { CssBaseline, ThemeProvider } from 'styled-components';
import { CssBaseline, ThemeProvider } from '@mui/material';
import GoogleFontsLoader from './component/Navbar/GoogleFontsLoader';


import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { darkTheme } from './Theme/DarkTheme';
import { Home } from './component/Home/Home';
import { Restaurant } from './component/Restaurant/Restaurant';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import { CustomerRouter } from './Routers/CustomerRouter';

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
              <GoogleFontsLoader />

        <CssBaseline />
         <Navbar />
         {/* <Home /> */}
         {/* <RestaurantDetails /> */}
         {/* <Profile /> */}
         <CustomerRouter />
         
      </ThemeProvider>
  );
}

export default App;
