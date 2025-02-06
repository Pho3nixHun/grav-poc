import van from 'vanjs-core';
import { SidebarVM } from './sidebar.model.ts';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component.ts';

const {
  'cds-side-nav': cdsSideNav,
  'cds-side-nav-items': cdsSideNavItems,
  'cds-layer': cdsLayer,
} = van.tags;

export * from './components/sidebar-item/sidebar-item.component.ts';

export const SidebarComponent = (vm: SidebarVM) =>
    cdsSideNav(
      { role: 'navigation', 'collapse-mode': 'rail', style: '--cds-background: #e9e9ea' },
      cdsSideNavItems(
        { role: 'list' },
        ...vm.items.map(SidebarItemComponent),
      )
  );
