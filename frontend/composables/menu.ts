import { getNavMenu } from "@/queries/getNavMenu";

interface MenuItem {
  id: string;
  url: string;
  title:string;
  items:{
    id: string;
    url: string;
    title:string;
  }[]

}
export interface Menu {
  menu:{
    items: MenuItem[]
  }
}

export default function useMenu(handle: string) {
  return window.menus[handle]
}
