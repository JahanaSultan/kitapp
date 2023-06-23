import { ThemeProvider } from "@emotion/react";
import Home from "./pages/Home";
import { createTheme , colors} from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#00001d',
      },
      secondary: {
        main: colors.orange[500]
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
