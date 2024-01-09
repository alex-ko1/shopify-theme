import { ref } from 'vue';
import { getProductsQuery, type GetProductsQueryResult } from '@/queries/getProductsQuery';
import { mapColorOptionsFromProduct, NO_IMAGE_PLACEHOLDER } from "@/helpers/common";

export interface Size {
  label: string;
  value: string;
}

export interface Color {
  label: string;
  value: string;
  classes?: string;
}

export interface ProductImage {
    altText: string;
    height: number;
    id: string;
    originalSrc: string;
    src: string;
    transformedSrc: string;
    url: string;
    width: number;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    images: ProductImage[];
    availableColors: Color[];
    availableSizes: Size[];
}

const favorites = ref<Product[]>([]);

export default async function useProducts(first = 250) {
  const variables = { first };
  const { data } = await useAsyncQuery<GetProductsQueryResult>(getProductsQuery, variables);

  const products = ref(data.value.products.edges.map(({ node }) => ({
    id: node.id.split('/').pop(),
    name: node.featuredImage ? node.title : node.title,
    price: +node.priceRange.maxVariantPrice.amount,
    image: node.featuredImage?.originalSrc || node.images.nodes[0]?.originalSrc || NO_IMAGE_PLACEHOLDER,
    images: node.images.nodes,
    availableColors: node
      .options
      .filter((variant) => variant.name === 'Color')
      .flatMap(a => mapColorOptionsFromProduct(a)),
    availableSizes: node
      .options
      .filter((variant) => variant.name === 'Size')
      .flatMap((variant) => variant.values.map((sizeName) => ({
        label: sizeName,
        value: sizeName.toLowerCase(),
      }))),
  } as Product)));

  function favoriteProduct(product: Product) {
    favorites.value.push(product);
  }

  function unfavoriteProduct(product: Product) {
    const productWithId = favorites.value.findIndex((p) => p.id === product.id);

    if (productWithId > -1) {
      favorites.value.splice(productWithId, 1);
    }
  }

  function isProductFavorited(product: Product) {
    return favorites.value.includes(product);
  }

  return {
    products,
    favorites,
    favoriteProduct,
    unfavoriteProduct,
    isProductFavorited,
  };
}
