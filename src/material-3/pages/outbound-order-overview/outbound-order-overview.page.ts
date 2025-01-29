import van from "vanjs-core";
import { OutboundOrderOverviewPageVM } from "./outbound-order-overview.model.ts";
import { format } from "https://esm.sh/date-fns@4.1.0";

const {
  main,
  h1,
  div,
  section,
  span,
  table,
  thead,
  th,
  tbody,
  tr,
  td,
  ul,
  button,
  li,
  "md-menu": mdMenu,
  "md-menu-item": mdMenuItem,
  "md-checkbox": mdCheckbox,
  "md-outlined-segmented-button-set": mdOutlinedSegmentedButtonSet,
  "md-filled-select": mdFilledSelect,
  "md-select-option": mdSelectOption,
  "md-icon-button": mdIconButton,
  "md-icon": mdIcon,
  "md-outlined-icon-button": mdOutlinedIconButton,
} = van.tags;

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
          { style: 'position: relative' },
          mdOutlinedIconButton({ id: "usage-anchor" }, mdIcon("more_horiz")),
          mdMenu(
            { anchor: 'usage-anchor', id: "usage-menu" },
            mdMenuItem(
              div("Rush Order")
            ),
            mdMenuItem(
              div("Cancel Order")
            )
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
              td(
                { style: "width: 13rem;" },
                format(new Date(order.createdOn), "dd MMMM yyyy, HH:mm")
              ),
              td(
                { style: "width: 13rem;" },
                format(new Date(order.rft), "dd MMMM yyyy, HH:mm")
              ),
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
      li(button({ class: 'flex items-center' }, "Rows per page: 10", mdIcon("close"))),
      li(mdIconButton(mdIcon("first_page"))),
      li(mdIconButton(mdIcon("keyboard_arrow_left"))),
      li(mdIconButton(mdIcon("keyboard_arrow_right"))),
      li(mdIconButton(mdIcon("last_page")))
    )
  );

document.addEventListener('DOMContentLoaded', () => {
  const anchorEl = document.body.querySelector('#usage-anchor');
  const menuEl = document.body.querySelector('#usage-menu');

  anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });
})