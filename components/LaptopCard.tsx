import Image from 'next/image';
import { IProduct } from '../interfaces/storeDataProps';

export const LaptopCard = ({ name, imgUrl, price, store }: IProduct) => {
  return (
    <div>
      <p>{name}</p>
      <Image src={imgUrl} alt={name} width={120} height={120} />
      <p>{price}</p>
    </div>
  );
};
