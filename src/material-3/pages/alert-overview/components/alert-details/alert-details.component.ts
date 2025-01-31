import { v4 as uuid } from "uuid";
import { AlertDetailsVM } from "./alert-details.model.ts";
import { AlertItemPriority } from "../../models/alert-priority.enum.ts";
import {
  main,
  section,
  h2,
  h4,
  h5,
  p,
  div,
  table,
  tr,
  td,
  mdTabs,
  mdIcon,
  mdPrimaryTab,
  mdTextButton,
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
      mdTextButton(
        mdIcon({ slot: "icon", class: "minw-" }, "schedule"),
        "Snooze"
      )
    ),
    section(
      { class: "card-content flex-grow flex flex-col gap-2 pt-2" },
      div(
        h4({ class: "md-typescale-title-small-bold" }, "Description"),
        p({ class: "max-w-ch-120" }, vm.description)
      ),
      mdTabs(
        {
          activeTabIndex,
        },
        ...vm.tabs.map((tabVM, index) =>
          mdPrimaryTab(
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
                  "Critical",
                  mdIcon(
                    { slot: "icon", class: "text-critical" },
                    AlertItemPriority.P1
                  )
                )
              )
            ),
            tr(
              td({ class: "pr-3 md-typescale-label-large" }, "Order"),
              td(
                mdTextButton(
                  { trailingIcon: "trailingIcon" },
                  "ORD4567",
                  mdIcon({ slot: "icon" }, "open_in_new")
                )
              )
            ),
            tr(
              td({ class: "pr-3 md-typescale-label-large" }, "Load"),
              td(
                mdTextButton(
                  { trailingIcon: "trailingIcon" },
                  "125453535",
                  mdIcon({ slot: "icon" }, "open_in_new")
                )
              )
            ),
            tr(
              td({ class: "pr-3 md-typescale-label-large" }, "Package"),
              td(
                mdTextButton(
                  { trailingIcon: "trailingIcon" },
                  "PSD245678945",
                  mdIcon({ slot: "icon" }, "open_in_new")
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
