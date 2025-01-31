import { AlertlistItem } from "./components/alertlist-item/alertlist-item.component.ts";
import { AlertlistGroupedVM } from "./alertlist-grouped.model.ts";
import { cdsLayer, cdsStack } from "_/utils/component-helper.util.ts";

export const AlertListGroupedComponent = (vm: AlertlistGroupedVM) =>
  cdsLayer(
    cdsStack(
      { orientation: "vertical", gap: "4" },
      vm.items.map((item) => AlertlistItem(item))
    )
  );
