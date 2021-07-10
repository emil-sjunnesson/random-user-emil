import React, { useState } from 'react';
import styles from './Flag.module.scss';

interface FlagProps {
  countryCode?: string;
  size?: 16 | 24 | 32 | 48 | 64;
  theme?: 'flat' | 'shiny';
  placeholder?: boolean;
}

const Flag: React.FC<FlagProps> = ({
  countryCode,
  size = 64,
  theme = 'flat',
  placeholder
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || placeholder || !countryCode) {
    return (
      <div
        className={[styles.flag, styles.error].join(' ')}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <img
      className={styles.flag}
      src={`https://www.countryflags.io/${countryCode}/${theme}/${size}.png`}
      style={{ width: size, height: size }}
      alt="flag"
      onError={() => setHasError(true)}
    />
  );
};

export default Flag;
