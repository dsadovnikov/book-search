import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { userSlice } from '../../slices/user';
import { AppDispatch } from '../../store';
import { UserType } from '../../types/user';
import Registration from '../Registration/Registration';
import Button, { ButtonType } from '../UI/Button/Button';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { user } = useAppSelector((state) => state.userSlice);
  const dispatch = useDispatch<AppDispatch>();

  const { logout } = userSlice.actions;

  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [showRegistrationForm, setShowRegistrationForm] =
    useState<boolean>(false);

  const logoutFromApp = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.links}>
          <Link to="/search">Поиск</Link>
        </div>
        {user.userType === UserType.none ? (
          <div className={styles.userBlock}>
            <Button
              type={ButtonType.button}
              onClick={() => setShowLoginForm(true)}
            >
              Login
            </Button>
            <Button
              type={ButtonType.button}
              onClick={() => setShowRegistrationForm(true)}
            >
              Registration
            </Button>
          </div>
        ) : (
          <Button type={ButtonType.button} onClick={logoutFromApp}>
            Logout
          </Button>
        )}
      </div>
      {showRegistrationForm ? (
        <Registration
          active={true}
          setActive={() => setShowRegistrationForm(false)}
        />
      ) : null}
    </div>
  );
};

export default Navbar;
