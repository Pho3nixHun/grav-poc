import { SidebarVM } from "./sidebar.model.ts";
import { SidebarItemComponent } from "./components/sidebar-item/sidebar-item.component.ts";
import { nav, ul } from "../../../utils/component-helper.util.ts";
export * from "./components/sidebar-item/sidebar-item.component.ts";

export const SidebarComponent = (vm: SidebarVM) =>
  nav(
    { class: "surface-variant px-1 surface-highest" },
    ul(
      { class: "flex flex-col justify-strech" },
      ...vm.items.map(SidebarItemComponent)
    )
  );
