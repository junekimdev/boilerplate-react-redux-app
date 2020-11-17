import { IReqWithParam, IReqWithData, IReqImageFile } from '../../types';

const requestConst = {
  get: 'REQUEST_GET',
  post: 'REQUEST_POST',
  getImageFile: 'REQUEST_GET_IMAGE_FILE',
};

const requestAction = {
  get: (payload: IReqWithParam) => ({
    type: requestConst.get,
    payload,
  }),
  post: (payload: IReqWithData) => ({
    type: requestConst.post,
    payload,
  }),
  getImageFile: (payload: IReqImageFile) => ({
    type: requestConst.getImageFile,
    payload,
  }),
};

export default { const: requestConst, action: requestAction };
