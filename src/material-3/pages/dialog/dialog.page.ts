import van from 'vanjs-core';
import { DialogPageVM } from '_/material-3/pages/dialog/dialog.model.ts';

const {
  main,
  h1,
  div,
  section,
  strong,
  b,
  table,
  thead,
  th,
  tbody,
  tr,
  td,
  ul,
  button,
  form,
  li,
  p,
  'md-checkbox': mdCheckbox,
  'md-outlined-segmented-button-set': mdOutlinedSegmentedButtonSet,
  'md-filled-select': mdFilledSelect,
  'md-select-option': mdSelectOption,
  'md-icon-button': mdIconButton,
  'md-icon': mdIcon,
  'md-outlined-icon-button': mdOutlinedIconButton,
  'md-dialog': mdDialog,
  'md-text-button': mdTextButton,
} = van.tags;

export const DialogPage = (vm: DialogPageVM) =>
  mdDialog(
    { open: true, type: 'alert' },
    div({ slot: 'headline' }, h1(vm.title)),
    form(
      { id: 'form-id', slot: 'content', method: 'dialog' },
      div(
        p(`Please confirm the cancellation of the selected outbound order:`),
        ul(
          li(`2/2 orders in Planned status`),
        ),
        p(
          b('Note:'),
          `Canceling the order removes it from planned orders and stops its processing. This action cannot be undone. Provide a reason to proceed.`,
        ),
      ),
      mdFilledSelect(
        {
          label: 'Reason',
          placeholder: 'Select a reason',
        },
        vm.reasons.map((reason) =>
          mdSelectOption(
            reason,
          )
        ),
      ),
    ),
    div(
      { slot: 'actions' },
      mdTextButton(vm.cancelLabel),
      mdTextButton({ form: 'form-id' }, vm.confirmLabel),
    ),
  );
