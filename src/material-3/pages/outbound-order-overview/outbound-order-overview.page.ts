import van from 'vanjs-core';
import { OutboundOrderOverviewPageVM } from './outbound-order-overview.model.ts';

const {
  main,
  h1,
  div,
  section,
  'md-outlined-segmented-button-set': mdOutlinedSegmentedButtonSet,
  'md-filled-select': mdFilledSelect,
  'md-select-option': mdSelectOption,
  'md-icon': mdIcon,
  'md-outlined-icon-button': mdOutlinedIconButton,
} = van.tags;

export const OutboundOrderOverviewPage = (vm: OutboundOrderOverviewPageVM ) =>
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
      
    ),
  );
