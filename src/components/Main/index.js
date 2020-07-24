import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Chat,
} from '../../styles/icons';
import './styles.css';

export default function Main() {
  return (
    <div className="containerMain">
      <div className="headerMain">
        <button>
          <ArrowLeft className="arrowLeft" />
        </button>

        <div className="profileInfo">
          <strong>Wanderson Chaves</strong>
          <span>450 Tweets</span>
        </div>
      </div>

      <ProfilePage />

      <div className="bottomMenu">
        <Home className="homeMain active" />
        <Search className="searchMain" />
        <Notifications className="notificationsMain" />
        <Chat className="chatMain" />
      </div>
    </div>
  );
}
