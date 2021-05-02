import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { useHistory } from 'react-router-dom';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
