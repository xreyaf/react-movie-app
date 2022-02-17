import Navbar from "./components/layouts/Navbar";
import Main from "./pages/Main";
import Footer from "./components/layouts/Footer";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Chart from "./pages/Chart";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
