import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  active: boolean;
  setActive: () => void;
  children?: React.ReactNode;
}

const Modal = ({ active, setActive, children }: ModalProps): JSX.Element => {
  const modalClasses = [styles.modal];
  const contentClasses = [styles.content];

  if (active) {
    modalClasses.push(styles.active);
  }

  return (
    <div className={modalClasses.join(' ')} onClick={setActive}>
      <div
        className={contentClasses.join(' ')}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
