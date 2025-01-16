import { AlertlistGroupedVM } from './components/alertlist-grouped/alertlist-grouped.model.ts';
import { AlertDetailsVM } from './components/alert-details/alert-details.model.ts';

export interface AlertOverviewViewMode {
  label: string;
  selected?: boolean;
}

export interface AlertOverviewPageVM {
  title: string;
  viewModes: AlertOverviewViewMode[];
  alertList: AlertlistGroupedVM;
  selected: AlertDetailsVM;
}
