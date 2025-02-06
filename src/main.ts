import './style.css';
import 'normalize.css';

import van from 'vanjs-core';
import { currentPath } from './state/current-path/current-path.state';
import {
  alertOverviewApp as carbonAlertOverviewApp,
  outboundOrderOverviewApp as carbonOutboundOrderOverviewApp,
  dialogApp as carbonDialogApp,
} from './carbon/main';
import * as Material from './material-3/main.ts';
import * as Carbon from './carbon/main.ts';

const {
  div,
  a,
} = van.tags;

const style = `
  border: 2px solid black;
  padding: 1rem 2rem;
  background: #1a202c;
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
`

const demo = () => {
  switch (currentPath.val) {
    case '/':
      return div(
        { class: 'flex flex-col gap-2 items-center pt-2' },
        a(
          { href: '/material/alert-overview', style },
          'Material/Alert Overview',
        ),
        a(
          { href: '/material/outbound-order-overview', style },
          'Material/Outbound Order Overview',
        ),
        a(
          { href: '/carbon/alert-overview', style },
          'Carbon/Alert Overview'
        ),
        a(
          { href: '/carbon/outbound-order-overview', style },
          'Carbon/Outbound Order Overview'
        ),
        a(
          { href: '/material/dialog', style },
          'Material/Dialog',
        ),
        a(
          { href: '/carbon/dialog', style },
          'Carbon/Dialog',
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
    case '/carbon/dialog':
      return carbonDialogApp;
  }
  return div('This isn`t the page you`re looking for');
};

van.add(document.body, demo);
