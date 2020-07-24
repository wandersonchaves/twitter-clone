import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import { Search } from '../../styles/icons';
import './styles.css';

export default function SideBar() {
  return (
    <div className="containerSideBar">
      <div className="searchWrapperSideBar">
        <input className="searchInputSideBar" placeholder="Buscar no Twitter" />
        <Search className="searchIconSideBar" />
      </div>

      <div className="bodySideBar">
        <div className="listSideBar">
          <FollowSuggestion />
        </div>

        <div className="listSideBar">
          <List />
        </div>
      </div>
    </div>
  );
}
