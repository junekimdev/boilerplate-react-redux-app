const requestConst = {
  get: 'REQUEST_GET',
  post: 'REQUEST_POST',
  getImageFile: 'REQUEST_GET_IMAGE_FILE',
};

const requestAction = {
  get: (payload: { url: string; params?: object; subscriber?: string }) => ({
    type: requestConst.get,
    payload,
  }),
  post: (payload: { url: string; data: object; subscriber?: string }) => ({
    type: requestConst.post,
    payload,
  }),
  getImageFile: (payload: {
    url: string;
    params?: object;
    subscriber: string;
    filename: string;
    generator: Generator<{ url: string; filename: string }>;
  }) => ({
    type: requestConst.getImageFile,
    payload,
  }),
};

export default { const: requestConst, action: requestAction };
