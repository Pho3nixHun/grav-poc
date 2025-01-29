import './carbon.theme.css';
import '@carbon/web-components/es';
import van from 'vanjs-core';
import { AlertItemPriority } from './app.model.ts';

import { AlertDetailsComponent } from './pages/alert-overview/components/alert-details/alert-details.component.ts';
import { Icon } from './icon-helper.util.ts';
import { NavComponent } from './components/nav/nav.component.ts';
import { SidebarComponent } from './components/sidebar/sidebar.component.ts';
import { RelativeTimePipe } from '_/pipes/relative-time/relative-time.pipe.ts';
import { OrderStatus } from './pages/outbound-order-overview/outbound-order-overview.model.ts';
import { format } from "https://esm.sh/date-fns@4.1.0";
import { GroupedBarChart } from '@carbon/charts'
import '@carbon/charts/styles.css'

const {
  h1,
  div,
  main,
  section,
  span,
  table,
  thead,
  tr,
  td,
  th,
  tbody,
  ul,
  li,
  button,
  'cds-header': cdsHeader,
  'cds-header-name': cdsHeaderName,
  'cds-header-global-action': cdsHeaderGlobalAction,
  'cds-icon-button': cdsIconButton,
  'cds-side-nav': cdsSideNav,
  'cds-side-nav-items': cdsSideNavItems,
  'cds-side-nav-link': cdsSideNavLink,
  'cds-side-nav-menu': cdsSideNavMenu,
  'cds-side-nav-menu-item': cdsSideNavMenuItem,
  'cds-layer': cdsLayer,
  'cds-content-switcher': cdsContentSwitcher,
  'cds-content-switcher-item': cdsContentSwitcherItem,
  'cds-tabs': cdsTabs,
  'cds-tab': cdsTab,
  'cds-tile': cdsTile,
  'cds-clickable-tile': cdsClickableTile,
  'cds-expandable-tile': cdsExpandableTile,
  'cds-tile-above-the-fold-content': cdsTileAboveTheFoldContent,
  'cds-tile-below-the-fold-content': cdsTileBelowTheFoldContent,
  'cds-icon-indicator': cdsIconIndicator,
  'cds-stack': cdsStack,
  'cds-dropdown': cdsDropdown,
  'cds-dropdown-item': cdsDropdownItem,
  'cds-text-input': cdsTextInput,
  'cds-tooltip-content': cdsTooltipContent,
  'cds-overflow-menu': cdsOverflowMenu,
  'cds-overflow-menu-body': cdsOverflowMenuBody,
  'cds-overflow-menu-item': cdsOverflowMenuItem,
  'cds-checkbox': cdsCheckbox,
  'cds-date-picker': cdsDatePicker,
  'cds-date-picker-input': cdsDatePickerInput,
  'cds-tag': cdsTag,
} = van.tags;

