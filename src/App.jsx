import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//import de estilos
import { GlobalStyle } from './styles/GlobalStyle'
//importacao da NavBar
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/combos" />
        <Route path="/drinks" />
        <Route path="/petiscos" />
        <Route path="/sobre" />
      </Routes>
    </Router>
  );
}

export default App;
