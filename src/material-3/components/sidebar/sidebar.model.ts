import { SidebarItemVM } from './components/sidebar-item/sidebar-item.model.ts';

export * from './components/sidebar-item/sidebar-item.model.ts';

export interface SidebarVM {
  items: SidebarItemVM[];
}
