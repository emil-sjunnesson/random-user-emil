import React, { ReactNode } from 'react';
import styles from './List.module.scss';

export interface ContactProps {
  items: {
    title: string | ReactNode;
    value: string | number | ReactNode;
  }[];
}

const List: React.FC<ContactProps> = ({ items }) => (
  <ul className={styles.list}>
    {items.map(({ title, value }, index) => (
      <li key={index}><strong>{title}:</strong> {value}</li>
    ))}
  </ul>
);

export default List;
