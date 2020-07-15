import React from 'react';

import { LocationOn, Cake } from '../../styles/icons';
import './styles.css';

export default function index() {
  return (
    <div className="container">
      <div className="banner">
        <div className="avatar"></div>
      </div>

      <div className="profile-data">
        <button>Editar Perfil</button>

        <h1>Wanderson Chaves</h1>
        <h2>@wanderson_chaves</h2>

        <p>
          Developer at <a href="https://developers.google.com/">Google</a>
        </p>

        <ul>
          <li>
            <LocationOn /> Piauí, Brasil
          </li>
          <li>
            <Cake /> Nascido(a) em 14 de junho de 1999
          </li>
        </ul>

        <div className="follow-age">
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong>Seguidores
          </span>
        </div>
      </div>
    </div>
  );
}
