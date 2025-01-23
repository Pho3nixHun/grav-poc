import { NavItemVM } from './nav-item.model.ts';
import van from 'vanjs-core';
import { Icon } from '_/carbon/icon-helper.util.ts';

const {
  'cds-header-global-action': cdsHeaderGlobalAction,
} = van.tags;

export const NavItemComponent = ({ label, icon }: NavItemVM) =>
  cdsHeaderGlobalAction(
    {
      ariaLabel: label,
      tooltipText: label,
      type: 'button',
    },
    Icon(icon, { slot: 'icon' }),
  );
