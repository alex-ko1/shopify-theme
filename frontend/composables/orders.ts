import { ref } from 'vue';
import { faker } from '@faker-js/faker';
import {
  colorOptions,
  sizeOptions,
} from '@/helpers/fixtures';
import useProducts, { type Color, type Product, type Size } from '@/composables/products';
import { FAKER_SEED } from '@/helpers/common';

export interface OrderProduct extends Exclude<Product, Product['availableColors']> {
  qty: number;
  color: Color;
  size: Size;
}

export interface Order {
  id: number;
  expectedBy: Date;
  status: string;
  items: OrderProduct[];
  paidVia: string;
  shipping: {
    name: string;
    price: number;
  };
}

export enum ORDER_STATUSES {
  CREATED = 'CREATED',
  PAID = 'PAID',
  PROCESSING = 'PROCESSING',
  IN_TRANSIT = 'IN TRANSIT',
  DELIVERED = 'DELIVERED',
  CANCELED = 'CANCELED',
  REFUNDED = 'REFUNDED',
}

export default async function useOrders() {
  const { products } = await useProducts();

  const orders = ref(Array.from({ length: 10 }).map(() => {
    faker.seed(FAKER_SEED);

    return {
      id: faker.number.int({ min: 100000000, max: 999999999 }),
      expectedBy: faker.date.future(),
      status: faker.helpers.arrayElement(Object.values(ORDER_STATUSES)),
      items: faker.helpers.arrayElements(
        products.value.map((p: Product) => ({
          ...p,
          qty: faker.number.int({ min: 1, max: 3 }),
          color: faker.helpers.arrayElement(colorOptions),
          size: faker.helpers.arrayElement(sizeOptions),
        })),
        { min: 1, max: 4 },
      ),
      paidVia: 'Card Online',
      shipping: {
        name: 'DHL Express',
        price: 10,
      },
    };
  }) as Order[]);

  return {
    orders,
  };
}
