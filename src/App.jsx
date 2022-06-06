import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, temaPadrao } from "./styles";
import Header from "./components/header/Header";
import Eventos from "./pages/eventos/Eventos";
import Home from "./pages/Home/SectionHome";
import Contatos from "./pages/contatos/Contatos";
import Rodape from "./components/rodape/Rodape";
import Sobre from "./pages/Sobre/Sobre";

function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Rodape />
      </Router>
    </ThemeProvider>
  );
}

export default App;
