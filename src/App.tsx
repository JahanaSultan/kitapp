import { ThemeProvider } from "@emotion/react";
import Home from "./pages/Home";
import { createTheme } from "@mui/material";
import {Routes, Route} from "react-router-dom";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00001d",
      dark: "#fc6a03",
      light: "#c8c6c4",
      contrastText: "#ffffff26"
    },
    text:{
      primary: "#ffff",
      secondary: "#ffffff4b",
    },
    secondary:{
      main: "#0a0a2a",
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
