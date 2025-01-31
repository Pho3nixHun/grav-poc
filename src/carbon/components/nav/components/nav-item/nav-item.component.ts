import { NavItemVM } from "./nav-item.model.ts";
import { Icon } from "_/carbon/icon-helper.util.ts";
import { cdsHeaderGlobalAction } from "_/utils/component-helper.util.ts";

export const NavItemComponent = ({ label, icon }: NavItemVM) =>
  cdsHeaderGlobalAction(
    {
      ariaLabel: label,
      tooltipText: label,
      type: "button",
    },
    Icon(icon, { slot: "icon" })
  );
