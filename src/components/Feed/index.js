import React from 'react';

import Tweet from '../Tweet';
import './styles.css';

export default function index() {
  return (
    <div className="containerFeed">
      <div className="tab">Tweets</div>
      <div className="tweets">
        <Tweet />
      </div>
    </div>
  );
}
