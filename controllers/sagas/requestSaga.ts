import { takeEvery, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import request from '../actions/request';
import { IAction, IRequest } from '../../types';

const baseURL = process.env.API_URL || 'https://localhost:4000';

const agent = axios.create({ baseURL });

function* getWorker(action: IAction<IRequest>) {
  const { url, data, params, subscriber, token } = action.payload;
  const config: AxiosRequestConfig = { method: 'GET', url, data, params };
  if (token) config.headers = { Authorization: `Bearer ${token}` };
  try {
    const res: AxiosResponse = yield call(agent.request, config);
    if (subscriber) yield put({ type: subscriber, payload: res });
  } catch (error) {
    if (subscriber) yield put({ type: subscriber, payload: error.response });
  }
}
function* postWorker(action: IAction<IRequest>) {
  const { url, data, params, subscriber, token } = action.payload;
  const config: AxiosRequestConfig = { method: 'POST', url, data, params };
  if (token) config.headers = { Authorization: `Bearer ${token}` };
  try {
    const res: AxiosResponse = yield call(agent.request, config);
    if (subscriber) yield put({ type: subscriber, payload: res });
  } catch (error) {
    if (subscriber) yield put({ type: subscriber, payload: error.response });
  }
}
function* putWorker(action: IAction<IRequest>) {
  const { url, data, params, subscriber, token } = action.payload;
  const config: AxiosRequestConfig = { method: 'PUT', url, data, params };
  if (token) config.headers = { Authorization: `Bearer ${token}` };
  try {
    const res: AxiosResponse = yield call(agent.request, config);
    if (subscriber) yield put({ type: subscriber, payload: res });
  } catch (error) {
    if (subscriber) yield put({ type: subscriber, payload: error.response });
  }
}
function* deleteWorker(action: IAction<IRequest>) {
  const { url, data, params, subscriber, token } = action.payload;
  const config: AxiosRequestConfig = { method: 'DELETE', url, data, params };
  if (token) config.headers = { Authorization: `Bearer ${token}` };
  try {
    const res: AxiosResponse = yield call(agent.request, config);
    if (subscriber) yield put({ type: subscriber, payload: res });
  } catch (error) {
    if (subscriber) yield put({ type: subscriber, payload: error.response });
  }
}

export default function* watcher() {
  yield takeEvery(request.const.get, getWorker);
  yield takeEvery(request.const.post, postWorker);
  yield takeEvery(request.const.put, putWorker);
  yield takeEvery(request.const.delete, deleteWorker);
}
