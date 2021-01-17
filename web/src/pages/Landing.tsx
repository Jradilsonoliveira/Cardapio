import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/pages/landing.css';

import logoImg from '../images/Logo.svg';

function Landing() {
    return(
        <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Cardapio Digital"/>

        <main>
          <h1>Cardapio Digital: Mais proximo de voce</h1>
          <p>Compareca a um Restaurante mais proximo de sua residencia</p>
        </main>

        <div className="location">
          <strong>Cabo Frio</strong>
          <span>Rio de Janeiro</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>

        </Link>

      </div>
    </div>


    );
}

export default Landing;