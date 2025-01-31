import { AppVM } from "./models/app.model.ts";
import { OrderStatus } from "./outbound-order-overview.model.ts";

export const outboundOrderOverviewAppVM: AppVM = {
  nav: {
    items: [
      { icon: "search" },
      { icon: "help" },
      { icon: "settings" },
      { icon: "mail" },
      { icon: "account_circle" },
    ],
  },
  sidebar: {
    items: [
      { label: "Dashboard", icon: "dashboard" },
      { label: "Alerts", icon: "error" },
      { label: "Process", icon: "automation", active: true },
      { label: "Inventory", icon: "inventory_2" },
      { label: "Workstations", icon: "precision_manufacturing" },
      { label: "Storage", icon: "layers" },
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
