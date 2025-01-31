import { v4 as uuid } from "uuid";
import { AlertDetailsVM } from "./alert-details.model.ts";
import { AlertItemPriority } from "../../models/alert-priority.enum.ts";
import { Icon } from "_/carbon/icon-helper.util.ts";
import {
  main,
  section,
  div,
  h2,
  h5,
  h4,
  p,
  table,
  tr,
  td,
  cdsTab,
  cdsTabs,
  cdsIconButton,
} from "_/utils/component-helper.util.ts";

export const AlertDetailsComponent = (vm: AlertDetailsVM) => {
  const id = uuid();
  const activeTab = vm.tabs.find((tabVM) => tabVM.selected);
  const activeTabIndex = activeTab ? vm.tabs.indexOf(activeTab) : 0;
  return main(
    { id, class: "flex flex-col flex-grow p-2 surface" },
    section(
      { class: "card-header flex flex-row" },
      div(
        { class: "flex flex-col flex-grow" },
        h5({ class: "md-typescale-title-small-bold" }, vm.eyebrow),
        h2(vm.title),
        h5({ class: "md-typescale-title-small" }, vm.subtitle)
      ),
      div(
        { class: "flex items-center flex-row gap-2" },
        "Snooze",
        Icon("Time32", { slot: "icon" })
      )
    ),
    section(
      { class: "card-content flex-grow flex flex-col gap-2 pt-2" },
      div(
        h4({ class: "md-typescale-title-small-bold" }, "Description"),
        p({ class: "max-w-ch-120" }, vm.description)
      ),
      cdsTabs(
        {
          activeTabIndex,
        },
        ...vm.tabs.map((tabVM, index) =>
          cdsTab(
            {
              id: `${id}-tab-${index}`,
              ariaControls: `${id}-panel-${index}`,
            },
            tabVM.label
          )
        )
      ),
      vm.tabs.map((_tabVM, index) =>
        div(
          {
            id: `${id}-panel-${index}`,
            role: "tabpanel",
            ariaLabeledBy: `${id}-tab-${index}`,
            hidden: activeTabIndex !== index ? "hidden" : "",
          },
          table(
            { class: "py-2" },
            tr(
              td({ class: "pr-3 md-typescale-label-large" }, "Priority"),
              td(
                div(
                  { class: "px-2 flex items-center" },
                  cdsIconButton(
                    { kind: "ghost" },
                    "Critical",
                    Icon("SoftwareResource32", {
                      slot: "icon",
                      class: "text-critical",
                    })
                  )
                )
              )
            ),
            tr(
              td({ class: "pr-3 md-typescale-label-large" }, "Order"),
              td(
                cdsIconButton(
                  { kind: "ghost" },
                  "ORD4567",
                  Icon("Launch32", { slot: "icon" })
                )
              )
            ),
            tr(
              td({ class: "pr-3 md-typescale-label-large" }, "Load"),
              td(
                cdsIconButton(
                  { kind: "ghost" },
                  "125453535",
                  Icon("Launch32", { slot: "icon" })
                )
              )
            ),
            tr(
              td({ class: "pr-3 md-typescale-label-large" }, "Package"),
              td(
                cdsIconButton(
                  {
                    kind: "ghost",
                    class: "flex flex-row items-center gap-2 justify-center",
                  },
                  "PSD245678945",
                  Icon("Launch32")
                )
              )
            )
          ),
          h4(
            { class: "md-typescale-title-small-bold" },
            "Instructions for resolving"
          ),
          ...vm.instructions.map((instruction) =>
            p({ class: "max-w-ch-120" }, instruction)
          )
        )
      )
    )
  );
};
