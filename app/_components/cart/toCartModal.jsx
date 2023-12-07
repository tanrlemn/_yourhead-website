'use client';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

// components
import {
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Heading,
  Highlight,
  Stat,
  Box,
  StatNumber,
  Divider,
  VStack,
} from '@chakra-ui/react';

export default function ToCartModal({
  product,
  isOpen,
  onClose,
  numCartItems,
}) {
  const { setLoading } = useContext(LoadingContext);
  const router = useRouter();
  const mainImage = product.small_thumbnail;

  return (
    <Modal
      size={'xl'}
      motionPreset='slideInBottom'
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Added to bag</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap={'2rem'}>
            <VStack
              align={'flex-start'}
              justify={'space-between'}
              minH={'100%'}>
              <Box
                w={'100%'}
                pt={'2rem'}>
                <Heading size={'lg'}>
                  <Highlight
                    query={product.title}
                    styles={{
                      color: 'var(--darkBlue)',
                    }}>
                    {product.title}
                  </Highlight>{' '}
                  has been added to your bag.
                </Heading>
                <Divider m={'1rem 0'} />
              </Box>

              <Stat flex={0}>
                <StatNumber fontSize={'1rem'}>{`${numCartItems} item${
                  numCartItems !== 1 ? 's' : ''
                } in your bag`}</StatNumber>
              </Stat>
            </VStack>
            <Image
              m={'1rem 0'}
              src={mainImage}
              alt={product.title}
              width={150}
              height={150 * 1.25}
            />
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme='blue'
            mr={3}
            onClick={() => {
              setLoading(true);
              router.push('/cart');
            }}>
            View Bag
          </Button>
          <Button
            variant='ghost'
            onClick={onClose}>
            Continue Shopping
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
