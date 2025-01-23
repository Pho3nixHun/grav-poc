import van from 'vanjs-core';
import { SidebarItemVM } from './sidebar-item.model.ts';
import { Icon } from '_/carbon/icon-helper.util.ts';

const {
  'cds-side-nav-link': cdsSideNavLink,
  'cds-side-nav-menu': cdsSideNavMenu,
  'cds-side-nav-menu-item': cdsSideNavMenuItem,
} = van.tags;

const SideNavMenuItem = ({ active, label }) => cdsSideNavMenuItem(
  {
    active: active ? 'active' : '',
    'parent-has-icon': '',
    role: 'button',
    tabindexx: '-1',
  },
  label,
)

const SideNavMenu = ({ active, label, icon, items }) => cdsSideNavMenu(
  {
    role: 'listitem',
    active: active ? 'active' : '',
    title: label,
  },
  Icon(icon, { slot: 'title-icon' }),
  ...items.map(SideNavMenuItem),
);

const SideNavLink = ({ active, icon, label }) => cdsSideNavLink(
  { role: 'listitem', active: active ? 'active' : '' },
  Icon(icon, { slot: 'title-icon' }),
  label,
)

export const SidebarItemComponent = (vm: SidebarItemVM) =>
  vm.items ? SideNavMenu(vm) : SideNavLink(vm);