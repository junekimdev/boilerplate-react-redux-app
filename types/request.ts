export interface IRequest {
  url: string;
  params?: object;
  data?: object;
  subscriber?: string;
  token?: string;
}

export interface IReqImageFile extends IRequest {
  filename: string;
  generator: Generator<{ url: string; filename: string }>;
}
