import { AlertlistItemVM, AlertlistSubItemVM } from "./alertlist-item.model.ts";
import { RelativeTimePipe } from "_/pipes/relative-time/relative-time.pipe.ts";
import { AlertItemPriority } from "../../../../models/alert-priority.enum.ts";
import { Icon } from "_/carbon/icon-helper.util.ts";
import {
  cdsTile,
  div,
  span,
  cdsLayer,
  cdsStack,
  cdsExpandableTile,
  cdsTileAboveTheFoldContent,
  cdsTileBelowTheFoldContent,
  cdsOverflowMenuItem,
  cdsOverflowMenuBody,
  cdsOverflowMenu,
} from "_/utils/component-helper.util.ts";

const priorityToTextColorClass = (priority: AlertItemPriority): string =>
  ({
    [AlertItemPriority.P1]: "text-critical",
    [AlertItemPriority.P2]: "text-error",
    [AlertItemPriority.P3]: "text-warning",
    [AlertItemPriority.P4]: "text-info",
  }[priority] ?? "");

export const AlertlistItem = (item: AlertlistItemVM) =>
  cdsExpandableTile(
    {},
    cdsTileAboveTheFoldContent(
      div(
        { class: "flex flex-row items-center gap-1 pr-3" },
        Icon("Warning16"),
        cdsStack(
          { orientation: "vertical" },
          div(item.label),
          div(
            { class: "supporting-text" },
            span(`Reported ${RelativeTimePipe(item.reportedOn)}`),
            " • ",
            span(`Updated ${RelativeTimePipe(item.updatedOn)}`),
            " • ",
            span(`Alerts: ${item.items.length}`)
          )
        ),
        cdsOverflowMenu(
          { onclick: (e) => e.stopPropagation(), kind: "secondary" },
          Icon("OverflowMenuVertical16", {
            slot: "icon",
            style: "color: black",
          }),
          span({ slot: "tooltip-content" }, "Options"),
          cdsOverflowMenuBody(
            cdsOverflowMenuItem("Acknowledge"),
            cdsOverflowMenuItem("Dismiss"),
            cdsOverflowMenuItem("View details")
          )
        )
      )
    ),
    cdsTileBelowTheFoldContent(
      div(
        { class: "flex flex-col gap-1 pl-2" },
        item.items.map((subItem) => AlertlistSubItem(subItem))
      )
    )
  );

export const AlertlistSubItem = (subItem: AlertlistSubItemVM) =>
  cdsTile(
    { class: "py-2" },
    div(
      { class: "flex flex-row gap-1" },
      Icon("Warning16", { class: "text-critical" }),
      subItem.label
    ),
    div(
      { class: "flex flex-row gap-1" },
      span({ class: "flex-grow" }, subItem.secondaryLabel),
      span(RelativeTimePipe(subItem.age))
    )
  );
