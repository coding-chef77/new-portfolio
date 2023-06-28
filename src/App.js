import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./common/theme/theme";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
import { Helmet } from "react-helmet";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>
      <NavBar />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
