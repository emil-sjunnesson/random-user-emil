import React from 'react';
import { User } from '../../types';
import Flag from '../Flag/Flag';
import styles from './Profile.module.scss';

export interface ProfileHeaderProps {
  name: User['name'],
  gender: User['gender'],
  picture: User['picture'],
  age: number,
  nat: string
}

const ProfileSkeleton: React.FC<ProfileHeaderProps> = ({
  name,
  gender,
  picture,
  age,
  nat
}) => {
  const genderSign = (gender: User['gender']) => {
    switch (gender) {
      case 'female':
        return <span>&#9792;</span>
      case 'male':
        return <span>&#9794;</span>
      default:
        return null;
    }
  }

  return (
    <div className={styles.header}>
      <img src={picture.large} alt="Profile" />
      <div className={styles.nameInfo}>
        <h2>{name.title} {name.first} {name.last}{genderSign(gender)}</h2>
        <div>
          <span className={styles.age}>Age: {age}</span>
          <Flag countryCode={nat} />
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
