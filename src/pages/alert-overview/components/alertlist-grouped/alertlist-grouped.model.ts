import { AlertDetailsVM } from '_/pages/alert-overview/components/alertlist-grouped/components/alert-details/alert-details.model.ts';
import { AlertlistItemVM } from './components/alertlist-item/alertlist-item.model.ts';

export interface AlertlistGroupedVM {
  items: AlertlistItemVM[];
  selected: AlertDetailsVM;
}
