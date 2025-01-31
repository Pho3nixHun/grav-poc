import { OutboundOrderOverviewPageVM } from "./outbound-order-overview.model.ts";
import { DatePipe } from "_/pipes/date-time/date-time.pipe.ts";
import {
  main,
  div,
  section,
  span,
  h1,
  table,
  thead,
  th,
  tbody,
  tr,
  td,
  ul,
  li,
  button,
  mdIcon,
  mdMenu,
  mdMenuItem,
  mdCheckbox,
  mdIconButton,
  mdFilledSelect,
  mdOutlinedIconButton,
  mdOutlinedSegmentedButtonSet,
} from "_/utils/component-helper.util.ts";

export const OutboundOrderOverviewPage = (vm: OutboundOrderOverviewPageVM) =>
  main(
    { class: "flex flex-col flex-grow gap-1 px-3" },
    h1({ class: "md-typescale-display-medium" }, vm.title),
    section(
      { class: "flex flex-row items-center" },
      div(
        { class: "flex-grow" },
        mdOutlinedSegmentedButtonSet(
          {
            class: "max-w-fit",
          },
          mdOutlinedIconButton(mdIcon("keyboard_arrow_left")),
          div(
            {
              class: "missing-material",
            },
            "!"
          ),
          mdOutlinedIconButton(mdIcon("keyboard_arrow_right"))
        )
      ),
      div(
        { class: "flex flex-row gap-2 items-center" },
        mdFilledSelect(
          {
            label: "Search",
          },
          mdIcon({ slot: "leading-icon" }, "search")
        ),
        mdOutlinedIconButton(mdIcon("filter_alt")),
        span(
          { style: "position: relative" },
          mdOutlinedIconButton({ id: "usage-anchor" }, mdIcon("more_horiz")),
          mdMenu(
            { anchor: "usage-anchor", id: "usage-menu" },
            mdMenuItem(div("Rush Order")),
            mdMenuItem(div("Cancel Order"))
          )
        )
      )
    ),

    section(
      {
        class: "flex flex-row gap-2",
        style: "justify-content: space-evenly",
      },
      div(
        {
          class: "missing-material",
        },
        "!"
      ),
      div(
        {
          class: "missing-material",
        },
        "!"
      )
    ),

    section(
      { class: "flex flex-row gap-2 surface-high overflow-x-auto" },

      table(
        { class: "w-full bg-white " },
        thead(
          tr(
            th({ class: "px-3", style: "width: 6rem;" }, mdCheckbox()),
            vm.datatable.titles.map((header) => th(header))
          )
        ),
        tbody(
          vm.datatable.orders.map((order) =>
            tr(
              td(
                { class: "px-3" },
                mdCheckbox({ checked: order.selected ?? false })
              ),
              td({ class: "text-id", style: "width: 13rem;" }, "id"),
              td({ style: "width: 13rem;" }, DatePipe(order.createdOn)),
              td({ style: "width: 13rem;" }, DatePipe(order.rft)),
              td(
                {
                  style: "width: 13rem;",
                  class: order.timeliness ? "text-red" : "",
                },
                order.timeliness ? `+${order.timeliness}m` : "--"
              ),
              td({ style: "width: 13rem;" }, order.status)
            )
          )
        )
      )
    ),
    ul(
      { class: "flex", style: "margin-left:auto" },
      li(
        button(
          { class: "flex items-center" },
          "Rows per page: 10",
          mdIcon("close")
        )
      ),
      li(mdIconButton(mdIcon("first_page"))),
      li(mdIconButton(mdIcon("keyboard_arrow_left"))),
      li(mdIconButton(mdIcon("keyboard_arrow_right"))),
      li(mdIconButton(mdIcon("last_page")))
    )
  );

document.addEventListener("DOMContentLoaded", () => {
  const anchorEl =
    document.body.querySelector<HTMLButtonElement>("#usage-anchor");
  const menuEl = document.body.querySelector<HTMLDialogElement>("#usage-menu");

  if (!anchorEl) {
    return;
  }

  anchorEl.addEventListener("click", () => {
    if (!menuEl) {
      return;
    }
    menuEl.open = !menuEl.open;
  });
});
