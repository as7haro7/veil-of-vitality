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
import { Sobre } from "./pages/Sobre";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import SideMenu from "./components/SideMenu";
import { Carrito } from "./pages/Carrito";
import { Comprar } from "./pages/Comprar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <NavbarRes />
          <Routes>
            <Route
              index
              element={
                <>
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>Veil of Vitality</title>
                  </Helmet>
                  <Landing />
                </>
              }
            />
            <Route
              path="ropa"
              element={
                <>
                  <Helmet>
                    <title>Veil of Vitality | Ropa</title>
                  </Helmet>
                  {/* <SideMenu /> */}
                  <RopaDeportiva />
                </>
              }
            />
            <Route
              path="calzado"
              element={
                <>
                  <Helmet>
                    <title>Veil of Vitality | Calzado</title>
                  </Helmet>
                  <Calzado />
                </>
              }
            />
            <Route
              path="equipamiento"
              element={
                <>
                  <Helmet>
                    <title>Veil of Vitality | Equipamiento</title>
                  </Helmet>
                  <Equipamiento />
                </>
              }
            />
            <Route
              path="accesorios"
              element={
                <>
                  <Helmet>
                    <title>Veil of Vitality | Accesorios</title>
                  </Helmet>
                  <Accesorios />
                </>
              }
            />
            <Route
              path="nike"
              element={
                <>
                  <Helmet>
                    <title>Veil of Vitality | Nike</title>
                  </Helmet>
                  <Nike/>
                </>
              }
            />
            <Route
              path="adidas"
              element={
                <>
                  <Helmet>
                    <title>Veil of Vitality | Adidas</title>
                  </Helmet>
                  <Adidas />
                  
                </>
              }
            />
            <Route
              path="sobre"
              element={
                <>
                  <Helmet>
                    <title>Veil of Vitality | Otros</title>
                  </Helmet>
                  <Sobre />
                </>
              }
            />
              <Route
              path="carrito"
              element={
                <>
                  <Helmet>
                    <title>Veil of Vitality | carrito</title>
                  </Helmet>
                  <Carrito />
                </>
              }
            />
               <Route
              path="comprar"
              element={
                <>
                  <Helmet>
                    <title>Veil of Vitality | comprar</title>
                  </Helmet>
                  <Comprar />
                </>
              }
            />
            
          </Routes>
         
          <Footer />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
