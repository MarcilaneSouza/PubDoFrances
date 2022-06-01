import { ThemeProvider } from "styled-components";
import CardHelloWorld from "./pages/home/CardHelloWorld";
import Contatocards from "./pages/home/contatocards";
import { GlobalStyle, temaPadrao } from "./styles";


function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <GlobalStyle />
      <CardHelloWorld />
      <Contatocards/>
    </ThemeProvider>
  );
}

export default App;
