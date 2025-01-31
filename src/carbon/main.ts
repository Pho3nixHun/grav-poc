import "./carbon.theme.css";
import "@carbon/web-components/es";
import { alertOverviewAppVM } from "./pages/alert-overview/alert-overview.mock.ts";
import { outboundOrderOverviewAppVM } from "./pages/outbound-order-overview/outbound-order-overview.mock.ts";
import { AppComponent } from "./app.component.ts";

export const alertOverviewApp = AppComponent(alertOverviewAppVM);

export const outboundOrderOverviewApp = AppComponent(
  outboundOrderOverviewAppVM
);

//TODO: Az alert pageben van material, kijavitani carbonra
