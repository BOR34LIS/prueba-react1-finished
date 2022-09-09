import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import MiApi from './components/MiApi';
import './MiApi.css'

function App() {
  return (
    <>
      <Navbar id='Navbar-custom' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
              src="https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/bltd26bd771774314af/626b07662bec9b34ea68a177/falabella-com-desktop.svg"
              width="187"
              height="70"
              className="d-inline-block align-top"
              alt="cross-logo"
            />
        </Navbar.Brand>        
        <Navbar.Brand id='Navbar-text'>
          Buscador de Productos Falabella
        </Navbar.Brand>
      </Container>
    </Navbar>
    <MiApi/>
    <footer>
      Encuentra todo en un solo lugar.
      Falabella.com
    </footer>
    </>
  );
}

export default App;
