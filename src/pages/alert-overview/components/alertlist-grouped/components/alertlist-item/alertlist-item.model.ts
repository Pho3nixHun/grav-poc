export enum AlertItemPriority {
  P1 = 'stat_0',
  P2 = 'stat_3',
  P3 = 'stat_2',
  P4 = 'stat_1',
}

export interface AlertlistSubItemVM {
  priority: AlertItemPriority;
  label: string;
  secondaryLabel: string;
  age: number;
}

export interface AlertlistItemVM {
  priority: AlertItemPriority;
  label: string;
  reportedOn: number;
  updatedOn: number;
  items: AlertlistSubItemVM[];
  open?: boolean;
}
