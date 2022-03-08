import { ReactNode } from 'react';
import Presenter from './mainFramePresenter';
//import { useReduxState } from '../../controllers';

const Interactor = (props: { children?: ReactNode[] | ReactNode }) => {
  const { children } = props;
  return <Presenter {...{ children }} />;
};

export default Interactor;
