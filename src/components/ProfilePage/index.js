import React from 'react';

import Feed from '../Feed';

import { LocationOn, Cake } from '../../styles/icons';
import './styles.css';

export default function index() {
  return (
    <div className="containerProfilePage">
      <div className="banner">
        <div className="avatarProfilePage"></div>
      </div>

      <div className="profileData">
        <button className="outlined">Editar Perfil</button>

        <h1>Wanderson Chaves</h1>
        <h2>@wanderson_chaves</h2>

        <p>
          Developer at <a href="https://developers.google.com/">Google</a>
        </p>

        <ul>
          <li>
            <LocationOn className="locationOn" /> Piauí, Brasil
          </li>
          <li>
            <Cake className="cake" /> Nascido(a) em 14 de junho de 1999
          </li>
        </ul>

        <div className="followAge">
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong>Seguidores
          </span>
        </div>
      </div>

      <Feed />
    </div>
  );
}
