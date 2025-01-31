import "@material/web/all.js";
import "@material/web/labs/navigationbar/navigation-bar.js";
import "@material/web/labs/navigationtab/navigation-tab.js";
import "@material/web/labs/segmentedbutton/outlined-segmented-button.js";
import "@material/web/labs/segmentedbuttonset/outlined-segmented-button-set.js";
import "@material/web/labs/card/elevated-card.js";
import "@material/web/select/outlined-select.js";
import "@material/web/select/select-option.js";
import "material-symbols";
import "./material.theme.css";

import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import { AppComponent } from "./app.component.ts";
import { alertOverviewAppVM } from "./pages/alert-overview/alert-overview.mock.ts";
import { outboundOrderOverviewAppVM } from "./pages/outbound-order-overview/outbound-order-overview.mock.ts";

if (typescaleStyles.styleSheet === undefined) {
  throw new TypeError("Expected CSSStyleSheet, got undefined");
}
document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

export const alertOverviewApp = AppComponent(alertOverviewAppVM);
export const outboundOrderOverviewApp = AppComponent(
  outboundOrderOverviewAppVM
);
