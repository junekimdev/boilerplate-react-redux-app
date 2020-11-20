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
    if (error.response && subscriber) {
      // The request was made and the response was received; but the response was erroneous
      yield put({ type: subscriber, payload: error.response });
    } else {
      console.log(error);
      yield put({
        type: subscriber,
        payload: { status: 500, statusText: 'Internal Server Error' },
      });
    }
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
    if (error.response && subscriber) {
      // The request was made and the response was received; but the response was erroneous
      yield put({ type: subscriber, payload: error.response });
    } else {
      console.log(error);
      yield put({
        type: subscriber,
        payload: { status: 500, statusText: 'Internal Server Error' },
      });
    }
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
    if (error.response && subscriber) {
      // The request was made and the response was received; but the response was erroneous
      yield put({ type: subscriber, payload: error.response });
    } else {
      console.log(error);
      yield put({
        type: subscriber,
        payload: { status: 500, statusText: 'Internal Server Error' },
      });
    }
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
    if (error.response && subscriber) {
      // The request was made and the response was received; but the response was erroneous
      yield put({ type: subscriber, payload: error.response });
    } else {
      console.log(error);
      yield put({
        type: subscriber,
        payload: { status: 500, statusText: 'Internal Server Error' },
      });
    }
  }
}

export default function* watcher() {
  yield takeEvery(request.const.get, getWorker);
  yield takeEvery(request.const.post, postWorker);
  yield takeEvery(request.const.put, putWorker);
  yield takeEvery(request.const.delete, deleteWorker);
}
