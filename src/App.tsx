import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layouts/Footer";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Chart from "./pages/Chart";
import MediaDetails from "./pages/MediaDetails";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/:mediaType/:id" element={<MediaDetails  />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
