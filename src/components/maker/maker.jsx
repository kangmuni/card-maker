import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { useHistory } from 'react-router-dom';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Muni1',
      company: 'Watcha',
      theme: 'light',
      title: 'Software Engineer',
      email: 'muni@gmail.com',
      message: 'go for it',
      fileName: 'muni',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Muni2',
      company: 'Netflix',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'muni@gmail.com',
      message: 'go for it',
      fileName: 'muni',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'Muni3',
      company: 'carrot-market',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'muni@gmail.com',
      message: 'go for it',
      fileName: 'muni',
      fileURL: null,
    },
  });
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (!user) {
          history.push('/');
        }
      });
  });

  const createOrUpdateCard = (card) => {
    // const updated = { ...cards };
    // updated[card.id] = card;
    // setCards(updated);
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
