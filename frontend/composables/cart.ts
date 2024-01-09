import { faker } from '@faker-js/faker';
import { computed, ref } from 'vue';
import { showCart } from '@/helpers/rightSidebar';
import type { Color, Product, Size } from '@/composables/products';
import { colorOptions } from '@/helpers/fixtures';
import type { OrderProduct } from '@/composables/orders';
import { FAKER_SEED } from '@/helpers/common';

faker.seed(FAKER_SEED);
const upsellsCount = faker.number.int({ min: 2, max: 4 });

const items = ref<OrderProduct[]>([]);
const upsells = ref(Array.from({ length: upsellsCount }).map(() => {
  const colors = faker.helpers.arrayElements<Color>(colorOptions, { min: 1, max: 5 });

  return {
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.productName(),
    price: +faker.commerce.price({ min: 100, max: 1000 }),
    image: faker.image.url({ width: 98, height: 104 }),
    availableColors: colors,
  } as Product;
}));

export default function useCart() {
  const qty = computed(() => items.value.reduce((acc, cur) => acc + cur.qty, 0));

  const subtotal = computed(() => items.value.reduce((acc, cur) => acc + cur.qty * cur.price, 0));

  function deleteItem(data: OrderProduct) {
    const objWithIdIndex = items.value.findIndex((item) => item.id === data.id);

    if (objWithIdIndex > -1) {
      items.value.splice(objWithIdIndex, 1);
    }
  }

  function addUpsell(data: Product, size: Size, color: Color) {
    const objWithIdIndex = upsells.value.findIndex((item) => item.id === data.id);

    if (objWithIdIndex > -1) {
      items.value.push({
        ...data,
        size,
        color,
        qty: 1,
      });

      upsells.value.splice(objWithIdIndex, 1);
    }
  }

  function addProduct(data: Product, color?: Color, size?: Size) {
    const product = items.value.find((item) => item.id === data.id);

    if (product) {
      product.qty += 1;
    } else {
      items.value.push({
        ...data,
        size: size || data.availableSizes[0],
        color: color || data.availableColors[0],
        qty: 1,
      });
    }

    showCart();
  }

  function increaseQty(productId: string) {
    const product = items.value.find((item) => item.id === productId);

    if (product) {
      product.qty += 1;
    }
  }

  // Note: if qty is 1, delete the item
  function decreaseQty(productId: string) {
    const product = items.value.find((item) => item.id === productId);

    if (product) {
      if (product.qty === 1) {
        deleteItem(product);
      } else {
        product.qty -= 1;
      }
    }
  }

  return {
    items,
    upsells,
    qty,
    subtotal,
    deleteItem,
    addUpsell,
    addProduct,
    increaseQty,
    decreaseQty,
  };
}
