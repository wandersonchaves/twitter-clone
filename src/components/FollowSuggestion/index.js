import React from 'react';

import './styles.css';

export default function index() {
  const followSuggestions = [
    { name: 'Wanderson Chaves', nickname: '@wchaves' },
    { name: 'Paulo Chaves', nickname: '@pchaves' },
    { name: 'Hellen Chaves', nickname: '@hchaves' },
  ];

  return (
    <div className="containerFollowSuggestion">
      <div className="itemFollowSuggestion">
        <p className="titleFollowSuggestion">Talvez você curta</p>
      </div>

      {followSuggestions.map((element) => (
        <>
          <div className="itemFollowSuggestion">
            <div className="avatarFollowSuggestion"></div>

            <div className="infoFollowSuggestion">
              <strong>{element.name}</strong>
              <span>{element.nickname}</span>
            </div>

            <button className="outlinedFollowButton">Follow</button>
          </div>
        </>
      ))}
    </div>
  );
}
