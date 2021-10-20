import Link from 'next/link';
import styles from './mainFrame.module.scss';

const View = () => {
  return (
    <nav className={styles.navbarVertical}>
      <Link href="/">
        <a>
          <i className="fas fa-home"></i>
        </a>
      </Link>
    </nav>
  );
};

export default View;
