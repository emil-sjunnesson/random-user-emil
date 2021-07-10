import React from 'react';
import List from '../List/List';
import styles from './Profile.module.scss';

export interface ContactProps {
  email: string;
  cell: string;
  phone: string;
  registrationDate: string;
}

const Contact: React.FC<ContactProps> = ({ email,  cell, phone, registrationDate }) => (
  <div className={styles.contact}>
    <List
      items={[
        { title: 'Email', value: <a href={`mailto:${email}`}>{email}</a> },
        { title: 'Cell', value: <a href={`tel:${cell}`}>{cell}</a> },
        { title: 'Phone', value: <a href={`tel:${phone}`}>{phone}</a> },
        { title: 'Registration date', value: new Date(registrationDate).toDateString() }
      ]}
    />
  </div>
);

export default Contact;
