import { NavVM } from "./nav.model.ts";
import { NavItemComponent } from "./components/nav-item/nav-item.component.ts";
import { nav, ul, li } from "../../../utils/component-helper.util.ts";

export * from "./components/nav-item/nav-item.component.ts";

export const NavComponent = (vm: NavVM) =>
  nav(
    {
      class: "dark surface px-3",
    },
    ul(
      {
        class: "flex flex-row",
      },
      li({ class: "flex-grow" }),
      ...vm.items.map(NavItemComponent)
    )
  );
