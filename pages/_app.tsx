import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import './global.scss';
import store from '../controllers/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
