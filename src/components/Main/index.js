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
    <div className="container">
      <div className="header">
        <button className="backIcon">
          <ArrowLeft />
        </button>

        <div className="profile-info">
          <strong>Wanderson Chaves</strong>
          <span>362 Tweets</span>
        </div>
      </div>

      <ProfilePage />

      <div className="bottom-menu">
        <Home />
        <Search />
        <Notifications />
        <Chat />
      </div>
    </div>
  );
}
