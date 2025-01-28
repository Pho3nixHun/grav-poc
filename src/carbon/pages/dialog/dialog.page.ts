import van from 'vanjs-core';
import { AlertItemPriority } from './app.model.ts';
import {AlertDetailsComponent} from './pages/alert-overview/components/alert-details/alert-details.component.ts'
import { Icon } from '_/carbon/icon-helper.util.ts';

const {
  h1,
  div,
  main,
  section,
  span
} = van.tags;
import {
  cdsModel,
  cdsModalHeader,
  cdsModalCloseButton,
  
} from '_/carbon/carbon.ts';

/*
    <cds-modal open prevent-close>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Account resources</cds-modal-label>
        <cds-modal-heading>Add a custom domain</cds-modal-heading>
      </cds-modal-header>
      <cds-modal-body>
        <cds-modal-body-content description>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
        </cds-modal-body-content>

        <cds-dropdown label="Dropdown" title-text="Dropdown">
          <cds-dropdown-item value="one">One</cds-dropdown-item>
          <cds-dropdown-item value="two">Two</cds-dropdown-item>
        </cds-dropdown>
      
      </cds-modal-body>
      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary"
          >Cancel</cds-modal-footer-button
        >
        <cds-modal-footer-button>Add</cds-modal-footer-button>
      </cds-modal-footer>
    </cds-modal>
*/

export const DialogPage = 