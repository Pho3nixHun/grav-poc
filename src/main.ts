import './style.css';
import 'normalize.css';

import van from 'vanjs-core';
import { currentPath } from './state/current-path/current-path.state';
import { alertOverviewApp as carbonAlertOverviewApp } from './carbon/main';
import { outboundOrderOverviewApp as carbonOutboundOrderOverviewApp } from './carbon/main';
import * as Material from './material-3/main.ts';

const {
  div,
  a,
} = van.tags;

const demo = () => {
  switch (currentPath.val) {
    case '/':
      return div(
        { class: 'flex flex-col gap-2 items-center' },
        a(
          { href: '/material/alert-overview' },
          'Material/Alert Overview',
        ),
        a(
          { href: '/material/outbound-order-overview' },
          'Material/Outbound Order Overview',
        ),
        a(
          { href: '/carbon/alert-overview' },
          'Carbon/Alert Overview'
        ),
        a(
          { href: '/carbon/outbound-order-overview' },
          'Carbon/Outbound Order Overview'
        ),
        a(
          { href: '/material/dialog' },
          'Material/Dialog',
        ),
      );
    case '/material/alert-overview':
      return Material.alertOverviewApp;
    case '/material/outbound-order-overview':
      return Material.outboundOrderOverviewApp;
    case '/carbon/alert-overview':
      return carbonAlertOverviewApp;
    case '/carbon/outbound-order-overview':
      return carbonOutboundOrderOverviewApp;
    case '/material/dialog':
      return Material.dialogPage;
  }
  return div('This isn`t the page you`re looking for');
};

van.add(document.body, demo);
