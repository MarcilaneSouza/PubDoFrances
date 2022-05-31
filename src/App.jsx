import { ThemeProvider } from "styled-components";
import ComponentDraggable from "./components/draggable/ComponentDraggable";
import CardHelloWorld from "./pages/home/CardHelloWorld";
import { GlobalStyle, temaPadrao } from "./styles";

function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <GlobalStyle />
      <CardHelloWorld />
      <ComponentDraggable />
    </ThemeProvider>
  );
}

export default App;
