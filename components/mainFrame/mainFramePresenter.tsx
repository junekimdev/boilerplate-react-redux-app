import { ReactNode } from 'react';
import styles from './mainFrame.module.scss';
import Navbar from './mainFrameViewNavbar';

const Presenter = (props: { children?: ReactNode[] | ReactNode }) => {
  const { children } = props;
  return (
    <main role="main" className={styles.main}>
      <Navbar />
      <div className={styles.mainFrame}>{children}</div>
    </main>
  );
};

export default Presenter;
