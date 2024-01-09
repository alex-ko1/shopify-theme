import type { Order } from '@/composables/orders';
import type { Color } from "@/composables/products";

export const FAKER_SEED = 112233;

export interface ColorOption {
  label: string;
  value: string;
  classes: string;
}

export const NO_IMAGE_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

const humanToTailwindColors: Record<string, ColorOption> = {
  'black': {
    label: 'black',
    value: 'black',
    classes: 'bg-black',
  },
  'white': {
    label: 'white',
    value: 'white',
    classes: 'bg-white border',
  },
  'gray': {
    label: 'gray',
    value: 'gray',
    classes: 'bg-gray-400',
  },
  'red': {
    label: 'red',
    value: 'red',
    classes: 'bg-red-400',
  },
  'yellow': {
    label: 'yellow',
    value: 'yellow',
    classes: 'bg-yellow-400',
  },
  'green': {
    label: 'green',
    value: 'green',
    classes: 'bg-green-400',
  },
  'blue': {
    label: 'blue',
    value: 'blue',
    classes: 'bg-blue-400',
  },
  'indigo': {
    label: 'indigo',
    value: 'indigo',
    classes: 'bg-indigo-400',
  },
  'purple': {
    label: 'purple',
    value: 'purple',
    classes: 'bg-purple-400',
  },
  'pink': {
    label: 'pink',
    value: 'pink',
    classes: 'bg-pink-400',
  },
  'brown': {
    label: 'brown',
    value: 'brown',
    classes: 'bg-amber-800',
  }
}

export function calculateOrderPrice(order: Order) {
  return order.items.reduce((sum, item) => sum + item.price, 0);
}

export function mapColorOptionsFromProduct(option: {id: string, name: string, values: string[]}): Color[] {
  return option.values.map((colorName) => {
    const normalizedName = colorName.toLowerCase().replaceAll(' ', '-').replaceAll('_', '-');

    const color = humanToTailwindColors[normalizedName];

    if (!color) {
      console.error(`Color ${colorName} is not supported`);

      // Fall back to black
      const black = humanToTailwindColors['black'];

      return {
        label: colorName,
        value: black.value,
        classes: black.classes,
      }
    }

    return {
      label: color.label,
      value: color.value,
      classes: color.classes,
    }
  });
}
