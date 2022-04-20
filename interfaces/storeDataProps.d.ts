import type { Page } from 'playwright';

export interface getDataProps {
  page: Page;
  vendor: string;
}

export interface IProduct {
  name: string;
  price: string;
  imgUrl: string;
  store: string;
}
