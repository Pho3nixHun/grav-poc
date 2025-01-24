import { NavVM } from './components/nav/nav.model.ts';
import { SidebarVM } from './components/sidebar/sidebar.model.ts';
import { AlertOverviewPageVM } from './pages/alert-overview/alert-overview.model.ts';
import { OutboundOrderOverviewPageVM } from './pages/outbound-order-overview/outbound-order-overview.model.ts';

export * from './components/nav/nav.model.ts';
export * from './components/sidebar/sidebar.model.ts';
export * from './pages/alert-overview/alert-overview.model.ts';
export interface AppVM {
  nav: NavVM;
  sidebar: SidebarVM;
  alertOverviewPage?: AlertOverviewPageVM;
  outboundOrderOverviewPage?: OutboundOrderOverviewPageVM
}
