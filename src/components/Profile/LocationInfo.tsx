import React from 'react';
import { User } from '../../types';
import List from '../List/List';
import styles from './Profile.module.scss';

export interface LocationInfoProps {
  location: User['location'];
}

const LocationInfo: React.FC<LocationInfoProps> = ({ location }) => {
  if (!location) return null;

  const { city, country, postcode, state, street } = location;

  return (
    <div className={styles.location}>
      <List
        items={[
          { title: 'Street', value: `${street.name} ${street.number}` },
          { title: 'Post code', value: postcode },
          { title: 'City', value: city },
          { title: 'State', value: state },
          { title: 'Country', value: country },
        ]}
      />
    </div>
  );
}

export default LocationInfo;
