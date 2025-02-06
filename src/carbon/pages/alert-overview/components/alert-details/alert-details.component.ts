import van from 'vanjs-core';
import { v4 as uuid } from 'uuid';

import { AlertDetailsVM } from './alert-details.model.ts';
import { Icon } from '_/carbon/icon-helper.util.ts';

const {
  div,
  h2,
  h4,
  h5,
  main,
  section,
  table,
  tr,
  td,
  p,
  'cds-layer': cdsLayer,
  'cds-tabs': cdsTabs,
  'cds-tab': cdsTab,
  'cds-button': cdsButton,
} = van.tags;

export const AlertDetailsComponent = (vm: AlertDetailsVM) => {
  const id = uuid();
  const activeTab = vm.tabs.find((tabVM) => tabVM.selected);
  const activeTabIndex = activeTab ? vm.tabs.indexOf(activeTab) : 0;
  return cdsLayer(
    { id, class: 'flex flex-col flex-grow p-2 surface', level: '2' },
    section(
      { class: 'card-header flex flex-row' },
      div(
        { class: 'flex flex-col flex-grow' },
        h5({ class: 'p-none m-none' }, vm.eyebrow),
        h2({ class: 'p-none m-none' }, vm.title),
        h5({ class: 'p-none m-none' }, vm.subtitle),
      ),
      cdsButton(
        { kind: 'tertiary', size: 'md', tooltipText: 'Tooltip-text' },
        Icon('Time16', { slot: 'icon'}),
        'Snooze',
      ),
    ),
    section(
      { class: 'card-content flex-grow flex flex-col gap-2 pt-2' },
      div(
        h4(
          {  },
          'Description',
        ),
        p(
          { class: 'max-w-ch-120' },
          vm.description,
        ),
      ),
      cdsTabs(
        {
          triggerContent: 'Select an item',
          value: '0',
        },
        ...vm.tabs.map((tabVM, index) =>
          cdsTab(
            {
              id: `${id}-tab-${index}`,
              target: `${id}-panel-${index}`,
              value: `${index}`,
            },
            tabVM.label,
          )
        ),
      ),
      vm.tabs.map((_tabVM, index) =>
        div(
          {
            id: `${id}-panel-${index}`,
            role: 'tabpanel',
            ariaLabeledBy: `${id}-tab-${index}`,
            hidden: activeTabIndex !== index ? 'hidden' : '',
          },
          table(
            { class: 'py-2' },
            tr(
              td(
                { class: 'pr-3 b-none' },
                'Priority',
              ),
              td(
                { class: 'b-none' },
                div(
                  { class: 'px-2 flex items-center gap-1 b-none' },
                  'Critical',
                  Icon('Warning16', { class: 'text-critical' }),
                ),
              ),
            ),
            tr(
              td({ class: 'pr-3 b-none' }, 'Order'),
              td(
                { class: 'b-none' },
                cdsButton(
                  { kind: 'tertiary', size: 'sm', tooltipText: 'Tooltip-text' },
                  'Button-label',
                  Icon('Launch16', { slot: 'icon'}),
                ),
              ),
            ),
            tr(
              td({ class: 'pr-3 b-none' }, 'Load'),
              td(
                { class: 'b-none' },
                cdsButton(
                  { kind: 'tertiary', size: 'sm', tooltipText: 'Tooltip-text' },
                  'Button-label',
                  Icon('Launch16', { slot: 'icon'}),
                ),
              ),
            ),
            tr(
              td({ class: 'pr-3 b-none' }, 'Package'),
              td(
                { class: 'b-none' },
                cdsButton(
                  { kind: 'tertiary', size: 'sm', tooltipText: 'Tooltip-text' },
                  'Button-label',
                  Icon('Launch16', { slot: 'icon'}),
                ),
              ),
            ),
          ),
          h4(
            { class: '-bold' },
            'Instructions for resolving',
          ),
          ...vm.instructions.map((instruction) =>
            p(
              { class: 'max-w-ch-120' },
              instruction,
            )
          ),
        )
      ),
    ),
  );
};
