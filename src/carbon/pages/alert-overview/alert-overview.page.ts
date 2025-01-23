import van from 'vanjs-core';
import { AlertOverviewPageVM } from './alert-overview.model.ts';
import { AlertListGroupedComponent } from './components/alertlist-grouped/alertlist-grouped.component.ts';
import { AlertDetailsComponent } from '_/material-3/pages/alert-overview/components/alert-details/alert-details.component.ts';

const {
  main,
  h1,
  div,
  section,
  'md-outlined-segmented-button-set': mdOutlinedSegmentedButtonSet,
  'md-outlined-segmented-button': mdOutlinedSegmentedButton,
  'md-filled-select': mdFilledSelect,
  'md-select-option': mdSelectOption,
  'md-icon': mdIcon,
  'md-outlined-icon-button': mdOutlinedIconButton,
} = van.tags;

export const AlertOverviewPage = (vm: AlertOverviewPageVM) =>
  main(
    { class: 'flex flex-col flex-grow gap-1 px-3' },
    h1(
      { class: 'md-typescale-display-medium' },
      vm.title,
    ),
    section(
      { class: 'flex flex-row items-center' },
      div(
        { class: 'flex-grow' },
        mdOutlinedSegmentedButtonSet(
          {
            class: 'max-w-fit',
          },
          ...vm.viewModes.map((viewModeVM) =>
            mdOutlinedSegmentedButton(
              {
                label: viewModeVM.label,
                selected: viewModeVM.selected ? 'true' : '',
              },
            )
          ),
        ),
      ),
      div(
        { class: 'flex flex-row gap-2 items-center' },
        mdFilledSelect(
          mdSelectOption(
            { selected: 'selected' },
            'Sort by severity ascending',
          ),
        ),
        mdFilledSelect(
          {
            label: 'Search',
          },
          mdIcon(
            { slot: 'leading-icon' },
            'search',
          ),
        ),
        mdOutlinedIconButton(
          mdIcon(
            'filter_alt',
          ),
        ),
      ),
    ),
    section(
      { class: 'flex flex-row gap-2 surface-high overflow-x-auto' },
      AlertListGroupedComponent(vm.alertList),
      AlertDetailsComponent(vm.selected),
    ),
  );
