import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, temaPadrao } from "./styles";
//importacao da NavBar
import Header from "./components/header/Header";
import Eventos from "./pages/eventos/Eventos";
import Home from "./pages/Home/SectionHome";
import Contatos from "./pages/contatos/Contatos";
import Rodape from "./components/rodape/Rodape";

function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/eventos"
            title={"PUB | Eventos"}
            element={<Eventos />}
          />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/sobre" />
        </Routes>
        <Rodape />
      </Router>
    </ThemeProvider>
  );
}

export default App;
