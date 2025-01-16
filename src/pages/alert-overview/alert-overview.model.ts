import { AlertlistGroupedVM } from './components/alertlist-grouped/alertlist-grouped.model.ts';

export interface AlertOverviewViewMode {
  label: string;
  selected?: boolean;
}

export interface AlertOverviewPageVM {
  title: string;
  viewModes: AlertOverviewViewMode[];
  alertList: AlertlistGroupedVM;
}
