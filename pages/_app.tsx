import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import './global.scss';
import { configureStore } from '../controllers';

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
