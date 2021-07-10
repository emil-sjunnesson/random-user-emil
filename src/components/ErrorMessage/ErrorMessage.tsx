import React from 'react';
import styles from './ErrorMessage.module.scss';

export interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => (
  <div className={styles.errorWrapper}>
    <h3>An error occurred</h3>
    <p>Cause: {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

export default ErrorMessage;
