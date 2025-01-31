import { SidebarItemVM } from "./sidebar-item.model.ts";
import {
  li,
  mdNavigationTab,
  mdIcon,
} from "../../../../../utils/component-helper.util.ts";
export const SidebarItemComponent = (vm: SidebarItemVM) =>
  li(
    mdNavigationTab(
      {
        label: vm.label,
        active: vm.active ? "active" : "",
      },
      mdIcon(
        {
          slot: "active-icon",
        },
        vm.activeIcon ?? vm.icon
      ),
      mdIcon(
        {
          slot: "inactive-icon",
        },
        vm.icon
      )
    )
  );
