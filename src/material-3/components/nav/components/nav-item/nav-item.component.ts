import { NavItemVM } from './nav-item.model.ts';
import van from 'vanjs-core';

const {
  li,
  'md-icon-button': mdIconButton,
  'md-icon': mdIcon,
} = van.tags;

export const NavItemComponent = (vm: NavItemVM) =>
  li(
    mdIconButton(
      mdIcon(vm.icon),
    ),
  );
