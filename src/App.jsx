import { ThemeProvider } from "styled-components";
import CardHelloWorld from "./pages/home/CardHelloWorld";
import TelaFianal from './pages/home/TelaFinal'
import { GlobalStyle, temaPadrao } from "./styles";


function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <GlobalStyle />
      <CardHelloWorld />
      <TelaFianal />
    </ThemeProvider>
  );
}

export default App;
