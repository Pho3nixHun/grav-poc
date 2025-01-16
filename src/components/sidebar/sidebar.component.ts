import van from 'vanjs-core';
import { SidebarVM } from './sidebar.model.ts';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component.ts';

const {
  nav,
  ul,
} = van.tags;

export * from './components/sidebar-item/sidebar-item.component.ts';

export const SidebarComponent = (vm: SidebarVM) =>
  nav(
    { class: 'surface-variant px-1 surface-highest' },
    ul(
      { class: 'flex flex-col justify-strech' },
      ...vm.items.map(SidebarItemComponent),
    ),
  );
