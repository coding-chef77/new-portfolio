import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./common/theme/theme";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
