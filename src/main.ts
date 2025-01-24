import './style.css';
import 'normalize.css';

import van from 'vanjs-core';
import { currentPath } from './state/current-path/current-path.state';
import { alertOverviewApp as materialAlertOverviewApp } from './material-3/main';
import { outboundOrderOverviewApp as materialOutboundOrderOverviewApp } from './material-3/main';
import { alertOverviewApp as carbonAlertOverviewApp } from './carbon/main';

const {
  div,
  a
} = van.tags;

const demo = () => {
  switch (currentPath.val) {
    case '/':
      return div(
        { class: 'flex flex-col gap-2 items-center' },
        a(
          { href: '/material/alert-overview' },
          'Material/Alert Overview'
        ),
        a(
          { href: '/material/outbound-order-overview' },
          'Material/Outbound Order Overview'
        ),
        a(
          { href: '/carbon/alert-overview' },
          'Carbon/Alert Overview'
        )
      )
    case '/material/alert-overview':
      return materialAlertOverviewApp;
    case '/material/outbound-order-overview':
      return materialOutboundOrderOverviewApp;
    case '/carbon/alert-overview':
      return carbonAlertOverviewApp;
  }
  return div('This isn`t the page you`re looking for')
}

van.add(document.body, demo);