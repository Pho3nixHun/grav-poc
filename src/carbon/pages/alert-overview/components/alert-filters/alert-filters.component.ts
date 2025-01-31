import { Icon } from "_/carbon/icon-helper.util.ts";
import {
  div,
  section,
  cdsContentSwitcher,
  cdsContentSwitcherItem,
  cdsDropdown,
  cdsDropdownItem,
  cdsTextInput,
  cdsIconButton,
  span,
} from "_/utils/component-helper.util.ts";

export const AlertFilters = () =>
  section(
    { class: "flex flex-row" },
    cdsContentSwitcher(
      { value: "1", style: "width: fit-content" },
      cdsContentSwitcherItem({ value: "1", selected: "" }, "Grouped"),
      cdsContentSwitcherItem({ value: "2" }, "Flat list")
    ),
    div({ class: "flex-1" }),
    div(
      { class: "flex flex-row gap-2 justify-end" },
      cdsDropdown(
        { value: "1" },
        cdsDropdownItem({ value: "1" }, "Sort by severity: high to low"),
        cdsDropdownItem({ value: "2" }, "Sort by severity: low to high"),
        cdsDropdownItem({ value: "3" }, "Sort by age: newest to oldest"),
        cdsDropdownItem({ value: "4" }, "Sort by age: oldest to newest")
      ),
      cdsTextInput({ placeholder: "Search" }),
      cdsIconButton(
        { kind: "secondary", label: "Filter" },
        Icon("Filter16", { slot: "icon" }),
        span({ slot: "tooltip-content" }, "Filter")
      )
    )
  );
