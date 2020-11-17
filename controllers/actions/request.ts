import { IRequest, IReqImageFile } from '../../types';

const requestConst = {
  get: 'REQUEST_GET',
  post: 'REQUEST_POST',
  put: 'REQUEST_PUT',
  delete: 'REQUEST_DELETE',
  getImageFile: 'REQUEST_GET_IMAGE_FILE',
};

const requestAction = {
  get: (payload: IRequest) => ({
    type: requestConst.get,
    payload,
  }),
  post: (payload: IRequest) => ({
    type: requestConst.post,
    payload,
  }),
  put: (payload: IRequest) => ({
    type: requestConst.put,
    payload,
  }),
  delete: (payload: IRequest) => ({
    type: requestConst.delete,
    payload,
  }),
  getImageFile: (payload: IReqImageFile) => ({
    type: requestConst.getImageFile,
    payload,
  }),
};

export default { const: requestConst, action: requestAction };