const appVM = {
  nav: {
    items: [
      { icon: 'Search20', label: 'Search' },
      { icon: 'Help20', label: 'Help' },
      { icon: 'Settings20', label: 'Settings' },
      { icon: 'Notification20', label: 'Notifications' },
      { icon: 'UserAvatar20', label: 'Profile' },
    ],
  },
  sidebar: {
    items: [
      { label: 'Dashboard', icon: 'Template16' },
      { label: 'Alerts', icon: 'Warning16', active: true },
      { label: 'Inbox', icon: 'MessageQueue16' },
      { label: 'Reports', icon: 'Calendar16' },
      { label: 'Map', icon: 'Map16' },
      {
        label: 'Process',
        icon: 'FlowData16',
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
        ],
      },
      {
        label: 'Inventory',
        icon: 'Box16',
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' },
        ],
      },
      {
        label: 'Workstations',
        icon: 'Screen16',
        items: [
          { label: 'Item 1' },
        ],
      },
      {
        label: 'Storage',
        icon: 'Layers16',
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
        ],
      },
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
              label: 'Alert label',
              secondaryLabel: 'secondary label',
              age: Date.now() - 5 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: 'Alert label',
              secondaryLabel: 'secondary label',
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
              label: 'Alert label',
              secondaryLabel: 'secondary label',
              age: Date.now() - 5 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: 'Alert label',
              secondaryLabel: 'secondary label',
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
              label: 'Alert label',
              secondaryLabel: 'secondary label',
              age: Date.now() - 5 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: 'Alert label',
              secondaryLabel: 'secondary label',
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
              label: 'Alert label',
              secondaryLabel: 'secondary label',
              age: Date.now() - 5 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P3,
              label: 'Alert label',
              secondaryLabel: 'secondary label',
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
              label: 'Alert label',
              secondaryLabel: 'secondary label',
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: 'Alert label',
              secondaryLabel: 'secondary label',
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
              label: 'Alert label',
              secondaryLabel: 'secondary label',
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: 'Alert label',
              secondaryLabel: 'secondary label',
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
              label: 'Alert label',
              secondaryLabel: 'secondary label',
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: 'Alert label',
              secondaryLabel: 'secondary label',
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
              label: 'Alert label',
              secondaryLabel: 'secondary label',
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: 'Alert label',
              secondaryLabel: 'secondary label',
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
              label: 'Alert label',
              secondaryLabel: 'secondary label',
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: 'Alert label',
              secondaryLabel: 'secondary label',
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
              label: 'Alert label',
              secondaryLabel: 'secondary label',
              age: Date.now() - 7 * 60 * 1000,
            },
            {
              priority: AlertItemPriority.P4,
              label: 'Alert label',
              secondaryLabel: 'secondary label',
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

const header = NavComponent(appVM.nav);

const filters = div(
  { class: 'flex flex-row' },
  cdsContentSwitcher(
    { value: '1', style: 'width: fit-content' },
    cdsContentSwitcherItem({ value: '1', selected: '' }, 'Grouped'),
    cdsContentSwitcherItem({ value: '2' }, 'Flat list'),
  ),
  div({ class: 'flex-1' }),
  div(
    { class: 'flex flex-row gap-2 justify-end' },
    cdsDropdown(
      { value: '1' },
      cdsDropdownItem({ value: '1' }, 'Sort by severity: high to low'),
      cdsDropdownItem({ value: '2' }, 'Sort by severity: low to high'),
      cdsDropdownItem({ value: '3' }, 'Sort by age: newest to oldest'),
      cdsDropdownItem({ value: '4' }, 'Sort by age: oldest to newest'),
    ),
    cdsTextInput({ placeholder: 'Search' }),
    cdsIconButton(
      { kind: 'secondary', 'label': 'Filter' },
      Icon('Filter16', { slot: 'icon' }),
      span({ slot: 'tooltip-content' }, 'Filter'),
    ),
  ),
);

const sideNav = SidebarComponent(appVM.sidebar);

const alertList = cdsLayer(
  cdsStack(
    { orientation: 'vertical', gap: '4' },
    ...appVM.alertOverviewPage.alertList.items.map((item) =>
      cdsExpandableTile(
        {},
        cdsTileAboveTheFoldContent(
          div(
            { class: 'flex flex-row items-center gap-1 pr-3' },
            Icon('Warning16'),
            cdsStack(
              { orientation: 'vertical' },
              div(item.label),
              div(
                { class: 'supporting-text' },
                span(`Reported ${RelativeTimePipe(item.reportedOn)}`),
                ' • ',
                span(`Updated ${RelativeTimePipe(item.updatedOn)}`),
                ' • ',
                span(`Alerts: ${item.items.length}`),
              ),
            ),
            cdsOverflowMenu(
              { onclick: (e) => e.stopPropagation(), kind: 'secondary' },
              Icon('OverflowMenuVertical16', {
                slot: 'icon',
                style: 'color: black',
              }),
              span({ slot: 'tooltip-content' }, 'Options'),
              cdsOverflowMenuBody(
                cdsOverflowMenuItem('Acknowledge'),
                cdsOverflowMenuItem('Dismiss'),
                cdsOverflowMenuItem('View details'),
              ),
            ),
          ),
        ),
        cdsTileBelowTheFoldContent(
          div(
            { class: 'flex flex-col gap-1 pl-2' },
            ...item.items.map((subItem) =>
              cdsTile(
                { class: 'py-2' },
                div(
                  { class: 'flex flex-row gap-1' },
                  Icon('Warning16', { class: 'text-critical' }),
                  subItem.label,
                ),
                div(
                  { class: 'flex flex-row gap-1' },
                  span({ class: 'flex-grow' }, subItem.secondaryLabel),
                  span(RelativeTimePipe(subItem.age)),
                ),
              )
            ),
          ),
        ),
      )
    ),
  ),
);
const alertDetails = AlertDetailsComponent(appVM.alertOverviewPage.selected);

export const alertOverviewApp = main(
  header,
  section(
    { class: 'flex' },
    sideNav,
    cdsStack(
      {
        orientation: 'vertical',
        gap: '6',
        style: 'padding: 4rem 4rem 0 6rem; width: 100%',
      },
      h1(appVM.alertOverviewPage.title),
      filters,
      section(
        { class: 'flex' },
        alertList,
        alertDetails,
      ),
    ),
  ),
);


const outboundVM = {
  nav: {
    items: [
      { icon: 'Search20', label: 'Search' },
      { icon: 'Help20', label: 'Help' },
      { icon: 'Settings20', label: 'Settings' },
      { icon: 'Notification20', label: 'Notifications' },
      { icon: 'UserAvatar20', label: 'Profile' },
    ],
  },
  sidebar: {
    items: [
      { label: 'Dashboard', icon: 'Template16' },
      { label: 'Alerts', icon: 'Warning16' },
      {
        label: 'Process',
        icon: 'FlowData16',
        active: true,
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
        ],
      },
      {
        label: 'Inventory',
        icon: 'Box16',
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' },
        ],
      },
      {
        label: 'Workstations',
        icon: 'Screen16',
        items: [
          { label: 'Item 1' },
        ],
      },
      {
        label: 'Storage',
        icon: 'Layers16',
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
        ],
      },
    ],
  },
  outboundOrderOverviewPage: {
    title: 'Outbound order overview',
    day: 9,
    pageSize: 10,
    charts: ['Total vs closed orders/hour', 'Timeliness/mins'],
    datatable: {
      titles: ['Order ID', 'Created on', 'RFT', 'Order timeliness', 'Order status'],
      orders: [
        {
          selected: false,
          createdOn: 1686278460000,
          rft: 1686282060000,
          timeliness: 10,
          status: OrderStatus.Picking
        },
        {
          selected: false,
          createdOn: 1686278520000,
          rft: 1686282120000,
          status: OrderStatus.Picking
        },
        {
          selected: false,
          createdOn: 1686278700000,
          rft: 1686282300000,
          status: OrderStatus.Picking
        },
        {
          selected: false,
          createdOn: 1686278700000,
          rft: 1686282300000,
          status: OrderStatus.Picking
        },
        {
          selected: false,
          createdOn: 1686279000000,
          rft: 1686282600000,
          status: OrderStatus.Picking
        },
        {
          selected: false,
          createdOn: 1686279300000,
          rft: 1686282900000,
          status: OrderStatus.Picking
        },
        {
          selected: false,
          createdOn: 1686279300000,
          rft: 1686282900000,
          status: OrderStatus.Picking
        },
        {
          selected: false,
          createdOn: 1686279300000,
          rft: 1686282900000,
          status: OrderStatus.Assigned
        },
        {
          selected: true,
          createdOn: 1686279360000,
          rft: 1686282960000,
          timeliness: 6,
          status: OrderStatus.Released
        },
        {
          selected: true,
          createdOn: 1686279360000,
          rft: 1686282960000,
          status: OrderStatus.Planned
        },
      ]
    },
  }
};

