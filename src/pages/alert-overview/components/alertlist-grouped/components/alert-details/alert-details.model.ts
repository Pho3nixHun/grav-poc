export interface Tab<T = undefined> {
  label: string;
  disabled?: boolean;
  selected?: boolean;
  details: T;
}

export interface AlertDetailsVM {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  tabs: Tab[] & {
    0: Tab<{
      priority: string;
      orderId: string;
      loadId: string;
      packageId: string;
      created: number;
    }>;
  };
  instructions: string[];
}
