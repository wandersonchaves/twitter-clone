import React from 'react';

import './styles.css';

export default function index() {
  const lists = [
    { id: 1, title: 'Test Title', subtitle: 'Elements Tests' },
    { id: 2, title: 'Test Example', subtitle: 'Elements Example' },
    { id: 3, title: 'Example Title', subtitle: 'Example Tests' },
  ];

  return (
    <div className="containerList">
      <div className="itemList">
        <span className="title">Talvez você curta</span>
      </div>

      {lists.map((element) => (
        <div className="itemList" key={element.id}>
          <strong>{element.title}</strong>
          <span>{element.subtitle}</span>
        </div>
      ))}
    </div>
  );
}
