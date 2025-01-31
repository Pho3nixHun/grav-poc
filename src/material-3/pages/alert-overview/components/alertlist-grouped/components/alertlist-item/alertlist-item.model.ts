import { AlertItemPriority } from "_/material-3/pages/alert-overview/models/alert-priority.enum.ts";

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
