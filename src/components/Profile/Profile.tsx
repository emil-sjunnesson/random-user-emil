import React from 'react';
import { User } from '../../types';
import Contact from './Contact';
import LocationInfo from './LocationInfo';
import ProfileHeader from './ProfileHeader';
import ProfileSkeleton from './ProfileSkeleton';
import styles from './Profile.module.scss';

export interface ProfileProps {
  userData: User | undefined;
  isLoading: boolean;
}

const Profile: React.FC<ProfileProps> = ({ userData, isLoading }) => {
  if (isLoading || !userData) {
    return <ProfileSkeleton />
  }

  const {
    gender,
    name,
    location,
    email,
    dob,
    cell,
    phone,
    nat,
    picture,
    registered
  } = userData;

  return (
    <div className={styles.profileWrapper}>
      <ProfileHeader
        name={name}
        gender={gender}
        picture={picture}
        age={dob.age}
        nat={nat}
      />
      <Contact
        email={email}
        cell={cell}
        phone={phone}
        registrationDate={registered.date}
      />
      <LocationInfo location={location} />
    </div>
  );
};

export default Profile;
