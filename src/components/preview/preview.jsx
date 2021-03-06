import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    {Object.keys(cards).map((key) => (
      <ul key={key} className={styles.cards}>
        <Card key={key} card={cards[key]} />
      </ul>
    ))}
  </section>
);

export default Preview;
