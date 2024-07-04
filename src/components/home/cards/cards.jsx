import React from 'react';

const Cards = () => {
  const cards = [
    {
      id: 1,
      imgSrc:
        'https://www.codingnepalweb.com/demos/create-responsive-cards-in-html-css/images/developer.jpg',
      title: 'Developer',
      description: 'A "developer" codes software and websites.',
    },
    {
      id: 2,
      imgSrc:
        'https://www.codingnepalweb.com/demos/create-responsive-cards-in-html-css/images/designer.jpg',
      title: 'Designer',
      description: 'A "designer" is a design expert.',
    },
    {
      id: 3,
      imgSrc:
        'https://www.codingnepalweb.com/demos/create-responsive-cards-in-html-css/images/editor.jpg',
      title: 'Editor',
      description: 'An "editor" ensures content quality and accuracy.',
    },
  ];

  return (
    <>
      <div className="card-list">
        {cards.map((card) => (
          <div className="card-item" key={card.id}>
            <img src={card.imgSrc} />
            <span className="developer">{card.title}</span>
            <div className="description">{card.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
