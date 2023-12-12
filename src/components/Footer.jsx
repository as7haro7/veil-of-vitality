import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
   <div className="container-fluid text-center text-md-left">
    <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Sobre Nosotros</h5>
            <p>Somos una tienda de deportes apasionada por ofrecer productos de alta calidad para mejorar tu rendimiento y disfrute en tus actividades deportivas.</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0"/>

        <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Categorías</h5>
            <ul className="list-unstyled">
                <li><a href="#!">Fútbol</a></li>
                <li><a href="#!">Baloncesto</a></li>
                <li><a href="#!">Running</a></li>
                <li><a href="#!">Fitness</a></li>
            </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Contacto</h5>
            <ul className="list-unstyled">
                <li><a href="#!">Soporte</a></li>
                <li><a href="#!">Preguntas Frecuentes</a></li>
                <li><a href="#!">Envíos y Devoluciones</a></li>
                <li><a href="#!">Términos y Condiciones</a></li>
            </ul>
        </div>
    </div>
</div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a href="https://github.com/as7haro7">EFPC</a>
    </div>

</footer>

export default Footer
