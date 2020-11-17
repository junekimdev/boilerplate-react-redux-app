import { takeEvery, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import request from '../actions/request';
import { IAction, IReqWithParam, IReqWithData, IReqImageFile } from '../../types';

const baseURL = process.env.API_URL || 'https://localhost:4000';

const agent = axios.create({ baseURL });

function* getWorker(action: IAction<IReqWithParam>) {
  const { url, data, params, subscriber } = action.payload;
  const config: AxiosRequestConfig = { method: 'GET', url, data, params };
  const res: AxiosResponse = yield call(agent.request, config);
  if (subscriber) yield put({ type: subscriber, payload: res });
}
function* postWorker(action: IAction<IReqWithData>) {
  const { url, data, params, subscriber } = action.payload;
  const config: AxiosRequestConfig = { method: 'POST', url, data, params };
  const res: AxiosResponse = yield call(agent.request, config);
  if (subscriber) yield put({ type: subscriber, payload: res });
}
function* getImageFileWorker(action: IAction<IReqImageFile>) {
  const { url, data, params, subscriber, filename, generator } = action.payload;
  const config: AxiosRequestConfig = { method: 'GET', url, data, params, responseType: 'blob' };
  const res: AxiosResponse = yield call(agent.request, config);
  yield put({ type: subscriber, payload: { res, filename, generator } });
}

export default function* watcher() {
  yield takeEvery(request.const.get, getWorker);
  yield takeEvery(request.const.post, postWorker);
  yield takeEvery(request.const.getImageFile, getImageFileWorker);
}
