import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={styles.link} to="/goit-react-hw-08-phonebook">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/goit-react-hw-08-phonebook/phonebook">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
