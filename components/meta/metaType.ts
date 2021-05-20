import { ReactNode } from 'react';

export type TMPropsMeta = {
  title: string;
  desc: string;
  url: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  children?: ReactNode[] | ReactNode | any;
};
