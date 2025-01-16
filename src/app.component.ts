import van from 'vanjs-core';
import { NavComponent } from './components/nav/nav.component.ts';
import { AppVM } from './app.model.ts';
import { SidebarComponent } from './components/sidebar/sidebar.component.ts';
import { AlertOverviewPage } from './pages/alert-overview/alert-overview.page.ts';

const {
  div,
  section,
  main,
} = van.tags;

export const AppComponent = (vm: AppVM) =>
  div(
    {
      class: 'light surface md-typescale-body-medium h-screen flex flex-col',
    },
    NavComponent(vm.nav),
    section(
      { class: 'flex flex-row flex-grow surface-high' },
      SidebarComponent(vm.sidebar),
      main(
        { class: 'flex flex-col flex-grow' },
        AlertOverviewPage(vm.alertOverviewPage),
      ),
    ),
  );
