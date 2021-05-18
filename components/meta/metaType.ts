import { ReactNode } from 'react';

export interface IPropsMeta {
  title: string;
  desc: string;
  url: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  children?: ReactNode[] | ReactNode | any;
}
