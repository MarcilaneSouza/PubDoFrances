import { ThemeProvider } from "styled-components";
import CardHelloWorld from "./pages/home/CardHelloWorld";

import { GlobalStyle, temaPadrao } from "./styles";


function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <GlobalStyle />
      <CardHelloWorld />

    </ThemeProvider>
  );
}

export default App;
