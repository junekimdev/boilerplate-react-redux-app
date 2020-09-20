import { takeEvery, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import request from '../actions/request';
import { IAction } from '../../types';

const baseURL = process.env.API_URL || 'https://localhost:4000';

const agent = axios.create({ baseURL });

const makeRequest = async (
  url: string,
  method: 'GET' | 'POST',
  data?: object,
  params?: object,
  responseType?: 'arraybuffer' | 'document' | 'json' | 'text' | 'stream' | 'blob',
) => await agent.request({ method, url, data, params, responseType });

function* getWorker(
  action: IAction<{
    url: string;
    data?: object;
    params?: object;
    subscriber?: string;
  }>,
) {
  const { url, data, params, subscriber } = action.payload;
  const res: AxiosResponse = yield call(makeRequest, url, 'GET', data, params);
  if (subscriber) yield put({ type: subscriber, payload: res });
}
function* postWorker(
  action: IAction<{
    url: string;
    data: object;
    params?: object;
    subscriber?: string;
  }>,
) {
  const { url, data, params, subscriber } = action.payload;
  const res: AxiosResponse = yield call(makeRequest, url, 'POST', data, params);
  if (subscriber) yield put({ type: subscriber, payload: res });
}
function* getImageFileWorker(
  action: IAction<{
    url: string;
    data?: object;
    params?: object;
    subscriber: string;
    filename: string;
    generator: Generator<{ url: string; filename: string }>;
  }>,
) {
  const { url, data, params, subscriber, filename, generator } = action.payload;
  const res: AxiosResponse = yield call(makeRequest, url, 'GET', data, params, 'blob');
  yield put({ type: subscriber, payload: { res, filename, generator } });
}

export default function* watcher() {
  yield takeEvery(request.const.get, getWorker);
  yield takeEvery(request.const.post, postWorker);
  yield takeEvery(request.const.getImageFile, getImageFileWorker);
}
