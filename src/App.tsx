import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Navbar />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </>
  )
    ;
}

export default App;
