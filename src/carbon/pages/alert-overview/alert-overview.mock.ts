import { AlertItemPriority } from "./models/alert-priority.enum.ts";

export const alertOverviewAppVM = {
  nav: {
    items: [
      { icon: "Search20", label: "Search" },
      { icon: "Help20", label: "Help" },
      { icon: "Settings20", label: "Settings" },
      { icon: "Notification20", label: "Notifications" },
      { icon: "UserAvatar20", label: "Profile" },
    ],
  },
  sidebar: {
    items: [
      { label: "Dashboard", icon: "Template16" },
      { label: "Alerts", icon: "Warning16", active: true },
      { label: "Inbox", icon: "MessageQueue16" },
      { label: "Reports", icon: "Calendar16" },
      { label: "Map", icon: "Map16" },
      {
        label: "Process",
        icon: "FlowData16",
        items: [{ label: "Item 1" }, { label: "Item 2" }],
      },
      {
        label: "Inventory",
        icon: "Box16",
        items: [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }],
      },
      {
        label: "Workstations",
        icon: "Screen16",
        items: [{ label: "Item 1" }],
      },
      {
        label: "Storage",
        icon: "Layers16",
        items: [{ label: "Item 1" }, { label: "Item 2" }],
      },
    ],
  },
  alertOverviewPage: {
    title: "Alert Overview",
    viewModes: [{ label: "Grouped", selected: true }, { label: "Flat list" }],
    alertList: {
      items: [
        {
          priority: AlertItemPriority.P1,
          label: "Order 1234",
          updatedOn: Date.now() - 5 * 60 * 1000,
          reportedOn: Date.now() - 30 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P1,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 5 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 30 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P1,
          label: "SKU - iPad Air 5G",
          updatedOn: Date.now() - 5 * 60 * 1000,
          reportedOn: Date.now() - 15 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P1,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 5 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 15 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P1,
          label: "Order 4567",
          updatedOn: Date.now() - 30000,
          reportedOn: Date.now() - 1330000,
          items: [
            {
              priority: AlertItemPriority.P1,
              label: "Order <CustomerOrderID> is close to RFT",
              secondaryLabel: "230705-1234",
              age: Date.now() - 30000,
            },
            {
              priority: AlertItemPriority.P3,
              label: "Pallet is waiting for GTP package <PlannedPackageID>",
              secondaryLabel: "230705-5678",
              age: Date.now() - 8 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: "Transport of carrier <CarrierID> could not be completed",
              secondaryLabel: "230705-9012",
              age: Date.now() - 10 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P2,
          label: "GTP - Workstation 1",
          updatedOn: Date.now() - 5 * 60 * 1000,
          reportedOn: Date.now() - 15 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P2,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 5 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 15 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P3,
          label: "Storage - Pallet",
          updatedOn: Date.now() - 5 * 60 * 1000,
          reportedOn: Date.now() - 15 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P3,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 5 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 15 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P4,
          label: "Communication",
          updatedOn: Date.now() - 7 * 60 * 1000,
          reportedOn: Date.now() - 20 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P4,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 20 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P4,
          label: "Communication",
          updatedOn: Date.now() - 7 * 60 * 1000,
          reportedOn: Date.now() - 20 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P4,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 20 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P4,
          label: "Communication",
          updatedOn: Date.now() - 7 * 60 * 1000,
          reportedOn: Date.now() - 20 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P4,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 20 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P4,
          label: "Communication",
          updatedOn: Date.now() - 7 * 60 * 1000,
          reportedOn: Date.now() - 20 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P4,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 20 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P4,
          label: "Communication",
          updatedOn: Date.now() - 7 * 60 * 1000,
          reportedOn: Date.now() - 20 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P4,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 20 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P4,
          label: "Communication",
          updatedOn: Date.now() - 7 * 60 * 1000,
          reportedOn: Date.now() - 20 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P4,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: "Alert label",
              secondaryLabel: "secondary label",
              age: Date.now() - 20 * 60 * 1000,
            },
          ],
        },
      ],
    },
    selected: {
      title: "Order <CustomerOrderID> is closed",
      description:
        "The order <OrderID> is not completed and 8 minutes from the required finishing time.",
      eyebrow: "ORD4567",
      subtitle: "230705-1234",
      instructions: [
        "Dock door is not assigner for <fulfilment stream> package(s) and <minutes> past schedule start time",
      ],
      tabs: [
        {
          label: "Details",
          details: {
            created: 0,
            loadId: "125653535",
            packageId: "PSD245678945",
            priority: "Critical",
            orderId: "ORD4567",
          },
        },
        {
          label: "Activity",
        },
        {
          label: "Comments",
        },
        {
          label: "Related alerts",
        },
      ],
    },
  },
};
