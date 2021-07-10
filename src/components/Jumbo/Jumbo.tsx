import React from 'react';
import styles from './Jumbo.module.scss';

export interface JumboProps {
  onBtnClick: () => void;
}

const Jumbo: React.FC<JumboProps> = ({ onBtnClick }) => (
  <header className={styles.jumbo}>
    <h1>Random user generator</h1>
    <p>Press button below to generate a random user</p>
    <button onClick={onBtnClick}>Generate</button>
  </header>
);

export default Jumbo;
