import { AlertOverviewPageVM } from "./alert-overview.model.ts";
import { AlertListGroupedComponent } from "./components/alertlist-grouped/alertlist-grouped.component.ts";
import { AlertDetailsComponent } from "./components/alert-details/alert-details.component.ts";
import { AlertFilters } from "./components/alert-filters/alert-filters.component.ts";
import { main, h1, section } from "_/utils/component-helper.util.ts";

export const AlertOverviewPage = (vm: AlertOverviewPageVM) =>
  main(
    { class: "flex flex-col flex-grow gap-1 px-3" },
    h1({ class: "md-typescale-display-medium" }, vm.title),
    AlertFilters(),
    section(
      { class: "flex flex-row gap-2 surface-high overflow-x-auto" },
      AlertListGroupedComponent(vm.alertList),
      AlertDetailsComponent(vm.selected)
    )
  );
