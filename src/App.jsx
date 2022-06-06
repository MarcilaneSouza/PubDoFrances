import { ThemeProvider } from "styled-components";
import CardHelloWorld from "./pages/home/CardHelloWorld";
import CardsMenu from './pages/home/TelaFinal.jsx'
import { GlobalStyle, temaPadrao } from "./styles";


function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <GlobalStyle />
      <CardHelloWorld />
      <CardsMenu />
    </ThemeProvider>
  );
}

export default App;
