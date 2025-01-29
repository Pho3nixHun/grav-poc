import '@material/web/all.js';
import '@material/web/labs/navigationbar/navigation-bar.js';
import '@material/web/labs/navigationtab/navigation-tab.js';
import '@material/web/labs/segmentedbutton/outlined-segmented-button.js';
import '@material/web/labs/segmentedbuttonset/outlined-segmented-button-set.js';
import '@material/web/labs/card/elevated-card.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/dialog/dialog.js';
import 'material-symbols';
import './material.theme.css';

import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
import { AppComponent } from './app.component.ts';
import { AlertItemPriority, AppVM } from './app.model.ts';
import { OrderStatus } from '_/material-3/pages/outbound-order-overview/outbound-order-overview.model.ts';
import { DialogPage } from '_/material-3/pages/dialog/dialog.page.ts';

if (typescaleStyles.styleSheet === undefined) {
  throw new TypeError('Expected CSSStyleSheet, got undefined');
}

document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

const appVM: AppVM = {
  nav: {
    items: [
      { icon: 'search' },
      { icon: 'help' },
      { icon: 'settings' },
      { icon: 'mail' },
      { icon: 'account_circle' },
    ],
  },
  sidebar: {
    items: [
      { label: 'Dashboard', icon: 'dashboard' },
      { label: 'Alerts', icon: 'error', active: true },
      { label: 'Inbox', icon: 'inbox_text' },
      { label: 'Reports', icon: 'calendar_today' },
      { label: 'Map', icon: 'map' },
      { label: 'Process', icon: 'automation' },
      { label: 'Inventory', icon: 'inventory_2' },
      { label: 'Workstations', icon: 'precision_manufacturing' },
      { label: 'Storage', icon: 'layers' },
    ],
  },
  alertOverviewPage: {
    title: 'Alert Overview',
    viewModes: [
      { label: 'Grouped', selected: true },
      { label: 'Flat list' },
    ],
    alertList: {
      items: [
        {
          priority: AlertItemPriority.P1,
          label: 'Order 1234',
          updatedOn: Date.now() - 5 * 60 * 1000,
          reportedOn: Date.now() - 30 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P1,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 5 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 30 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P1,
          label: 'SKU - iPad Air 5G',
          updatedOn: Date.now() - 5 * 60 * 1000,
          reportedOn: Date.now() - 15 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P1,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 5 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 15 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P1,
          label: 'Order 4567',
          updatedOn: Date.now() - 30000,
          reportedOn: Date.now() - 1330000,
          items: [
            {
              priority: AlertItemPriority.P1,
              label: 'Order <CustomerOrderID> is close to RFT',
              secondaryLabel: '230705-1234',
              age: Date.now() - 30000,
            },
            {
              priority: AlertItemPriority.P3,
              label: 'Pallet is waiting for GTP package <PlannedPackageID>',
              secondaryLabel: '230705-5678',
              age: Date.now() - 8 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: 'Transport of carrier <CarrierID> could not be completed',
              secondaryLabel: '230705-9012',
              age: Date.now() - 10 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P2,
          label: 'GTP - Workstation 1',
          updatedOn: Date.now() - 5 * 60 * 1000,
          reportedOn: Date.now() - 15 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P2,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 5 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 15 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P3,
          label: 'Storage - Pallet',
          updatedOn: Date.now() - 5 * 60 * 1000,
          reportedOn: Date.now() - 15 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P3,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 5 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 15 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P4,
          label: 'Communication',
          updatedOn: Date.now() - 7 * 60 * 1000,
          reportedOn: Date.now() - 20 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P4,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 20 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P4,
          label: 'Communication',
          updatedOn: Date.now() - 7 * 60 * 1000,
          reportedOn: Date.now() - 20 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P4,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 20 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P4,
          label: 'Communication',
          updatedOn: Date.now() - 7 * 60 * 1000,
          reportedOn: Date.now() - 20 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P4,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 20 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P4,
          label: 'Communication',
          updatedOn: Date.now() - 7 * 60 * 1000,
          reportedOn: Date.now() - 20 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P4,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 20 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P4,
          label: 'Communication',
          updatedOn: Date.now() - 7 * 60 * 1000,
          reportedOn: Date.now() - 20 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P4,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 20 * 60 * 1000,
            },
          ],
        },
        {
          priority: AlertItemPriority.P4,
          label: 'Communication',
          updatedOn: Date.now() - 7 * 60 * 1000,
          reportedOn: Date.now() - 20 * 60 * 1000,
          open: true,
          items: [
            {
              priority: AlertItemPriority.P4,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: '',
              secondaryLabel: '',
              age: Date.now() - 20 * 60 * 1000,
            },
          ],
        },
      ],
    },
    selected: {
      title: 'Order <CustomerOrderID> is closed',
      description:
        'The order <OrderID> is not completed and 8 minutes from the required finishing time.',
      eyebrow: 'ORD4567',
      subtitle: '230705-1234',
      instructions: [
        'Dock door is not assigner for <fulfilment stream> package(s) and <minutes> past schedule start time',
      ],
      tabs: [
        {
          label: 'Details',
          details: {
            created: 0,
            loadId: '125653535',
            packageId: 'PSD245678945',
            priority: 'Critical',
            orderId: 'ORD4567',
          },
        },
        {
          label: 'Activity',
        },
        {
          label: 'Comments',
        },
        {
          label: 'Related alerts',
        },
      ],
    },
  },
};

export const alertOverviewApp = AppComponent(appVM);

const outboundOrderAppVM: AppVM = {
  nav: {
    items: [
      { icon: 'search' },
      { icon: 'help' },
      { icon: 'settings' },
      { icon: 'mail' },
      { icon: 'account_circle' },
    ],
  },
  sidebar: {
    items: [
      { label: 'Dashboard', icon: 'dashboard' },
      { label: 'Alerts', icon: 'error' },
      { label: 'Process', icon: 'automation', active: true },
      { label: 'Inventory', icon: 'inventory_2' },
      { label: 'Workstations', icon: 'precision_manufacturing' },
      { label: 'Storage', icon: 'layers' },
    ],
  },
  outboundOrderOverviewPage: {
    title: 'Outbound order overview',
    day: 9, // Based on the date in the table
    pageSize: 10,
    charts: ['Total vs closed orders/hour', 'Timeliness/mins'],
    datatable: {
      titles: [
        'Order ID',
        'Created on',
        'RFT',
        'Order timeliness',
        'Order status',
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

export const outboundOrderOverviewApp = AppComponent(outboundOrderAppVM);

export const dialogPage = DialogPage({
  title: 'Are you sure?',
  reasons: [
    'Order is not needed',
    'Order is incorrect',
    'Order is a duplicate',
    'Other',
  ],
  cancelLabel: 'Cancel',
  confirmLabel: 'Confirm',
});
