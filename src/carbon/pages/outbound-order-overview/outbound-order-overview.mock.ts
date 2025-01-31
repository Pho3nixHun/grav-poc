import { OrderStatus } from "./outbound-order-overview.model.ts";

export const outboundOrderOverviewAppVM = {
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
      { label: "Alerts", icon: "Warning16" },
      {
        label: "Process",
        icon: "FlowData16",
        active: true,
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
  outboundOrderOverviewPage: {
    title: "Outbound order overview",
    day: 9,
    pageSize: 10,
    charts: ["Total vs closed orders/hour", "Timeliness/mins"],
    datatable: {
      titles: [
        "Order ID",
        "Created on",
        "RFT",
        "Order timeliness",
        "Order status",
      ],
      orders: [
        {
          selected: false,
          createdOn: 1686278460000,
          rft: 1686282060000,
          timeliness: 10,
          status: OrderStatus.Picking,
        },
        {
          selected: false,
          createdOn: 1686278520000,
          rft: 1686282120000,
          status: OrderStatus.Picking,
        },
        {
          selected: false,
          createdOn: 1686278700000,
          rft: 1686282300000,
          status: OrderStatus.Picking,
        },
        {
          selected: false,
          createdOn: 1686278700000,
          rft: 1686282300000,
          status: OrderStatus.Picking,
        },
        {
          selected: false,
          createdOn: 1686279000000,
          rft: 1686282600000,
          status: OrderStatus.Picking,
        },
        {
          selected: false,
          createdOn: 1686279300000,
          rft: 1686282900000,
          status: OrderStatus.Picking,
        },
        {
          selected: false,
          createdOn: 1686279300000,
          rft: 1686282900000,
          status: OrderStatus.Picking,
        },
        {
          selected: false,
          createdOn: 1686279300000,
          rft: 1686282900000,
          status: OrderStatus.Assigned,
        },
        {
          selected: true,
          createdOn: 1686279360000,
          rft: 1686282960000,
          timeliness: 6,
          status: OrderStatus.Released,
        },
        {
          selected: true,
          createdOn: 1686279360000,
          rft: 1686282960000,
          status: OrderStatus.Planned,
        },
      ],
    },
  },
};
