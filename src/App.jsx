import { ThemeProvider } from "styled-components";
import CardHelloWorld from "./pages/home/CardHelloWorld";
import Cards from './pages/home/Cards'
import { GlobalStyle, temaPadrao } from "./styles";


function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <GlobalStyle />
      <CardHelloWorld />
      <Cards />
    </ThemeProvider>
  );
}

export default App;
