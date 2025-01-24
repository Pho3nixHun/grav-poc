import './carbon.theme.css';
import '@carbon/web-components/es';
import van from 'vanjs-core';
import { AlertItemPriority } from './app.model.ts';
import {AlertDetailsComponent} from './pages/alert-overview/components/alert-details/alert-details.component.ts'
import { Icon } from './icon-helper.util.ts';
import { NavComponent } from './components/nav/nav.component.ts';
import { SidebarComponent } from './components/sidebar/sidebar.component.ts';
import { RelativeTimePipe } from '_/pipes/relative-time/relative-time.pipe.ts';
const {
  h1,
  div,
  main,
  section,
  span,
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
    cdsContentSwitcherItem({ value: '2' },'Flat list'),
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
  )
);

const sideNav = SidebarComponent(appVM.sidebar);

const alertList = cdsLayer(
  cdsStack(
    { orientation: 'vertical', gap: '4' },
    ...appVM.alertOverviewPage.alertList.items.map((item) => 
      cdsExpandableTile(
        { },
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
              Icon('OverflowMenuVertical16', { slot: 'icon', style: 'color: black' }),
              span({ slot: 'tooltip-content' }, 'Options'),
              cdsOverflowMenuBody(
                cdsOverflowMenuItem('Acknowledge'),
                cdsOverflowMenuItem('Dismiss'),
                cdsOverflowMenuItem('View details'),
              ),
            ),
          )
        ),
        cdsTileBelowTheFoldContent(
          div(
            { class: 'flex flex-col gap-1 pl-2' },
            ...item.items.map((subItem) => cdsTile(
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
            ))
          )
        ),
      ),
    ),
  ),
);
const alertDetails = AlertDetailsComponent(appVM.alertOverviewPage.selected)

export const alertOverviewApp = main(
  header,
  section(
    { class: 'flex' },
    sideNav,
    cdsStack(
      { orientation: 'vertical', gap: '6', style: 'padding: 4rem 4rem 0 6rem; width: 100%' },
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
