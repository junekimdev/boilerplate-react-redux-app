import { useEffect } from 'react';
import Meta from '../components/meta';
import MainFrame from '../components/mainFrame';

const page = () => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title="Template | JuneKimDev"
        desc="Template created by JuneKimDev"
        url={publicUrl}
      />
      <MainFrame>
      </MainFrame>
    </>
  );
};

export default page;
