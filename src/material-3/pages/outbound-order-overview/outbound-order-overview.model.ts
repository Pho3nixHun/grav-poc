export enum OrderStatus {
  Picking = 'Picking',
  Assigned = 'Assigned',
  Released = 'Released',
  Planned = 'Planned',
}

export interface Order {
  selected?: boolean;
  createdOn: number;
  rft: number;
  timeliness?: number;
  status: OrderStatus;
}

export interface OutboundOrderOverviewPageVM {
  title: string;
  day: number;
  charts: string[];
  pageSize: number;
  datatable: DataTable;
}

export interface DataTable {
  titles: string[]
  orders: Order[]
}