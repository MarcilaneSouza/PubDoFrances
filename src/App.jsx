import { ThemeProvider } from "styled-components";
import ComponentDraggable from "./components/draggable/ComponentDraggable";
import Teste from "./components/teste/Teste";
import CardHelloWorld from "./pages/home/CardHelloWorld";
import { GlobalStyle, temaPadrao } from "./styles";

function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <GlobalStyle />
      <CardHelloWorld />
      <ComponentDraggable
        component={{ open: <Teste />, close: "clique duas vezes aqui" }}
      />
    </ThemeProvider>
  );
}

export default App;