const outboundSideNav = SidebarComponent(outboundVM.sidebar)
const outboundFilters = div(
  { class: 'flex flex-row', style: 'justify-content: space-between' },
  div(
    { class: 'flex flex-row items-center gap-2' },
    cdsIconButton(
      { kind: 'first' },
      Icon('ChevronLeft16', { slot: 'icon' }),
    ),
    cdsDatePicker({ label: 'Date range' },
      cdsDatePickerInput({
        placeholder: "mm/dd/yyyy"
      },
      )
    ),
    cdsIconButton(
      { kind: 'first' },
      Icon('ChevronRight16', { slot: 'icon' }),
    ),
  ),
  div(
    { class: 'flex flex-row gap-2' },
    cdsTextInput({ placeholder: 'Search' }),
    cdsIconButton(
      { kind: 'first', 'label': 'Filter' },
      Icon('Filter16', { slot: 'icon' }),
      span({ slot: 'tooltip-content' }, 'Filter'),
    ),
    cdsOverflowMenu(
      cdsIconButton(
        { kind: 'first', 'label': 'Options' },
        Icon('OverflowMenuHorizontal32', { slot: 'icon', kind: 'first' }),
        span({ slot: "tooltip-content" }, "Options"),
      ),
      cdsOverflowMenuBody(
        { flipped: "true" },
        cdsOverflowMenuItem('Rush order'),
        cdsOverflowMenuItem('Cancel order'),
      )
    )
  )
)


