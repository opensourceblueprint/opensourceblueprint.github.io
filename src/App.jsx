import './App.css'
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./style/theme.js";
import HomePage from "./pages/HomePage.jsx";

function App() {

  return (
    <>
        <ThemeProvider theme={theme}>
            <HomePage/>
        </ThemeProvider>
    </>
  )
}

export default App
