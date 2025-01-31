import { OutboundOrderOverviewPageVM } from "./outbound-order-overview.model.ts";
import { OutboundDatatableComponent } from "./components/outbound-datatable/outbound-datatable.component.ts";
import { OutboundFilters } from "./components/outbound-filters/outbound-filters.component.ts";
import { OutboundGroupedChartComponent } from "./components/outbound-chart/outbound-chart.component.ts";
import { groupedChartData } from "./components/outbound-chart/outbound-chart.mock.ts";
import { groupedChartOptions } from "./components/outbound-chart/outbound-chart.config.ts";

import { Icon } from "_/carbon/icon-helper.util.ts";
import {
  main,
  ul,
  li,
  button,
  h1,
  section,
  div,
  cdsIconButton,
} from "_/utils/component-helper.util.ts";

export const OutboundOrderOverviewPage = (vm: OutboundOrderOverviewPageVM) =>
  main(
    { class: "flex flex-col flex-grow gap-1 px-3" },
    h1(vm.title),
    OutboundFilters(),
    section(
      { class: "flex flex-row", style: "justify-content: space-evenly" },
      div({ id: "leftChart" }),
      div({ id: "rightChart" })
    ),
    section(OutboundDatatableComponent(vm.datatable)),
    ul(
      { class: "flex items-center gap-2", style: "margin-left:auto" },
      li(
        button(
          { class: "flex items-center" },
          "Rows per page: 10",
          Icon("Close32", { slot: "icon" })
        )
      ),
      li("1 - 10 OF 10"),
      li(
        cdsIconButton({ kind: "first" }, Icon("PageFirst32", { slot: "icon" }))
      ),
      li(
        cdsIconButton(
          { kind: "first" },
          Icon("ChevronLeft32", { slot: "icon" })
        )
      ),
      li(
        cdsIconButton(
          { kind: "first" },
          Icon("ChevronRight32", { slot: "icon" })
        )
      ),
      li(cdsIconButton({ kind: "first" }, Icon("PageLast32", { slot: "icon" })))
    )
  );

document.addEventListener("DOMContentLoaded", () => {
  OutboundGroupedChartComponent(
    document.getElementById("leftChart"),
    groupedChartData,
    groupedChartOptions
  );
  OutboundGroupedChartComponent(
    document.getElementById("rightChart"),
    groupedChartData,
    groupedChartOptions
  );
});
