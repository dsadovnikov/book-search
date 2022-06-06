import React from 'react';
import { useForm } from 'react-hook-form';
import Button, { ButtonType } from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Modal from '../UI/Modal/Modal';
import styles from './Registration.module.scss';

interface RegistrationProps {
  active: boolean;
  setActive: () => void;
}

const Registration = ({
  active,
  setActive,
}: RegistrationProps): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <Modal active={active} setActive={setActive}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input />
        <Input />
        <Button type={ButtonType.submit} onClick={onSubmit}>
          Registration
        </Button>
      </form>
    </Modal>
  );
};

export default Registration;
