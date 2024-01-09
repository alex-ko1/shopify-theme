import {getShopInformation} from "@/queries/getShopInformation";

interface Currency {
  isoCode: string;
  currency: {
    isoCode: string;
    symbol: string;
  };
}

export interface ShopInformationData {
  localization: {
    availableCountries: Currency[];
  };
}


export default async function useShop(){
  const {data} = await useAsyncQuery<ShopInformationData>(getShopInformation)

  const isoCodes = data.value.localization.availableCountries.map(country => country.isoCode);
  const currencies = data.value.localization.availableCountries.map(country => country.currency);

  return toRefs({
    isoCodes,
    currencies
  })
}
