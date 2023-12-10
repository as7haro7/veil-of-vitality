import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavbarRes from "./components/Header";
import { Landing } from "./pages/Landing";
import RopaDeportiva from "./pages/RopaDeportiva";
import Calzado from "./pages/Calzado";
import { Equipamiento } from "./pages/Equipamiento";
import { Accesorios } from "./pages/Accesorios";
import { Nike } from "./pages/Nike";
import { Adidas } from "./pages/Adidas";
import { OtrasMarcas } from "./pages/OtrasMarcas";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <NavbarRes />
          <Routes>
            <Route index element={<Landing />} />
            <Route path="ropa" element={<RopaDeportiva />} />
            <Route path="calzado" element={<Calzado />} />
            <Route path="equipamiento" element={<Equipamiento/>} />
            <Route path="accesorios" element={<Accesorios />} />
            <Route path="nike" element={<Nike />} />
            <Route path="adidas" element={<Adidas />} />
            <Route path="otras-marcas" element={<OtrasMarcas />} />
          </Routes>
          <Footer/>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
