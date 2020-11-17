export interface IReqWithParam {
  url: string;
  params?: object;
  data?: object;
  subscriber?: string;
}

export interface IReqWithData {
  url: string;
  data: object;
  params?: object;
  subscriber?: string;
}

export interface IReqImageFile {
  url: string;
  data?: object;
  params?: object;
  subscriber: string;
  filename: string;
  generator: Generator<{ url: string; filename: string }>;
}
