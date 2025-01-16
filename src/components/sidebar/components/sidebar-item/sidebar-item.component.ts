import van from 'vanjs-core';
import { SidebarItemVM } from './sidebar-item.model.ts';

const {
  li,
  'md-navigation-tab': mdNavigationTab,
  'md-icon': mdIcon,
} = van.tags;

export const SidebarItemComponent = (vm: SidebarItemVM) =>
  li(
    mdNavigationTab(
      {
        label: vm.label,
        active: vm.active ? 'active' : '',
      },
      mdIcon({
        slot: 'active-icon',
      }, vm.activeIcon ?? vm.icon),
      mdIcon({
        slot: 'inactive-icon',
      }, vm.icon),
    ),
  );
