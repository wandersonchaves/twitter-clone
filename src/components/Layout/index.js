import React from 'react';

// import MenuBar from '../MenuBar';
import Main from '../Main';
// import SideBar from '../SideBar';

function Layout() {
  return (
    <div className="container">
      <div className="wrapper">
        {/** <MenuBar />*/}
        <Main />
        {/** <SideBar />*/}
      </div>
    </div>
  );
}

export default Layout;
