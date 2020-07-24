import React from 'react';

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  ReplySharp,
  Twitter,
} from '../../styles/icons';
import './styles.css';

export default function MenuBar() {
  return (
    <div className="containerMenuBar">
      <div className="topSide">
        <Twitter className="twitterLogo" />

        <button className="menuButton">
          <Home className="homeMenuBar" />
          <span>Página Inicial</span>
        </button>

        <button className="menuButton">
          <Notifications className="notificationsMenuBar" />
          <span>Notificações</span>
        </button>

        <button className="menuButton">
          <Email className="emailMenuBar" />
          <span>Mensagens</span>
        </button>

        <button className="menuButton">
          <FavoriteBorder className="favoriteBorderMenuBar" />
          <span>Favoritados</span>
        </button>

        <button className="menuButton active">
          <Person className="personMenuBar" />
          <span>Perfil</span>
        </button>

        <button className="menuButton normal">
          <span>Tweetar</span>
        </button>
      </div>

      <div className="botSide">
        <div className="avatarMenuBar"></div>

        <div className="profileDataMenuBar">
          <strong>Wanderson Chaves</strong>
          <span>@wchaves</span>
        </div>

        <ExitToApp className="exitToApp" />
      </div>
    </div>
  );
}
