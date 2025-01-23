import van from 'vanjs-core';
import {
  AlertlistItemVM,
  AlertlistSubItemVM,
} from './alertlist-item.model.ts';
import { RelativeTimePipe } from '_/pipes/relative-time/relative-time.pipe.ts';
import { AlertItemPriority } from '_/material-3/pages/alert-overview/models/alert-priority.emun.ts';

const {
  main,
  div,
  span,
  'md-icon-button': mdIconButton,
  'md-icon': mdIcon,
  'md-list-item': mdListItem,
} = van.tags;
const priorityToTextColorClass = (priority: AlertItemPriority): string =>
  ({
    [AlertItemPriority.P1]: 'text-critical',
    [AlertItemPriority.P2]: 'text-error',
    [AlertItemPriority.P3]: 'text-warning',
    [AlertItemPriority.P4]: 'text-info',
  })[priority] ?? '';

export const AlertlistSubItem = (vm: AlertlistSubItemVM) =>
  mdListItem(
    { type: 'button', class: 'pl-2 surface-low' },
    div(
      { class: 'flex flex-row gap-1' },
      mdIcon(
        { class: priorityToTextColorClass(vm.priority) },
        vm.priority,
      ),
      vm.label,
    ),
    div(
      { slot: 'supporting-text', class: 'flex flex-row gap-1' },
      span({ class: 'flex-grow' }, vm.secondaryLabel),
      span(RelativeTimePipe(vm.age)),
    ),
  );

export const AlertlistItem = (vm: AlertlistItemVM) =>
  main(
    { class: 'flex flex-col surface' },
    mdListItem(
      { type: 'button' },
      mdIcon(
        { slot: 'start', class: priorityToTextColorClass(vm.priority) },
        vm.priority,
      ),
      vm.label,
      div(
        { slot: 'supporting-text' },
        span(`Reported ${RelativeTimePipe(vm.reportedOn)}`),
        ' • ',
        span(`Updated ${RelativeTimePipe(vm.updatedOn)}`),
        ' • ',
        span(`Alerts: ${vm.items.length}`),
      ),
      mdIconButton(
        { slot: 'end' },
        mdIcon('more_vert'),
      ),
      mdIconButton(
        { slot: 'end' },
        mdIcon(
          vm.open ? 'keyboard_arrow_down' : 'keyboard_arrow_up',
        ),
      ),
    ),
    ...(vm.open ? [] : vm.items.map(AlertlistSubItem)),
  );
