import { Icon } from "_/carbon/icon-helper.util.ts";
import {
  div,
  span,
  cdsIconButton,
  cdsDatePicker,
  cdsDatePickerInput,
  cdsTextInput,
  cdsOverflowMenu,
  cdsOverflowMenuItem,
  cdsOverflowMenuBody,
} from "_/utils/component-helper.util.ts";

export const OutboundFilters = () =>
  div(
    { class: "flex flex-row", style: "justify-content: space-between" },
    div(
      { class: "flex flex-row items-center gap-2" },
      cdsIconButton({ kind: "ghost" }, Icon("ChevronLeft32", { slot: "icon" })),
      cdsDatePicker(
        { label: "Date range" },
        cdsDatePickerInput({
          placeholder: "mm/dd/yyyy",
        })
      ),
      cdsIconButton({ kind: "ghost" }, Icon("ChevronRight32", { slot: "icon" }))
    ),
    div(
      { class: "flex flex-row gap-2" },
      cdsTextInput({ placeholder: "Search" }),
      cdsIconButton(
        { kind: "ghost", label: "Filter" },
        Icon("Filter16", { slot: "icon" }),
        span({ slot: "tooltip-content" }, "Filter")
      ),
      cdsOverflowMenu(
        cdsIconButton(
          { kind: "ghost", label: "Options" },
          Icon("OverflowMenuHorizontal32", { slot: "icon", kind: "ghost" }),
          span({ slot: "tooltip-content" }, "Options")
        ),
        cdsOverflowMenuBody(
          { flipped: "true" },
          cdsOverflowMenuItem("Rush order"),
          cdsOverflowMenuItem("Cancel order")
        )
      )
    )
  );
