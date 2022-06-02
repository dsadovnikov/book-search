import React from 'react';
import { ThreeDots } from 'react-loading-icons';
import styles from './Spinner.module.scss';

const Spinner = (): JSX.Element => {
  return (
    <div className={styles.spinner}>
      <ThreeDots fill="rgb(39, 106, 160)" />
    </div>
  );
};

export default Spinner;
