import { useEffect } from 'react';
import Meta from '../components/meta';
import MainFrame from '../components/mainFrame';

const Page = () => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title="Template | junekimdev"
        desc="Template created by junekimdev"
        url={publicUrl}
      ></Meta>
      <MainFrame></MainFrame>
    </>
  );
};

export default Page;
