import { AppVM } from "./app.model.ts";
import { div, section, cdsStack } from "_/utils/component-helper.util.ts";
import { NavComponent } from "./components/nav/nav.component.ts";
import { SidebarComponent } from "./components/sidebar/sidebar.component.ts";
import { AlertOverviewPage } from "./pages/alert-overview/alert-overview.page.ts";
import { OutboundOrderOverviewPage } from "./pages/outbound-order-overview/outbound-order-overview.page.ts";

export const AppComponent = (vm: AppVM) =>
  div(
    {
      class: "light surface md-typescale-body-medium h-screen flex flex-col",
    },
    NavComponent(vm.nav),
    section(
      { class: "flex" },
      SidebarComponent(vm.sidebar),
      cdsStack(
        {
          orientation: "vertical",
          gap: "6",
          style: "padding: 4rem 4rem 0 6rem; width: 100%",
        },
        vm.alertOverviewPage ? AlertOverviewPage(vm.alertOverviewPage) : "",
        vm.outboundOrderOverviewPage
          ? OutboundOrderOverviewPage(vm.outboundOrderOverviewPage)
          : ""
      )
    )
  );
