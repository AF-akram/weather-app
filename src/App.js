import './App.css';
import MyInput from './MyInput';
import MyCard from './MyCard';
import { CityProvider } from './CityContext';
// materail ui 
import Container from '@mui/material/Container';
import { createTheme,ThemeProvider } from '@mui/material/styles';
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "rubik"
    }
  })
  return (
    <CityProvider>
    <ThemeProvider theme={theme}>
    <Container  style={{ height: "100vh" }} maxWidth="lg">
    <div style={{
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
        flexDirection: "column",
      }}>
        <div style={{
          padding: "40px",
          background: "#474f97",
          borderRadius:"20px"
        }}>
        <MyInput />
          <MyCard />
        </div>
      </div>
      </Container>
      </ThemeProvider>
    </CityProvider>
    
  );
}

export default App;
