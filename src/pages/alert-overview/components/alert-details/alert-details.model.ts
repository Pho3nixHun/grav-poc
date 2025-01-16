export interface Tab {
  label: string;
  disabled?: boolean;
  selected?: boolean;
  details?: {
    priority: string;
    orderId: string;
    loadId: string;
    packageId: string;
    created: number;
  };
}

export interface AlertDetailsVM {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  tabs: Tab[];
  instructions: string[];
}
