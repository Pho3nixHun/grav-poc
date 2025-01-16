import van from 'vanjs-core';
import { AlertlistGroupedVM } from '_/pages/alert-overview/components/alertlist-grouped/alertlist-grouped.model.ts';
import { AlertlistItem } from '_/pages/alert-overview/components/alertlist-grouped/components/alertlist-item/alertlist-item.component.ts';
import { AlertDetailsComponent } from '_/pages/alert-overview/components/alertlist-grouped/components/alert-details/alert-details.component.ts';

const {
  div,
  'md-list': mdList,
} = van.tags;

export const AlertListGroupedComponent = (vm: AlertlistGroupedVM) =>
  div(
    { class: 'flex flex-row gap-2 surface-high overflow-x-auto' },
    mdList(
      ...vm.items.map(AlertlistItem),
    ),
    AlertDetailsComponent(vm.selected),
  );
