import { AlertlistGroupedVM } from "_/material-3/pages/alert-overview/components/alertlist-grouped/alertlist-grouped.model.ts";
import { AlertlistItem } from "_/material-3/pages/alert-overview/components/alertlist-grouped/components/alertlist-item/alertlist-item.component.ts";
import { mdList } from "_/utils/component-helper.util.ts";

export const AlertListGroupedComponent = (vm: AlertlistGroupedVM) =>
  mdList(...vm.items.map(AlertlistItem));
