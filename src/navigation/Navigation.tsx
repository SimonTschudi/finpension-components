import { Link } from 'react-router';
import styles from './Navigation.module.scss';

export const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
};
