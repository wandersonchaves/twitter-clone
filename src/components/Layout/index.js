import React from 'react';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';
import './styles.css';

function Layout() {
  return (
    <div className="containerLayout">
      <div className="wrapper">
        <MenuBar />
        <Main />
        <SideBar />
      </div>
    </div>
  );
}

export default Layout;
