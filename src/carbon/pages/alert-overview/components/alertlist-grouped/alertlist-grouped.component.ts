import van from 'vanjs-core';
import { AlertlistGroupedVM } from '_/material-3/pages/alert-overview/components/alertlist-grouped/alertlist-grouped.model';
import { AlertlistItem } from '_/material-3/pages/alert-overview/components/alertlist-grouped/components/alertlist-item/alertlist-item.component';

const {
  'md-list': mdList,
} = van.tags;

export const AlertListGroupedComponent = (vm: AlertlistGroupedVM) =>
  mdList(
    ...vm.items.map(AlertlistItem),
  );