export const outboundOrderOverviewApp = main(
  header,
  section(
    { class: 'flex' },
    outboundSideNav,
    cdsStack(
      { orientation: 'vertical', gap: '6', style: 'padding: 4rem 4rem 0 6rem; width: 100%' },
      h1(outboundVM.outboundOrderOverviewPage.title),
      outboundFilters,
      div(
        { level: '2', class: 'flex flex-row gap-2' },
        cdsLayer(
          { id: 'leftChart', level: '2', class: 'flex-1 p-2 px-3' }),
        cdsLayer(
          { id: 'rightChart', level: '2', class: 'flex-1 p-2 px-3' }),
      ),
      cdsLayer(
        { level: '2', class: 'flex flex-row gap-2 surface-high overflow-x-auto' },
        table(
          { class: 'w-full' },
          thead(
            tr(
              th({ class: "px-3", style: 'width: 6rem;' },
                cdsCheckbox()),
              outboundVM.outboundOrderOverviewPage.datatable.titles.map(header =>
                th(header)
              )
            )
          ),
          tbody(
            outboundVM.outboundOrderOverviewPage.datatable.orders.map(order =>
              tr(
                td(
                  { class: "px-3" },
                  cdsCheckbox({ checked: order.selected ?? false })),
                td({ class: "text-id", style: 'width: 13rem;' }, 'id'),
                td({ style: 'width: 13rem;' },
                  div(
                    { class: 'flex flex-row items-center' },
                    format(
                      new Date(order.createdOn),
                      'dd MMMM yyyy, HH:mm'
                    ),
                    cdsTag({size: 'md', title: 'Just now', type: 'blue', filter: 'filter' }, 'Just now')
                  )
                ),
                td({ style: 'width: 13rem;' }, format(
                  new Date(order.rft),
                  'dd MMMM yyyy, HH:mm'
                )),
                td(
                  { style: 'width: 13rem;', class: order.timeliness ? 'text-red' : '' },
                  order.timeliness ? `+${order.timeliness}m` : '--'
                ),
                td({ style: 'width: 13rem;' }, order.status)
              )
            )
          )
        )
      ),
      ul({ class: 'flex items-center gap-2', style: 'margin-left:auto' },
        li(
          cdsDropdown(
            { value: '1' },
            cdsDropdownItem({ value: '1' }, 'Rows per page: 10'),
            cdsDropdownItem({ value: '2' }, 'Rows per page: 50'),
            cdsDropdownItem({ value: '3' }, 'Rows per page: 100'),
          ),
        ),
        li('1 - 10 OF 10'),
        li(
          cdsIconButton(
            { kind: 'first' },
            Icon('PageFirst16', { slot: 'icon' }),
          ),
        ),
        li(
          cdsIconButton(
            { kind: 'first' },
            Icon('ChevronLeft16', { slot: 'icon' }),
          ),
        ),
        li(
          cdsIconButton(
            { kind: 'first' },
            Icon('ChevronRight16', { slot: 'icon' }),
          ),
        ),
        li(
          cdsIconButton(
            { kind: 'first' },
            Icon('PageLast16', { slot: 'icon' }),
          ),
        )
      ),
    )
  )
)

document.addEventListener('DOMContentLoaded', () => {
  const leftChart = document.getElementById('leftChart');
  const rightChart = document.getElementById('rightChart');

  const data = [
    {
      group: 'Dataset 1',
      date: '2023-01-01',
      value: 10000
    },
    {
      group: 'Dataset 1',
      date: '2023-01-02',
      value: 65000
    },
    {
      group: 'Dataset 1',
      date: '2023-01-03',
      value: 30000
    },
    {
      group: 'Dataset 1',
      date: '2023-01-06',
      value: 49213
    },
    {
      group: 'Dataset 1',
      date: '2023-01-07',
      value: 51213
    },
    {
      group: 'Dataset 2',
      date: '2023-01-01',
      value: 8000
    },
    {
      group: 'Dataset 2',
      date: '2023-01-02',
      value: 67000
    },
    {
      group: 'Dataset 2',
      date: '2023-01-03',
      value: 15000
    },
    {
      group: 'Dataset 2',
      date: '2023-01-06',
      value: 51213
    },
    {
      group: 'Dataset 2',
      date: '2023-01-07',
      value: 45213
    }
  ]

  const options = {
    title: 'Vertical grouped bar (time series)',
    axes: {
      left: {
        mapsTo: 'value'
      },
      bottom: {
        mapsTo: 'date',
        scaleType: 'time'
      }
    },
    color: {
      pairing: {
        option: 2
      },
      scale: {
        'Dataset 1': '#4483AA',
        'Dataset 2': '#6BACCC'
      }
    },
    height: '300px',
    width: '400px',
  }

  new GroupedBarChart(leftChart, {
    data,
    options
  })

  new GroupedBarChart(rightChart, {
    data,
    options
  })
});