import React from 'react';
import Flag from '../Flag/Flag';
import List from '../List/List';
import styles from './Profile.module.scss';

const SkeletonImage = () => (
  <div className={[styles.skeleton, styles.image].join(' ')} />
);

const SkeletonLargeText = () => (
  <div className={[styles.skeleton, styles.largeText].join(' ')} />
);

const SkeletonText = () => (
  <div className={[styles.skeleton, styles.text].join(' ')} />
);

const SkeletonList = ({ length }: { length: number }) => (
  <List
    items={new Array(length).fill(0).map(() => (
      { title: <SkeletonText />, value: <SkeletonText /> }
    ))}
  />
);

const ProfileSkeleton = () => (
  <div className={styles.profileWrapper}>
    <div className={styles.header}>
      <SkeletonImage />
      <div className={styles.nameInfo}>
        <SkeletonLargeText />
        <div>
          <SkeletonText />
          <Flag placeholder />
        </div>
      </div>
    </div>
    <div className={styles.contact}>
      <SkeletonList length={4} />
    </div>
    <div className={styles.location}>
      <SkeletonList length={5} />
    </div>
  </div>
);

export default ProfileSkeleton;
