import { NavItemVM } from "./nav-item.model.ts";
import {
  li,
  mdIconButton,
  mdIcon,
} from "../../../../../utils/component-helper.util.ts";

export const NavItemComponent = (vm: NavItemVM) =>
  li(mdIconButton(mdIcon(vm.icon)));
