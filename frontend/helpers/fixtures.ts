import type { Color, Size } from "@/composables/products";

export interface ProductType {
    label: string;
    value: string;
}

export const typeOptions = [
  {
    label: 'coats',
    value: 'coats',
  },
  {
    label: 'jackets',
    value: 'jackets',
  },
  {
    label: 'trousers and shorts',
    value: 'trousers_and_shorts',
  },
  {
    label: 'skirts',
    value: 'skirts',
  },
  {
    label: 'dresses',
    value: 'dresses',
  },
  {
    label: 'denim',
    value: 'denim',
  },
  {
    label: 'shirts',
    value: 'shirts',
  },
  {
    label: 'tops',
    value: 'tops',
  },
] as ProductType[];

export const sizeOptions = [
  {
    label: 's',
    value: 's',
  },
  {
    label: 'm',
    value: 'm',
  },
  {
    label: 'l',
    value: 'l',
  },
  {
    label: 'xl',
    value: 'xl',
  },
] as Size[];

export interface Collection {
    label: string;
    value: string;
}

export const collectionOptions = [
  {
    label: 'Collection 1',
    value: 'col1',
  },
  {
    label: 'Collection 2',
    value: 'col2',
  },
  {
    label: 'Collection 3',
    value: 'col3',
  },
  {
    label: 'Collection 4',
    value: 'col4',
  },
] as Collection[];

export const colorOptions = [
  {
    label: 'black',
    value: 'bg-black',
    classes: 'after:bg-black',
  },
  {
    label: 'white',
    value: 'bg-white',
    classes: 'after:bg-transparent after:border after:border-grey-100',
  },
  {
    label: 'navy',
    value: 'bg-indigo-500',
    classes: 'after:bg-indigo-500',
  },
  {
    label: 'brown',
    value: 'bg-amber-900',
    classes: 'after:bg-amber-900',
  },
  {
    label: 'pink',
    value: 'bg-pink-200',
    classes: 'after:bg-pink-200',
  },
  {
    label: 'red',
    value: 'bg-rose-400',
    classes: 'after:bg-rose-400',
  },
] as Color[];
