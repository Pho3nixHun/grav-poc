import van from 'vanjs-core';
import { NavVM } from './nav.model.ts';
import { NavItemComponent } from './components/nav-item/nav-item.component.ts';

const {
  div,
  'cds-header': cdsHeader,
  'cds-header-nav': cdsHeaderNav,
  'cds-header-nav-item': cdsHeaderNavItem,
  'cds-header-menu': cdsHeaderMenu,
  'cds-header-menu-item': cdsHeaderMenuItem,
} = van.tags;

export * from './components/nav-item/nav-item.component.ts';

export const NavComponent = (vm: NavVM) =>
  cdsHeader(
    {
      role: 'banner',
      'carbon-theme': 'g100',
    },
    cdsHeaderNav(
      cdsHeaderNavItem(
        { href: '/carbon/alert-overview' },
        'Link 1',
      ),
      cdsHeaderMenu(
        {
          'menu-label': 'Link 2',
          menuLabel: 'Link 2',
          'trigger-content': 'Link 2',
        },
        cdsHeaderMenuItem(
          'Link 3',
        ),
        cdsHeaderMenuItem(
          'Link 4',
        ),
      ),
    ),
    div(
      {
        class: 'flex flex-1 justify-end',
      },
      vm.items.map(NavItemComponent),
    ),
  );
