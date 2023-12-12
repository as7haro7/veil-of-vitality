import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export const Sobre = () => {
  return (
    <Card style={{ textAlign: "center", padding: "50px" }}>
      <Card.Body>
        <h2>UNIVERSIDAD MAYOR DE SAN ANDRÉS</h2>
        <h3>FACULTAD DE CIENCIAS PURAS Y NATURALES</h3>
        <h3>CARRERA DE INFORMÁTICA</h3>

        <h4>PROYECTO INF-122D</h4>

        <Image
          src="img/logoUmsa.png"
          alt="Imagen de la Carrera de Informática"
          fluid
          style={{ marginTop: "10px" }}
        />
        <h4>TIENDA DE ARTICULOS DEPORTIVOS</h4>
        <h4>UTILIZANDO REACT Y BOOTSTRAP</h4>
        <br />
        <div
          style={{
            textAlign: "left",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "600px", // ajusta el ancho máximo según tus preferencias
          }}
        >
          <h5>ESTUDIANTES:</h5>
          <p>Poma Condori Erick Fernando</p>

          {/* <h5>DOCENTE:</h5>
          <p></p> */}

          <h5>MATERIA:</h5>
          <p>INF - 122 Paralelo D</p>
        </div>

        <p>LA PAZ - BOLIVIA</p>
        <p>2023</p>
      </Card.Body>
    </Card>
  );
};
