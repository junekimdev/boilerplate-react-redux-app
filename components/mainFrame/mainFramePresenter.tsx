import { ReactNode } from 'react';
import './mainFrame.scss';
import Navbar from './mainFrameViewNavbar';

const presenter = (props: { children: ReactNode[] | ReactNode }) => {
  const { children } = props;
  return (
    <main role="main">
      <Navbar />
      <section className="mainFrame">{children}</section>
    </main>
  );
};

export default presenter;
