import React from 'react';
import { IoVideocamSharp } from "react-icons/io5";
import { GiTempleGate } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";

const SideMenu = ({ videoSectionRef, cardsSectionRef, contactSectionRef }) => {
  const scrollToVideoSection = () => {
    if (videoSectionRef && videoSectionRef.current) {
      videoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCardsSection = () => {
    if (cardsSectionRef && cardsSectionRef.current) {
      cardsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContactSection = () => {
    if (contactSectionRef && contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className="bg-white text-dark p-3" style={{ width: '220px', minHeight: '50vh' }}>
        <ul className="list-unstyled">
          <li className="mb-2" style={{ cursor: 'pointer' }}> 
            <p className="text-dark" onClick={scrollToVideoSection}><IoVideocamSharp className="me-2" />
              Video
            </p>
          </li>
          <li className="mb-2" style={{ cursor: 'pointer' }}> 
            <p className="text-dark" onClick={scrollToCardsSection}><GiTempleGate  className="me-2" />
              Producto
            </p>
          </li>
          <li style={{ cursor: 'pointer' }}> 
            <p className="text-dark" onClick={scrollToContactSection}><IoMdContact  className="me-2" /> 
             Contacto
            </p>
          </li>
        </ul>
      </div>
     
    </div>
  );
  
};

export default SideMenu;
