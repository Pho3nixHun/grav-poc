import van from 'vanjs-core';
import { AlertItemPriority } from './app.model.ts';
import {AlertDetailsComponent} from './pages/alert-overview/components/alert-details/alert-details.component.ts'
import { Icon } from '_/carbon/icon-helper.util.ts';

const {
  div,
  p,
  ul,
  li,
  b,
  'cds-modal': cdsModal,
  'cds-modal-header': cdsModalHeader,
  'cds-modal-close-button': cdsModalCloseButton,
  'cds-dropdown': cdsDropdown,
  'cds-modal-label': cdsModalLabel,
  'cds-modal-heading': cdsModalHeading,
  'cds-modal-body': cdsModalBody,
  'cds-modal-body-content': cdsModalBodyContent,
  'cds-dropdown-item': cdsDropdownItem,
  'cds-modal-footer': cdsModalFooter,
  'cds-modal-footer-button': cdsModalFooterButton,
  'cds-button': cdsButton,
} = van.tags;

export const DialogPage = () => cdsModal(
  { open: 'open', preventClose: 'prevent-close' },
  cdsModalHeader(
    cdsModalCloseButton(),
    cdsModalHeading('Are you sure?'),
    cdsModalBody(
      cdsModalBodyContent(
        { description: 'description' },
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
      ),
      cdsDropdown({ label: 'Select a reason', titleText: 'Reason' },
        cdsDropdownItem({ value: 'one' }, 'Order is not needed'),
        cdsDropdownItem({ value: 'two' }, 'Order is incorrect'),
        cdsDropdownItem({ value: 'two' }, 'Order is duplicate'),
        cdsDropdownItem({ value: 'two' }, 'Other'),
      )
    ),
    cdsModalFooter(
      cdsModalFooterButton({ kind: 'secondary' }, 'Cancel'),
      cdsModalFooterButton({ kind: 'primary' }, 'Confirm')
    )
  )
);