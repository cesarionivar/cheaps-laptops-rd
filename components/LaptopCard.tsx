import { Badge, Box } from '@chakra-ui/react';
import { IProduct } from '../interfaces/storeDataProps';

export const LaptopCard = ({ name, imgUrl, price, store }: IProduct) => {
  return (
    <Box>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <img src={imgUrl} alt={name} width={220} height={220} />
      </Box>

      <Box p='6'>
        <Box fontWeight='semibold' as='h3' lineHeight='tight' isTruncated>
          {name}
        </Box>

        <Badge borderRadius='full' px='2' colorScheme='teal'>
          {price}
        </Badge>
        <Box mt='1' fontWeight='bold' as='h4' lineHeight='tight' isTruncated>
          {store}
        </Box>
      </Box>
    </Box>
  );
};
