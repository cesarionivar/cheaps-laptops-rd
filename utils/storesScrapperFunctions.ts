import { getDataProps } from '../interfaces/storeDataProps';

export const getOasComputerData = async ({ page, vendor }: getDataProps) => {
  const products = [];

  const productsCards = await page.$$('.product-inner');

  for (const product of productsCards) {
    const name: string =
      (await product.$eval(
        '.wrap-infor .name a',
        (el: HTMLElement) => el.textContent
      )) ?? 'Name not available';

    const price: string =
      (await product.$eval(
        '.wrap-infor .price .price-new',
        (el: HTMLElement) => el.textContent
      )) ?? 'Price not available';

    const imgUrl: string =
      (await product.$eval('.image a img', (el: HTMLElement) =>
        el.getAttribute('src')
      )) ?? 'Image not available';

    products.push({
      name,
      price,
      imgUrl: imgUrl,
      store: vendor,
    });
  }
  return products;
};

export const getBiosComputerData = async ({ page, vendor }: getDataProps) => {
  const products = [];

  const productsCard = await page.$$('.product-inner');

  for (const product of productsCard) {
    const name: string =
      (await product.$eval(
        'a .woocommerce-loop-product__title',
        (el: HTMLElement) => el.textContent
      )) ?? 'Name not available';

    const price: string =
      (await product.$eval(
        '.price-add-to-cart .woocommerce-Price-currencySymbol',
        (el: HTMLElement) => el.textContent
      )) ?? 'Price not available';

    const imgUrl: string =
      (await product.$eval('a .product-thumbnail img', (el: HTMLElement) =>
        el.getAttribute('src')
      )) ?? 'Image not available';

    products.push({
      name,
      price,
      imgUrl: imgUrl,
      store: vendor,
    });
  }

  return products;
};
