import { DataTable } from "./outbound-datatable.model.ts";
import { DatePipe } from "_/pipes/date-time/date-time.pipe.ts";
import {
  table,
  thead,
  tr,
  td,
  th,
  tbody,
  cdsCheckbox,
} from "_/utils/component-helper.util.ts";

export const OutboundDatatableComponent = (vm: DataTable) =>
  table(
    { class: "w-full bg-white " },
    thead(
      tr(
        th({ class: "px-3", style: "width: 6rem;" }, cdsCheckbox()),
        vm.titles.map((header) => th(header))
      )
    ),
    tbody(
      vm.orders.map((order) =>
        tr(
          td(
            { class: "px-3" },
            cdsCheckbox({ checked: order.selected ?? false })
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
  );
