import { NavVM } from "./nav.model.ts";
import { NavItemComponent } from "./components/nav-item/nav-item.component.ts";
import { cdsHeader, div } from "_/utils/component-helper.util.ts";

export * from "./components/nav-item/nav-item.component.ts";

export const NavComponent = (vm: NavVM) =>
  cdsHeader(
    {
      role: "banner",
      "carbon-theme": "g100",
    },
    div(
      {
        class: "flex flex-1 justify-end",
      },
      vm.items.map(NavItemComponent)
    )
  );
