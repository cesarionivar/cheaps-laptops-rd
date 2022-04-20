import type { NextApiRequest, NextApiResponse } from 'next';
import { chromium } from 'playwright';

import { stores } from '../../utils/stores';
import { IProduct } from '../../interfaces/storeDataProps';

type Data = { products: IProduct[] } | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET')
    return res.status(405).json({ message: 'Method not allowed' });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  let products: IProduct[] = [];

  for (const { vendor, url, getData } of stores) {
    await page.goto(url);
    const data = await getData({ page, vendor });
    products.push(...data);
  }

  await browser.close();

  res.status(200).json({ products });
}
