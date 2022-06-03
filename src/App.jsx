import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyle";
//importacao da NavBar
import { ThemeProvider } from "styled-components";
import { temaPadrao } from "./styles";
import Home from "./pages/Home/SectionHome";
import Header from "./components/header/Header";

function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/combos" />
          <Route path="/drinks" />
          <Route path="/petiscos" />
          <Route path="/sobre" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
