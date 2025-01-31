import { SidebarVM } from "./sidebar.model.ts";
import { SidebarItemComponent } from "./components/sidebar-item/sidebar-item.component.ts";
import { cdsSideNav, cdsSideNavItems } from "_/utils/component-helper.util.ts";

export * from "./components/sidebar-item/sidebar-item.component.ts";

export const SidebarComponent = (vm: SidebarVM) =>
  cdsSideNav(
    { role: "navigation", "collapse-mode": "rail" },
    cdsSideNavItems({ role: "list" }, ...vm.items.map(SidebarItemComponent))
  );
