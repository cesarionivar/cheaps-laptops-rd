import { getDataProps } from '../interfaces/storeDataProps';
import {
  getOasComputerData,
  getBiosComputerData,
} from './storesScrapperFunctions';

export const stores = [
  {
    vendor: 'Oas Computer',
    url: 'http://www.oascomputer.com/index.php?route=product/category&path=70&limit=200',
    getData: async ({ page, vendor }: getDataProps) => {
      return getOasComputerData({ page, vendor });
    },
  },
  {
    vendor: 'Bios Computer',
    url: 'https://www.bios.do/categoria-producto/laptop/',
    getData: async ({ page, vendor }: getDataProps) => {
      return getBiosComputerData({ page, vendor });
    },
  },
];
