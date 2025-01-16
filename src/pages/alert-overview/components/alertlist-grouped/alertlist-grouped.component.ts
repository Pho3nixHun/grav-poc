import van from 'vanjs-core';
import { AlertlistGroupedVM } from '_/pages/alert-overview/components/alertlist-grouped/alertlist-grouped.model.ts';
import { AlertlistItem } from '_/pages/alert-overview/components/alertlist-grouped/components/alertlist-item/alertlist-item.component.ts';

const {
  'md-list': mdList,
} = van.tags;

export const AlertListGroupedComponent = (vm: AlertlistGroupedVM) =>
  mdList(
    ...vm.items.map(AlertlistItem),
  );
