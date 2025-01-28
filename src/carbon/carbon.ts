import van from 'vanjs-core';

const vanToTag = {
    "cdsHeader": "cds-header",
    "cdsHeaderName": "cds-header-name",
    "cdsHeaderGlobalAction": "cds-header-global-action",
    "cdsIconButton": "cds-icon-button",
    "cdsSideNav": "cds-side-nav",
    "cdsSideNavItems": "cds-side-nav-items",
    "cdsSideNavLink": "cds-side-nav-link",
    "cdsSideNavMenu": "cds-side-nav-menu",
    "cdsSideNavMenuItem": "cds-side-nav-menu-item",
    "cdsLayer": "cds-layer",
    "cdsContentSwitcher": "cds-content-switcher",
    "cdsContentSwitcherItem": "cds-content-switcher-item",
    "cdsTabs": "cds-tabs",
    "cdsTab": "cds-tab",
    "cdsTile": "cds-tile",
    "cdsClickableTile": "cds-clickable-tile",
    "cdsExpandableTile": "cds-expandable-tile",
    "cdsTileAboveTheFoldContent": "cds-tile-above-the-fold-content",
    "cdsTileBelowTheFoldContent": "cds-tile-below-the-fold-content",
    "cdsIconIndicator": "cds-icon-indicator",
    "cdsStack": "cds-stack",
    "cdsDropdown": "cds-dropdown",
    "cdsDropdownItem": "cds-dropdown-item",
    "cdsTextInput": "cds-text-input",
    "cdsTooltipContent": "cds-tooltip-content",
    "cdsOverflowMenu": "cds-overflow-menu",
    "cdsOverflowMenuBody": "cds-overflow-menu-body",
    "cdsOverflowMenuItem": "cds-overflow-menu-item",
    "cdsModal": "cds-modal",
    "cdsModalHeader": "cds-modal-header",
    "cdsModalCloseButton": "cds-modal-close-button",
    "cdsModalLabel": "cds-modal-label",
    "cdsModalHeading": "cds-modal-heading",
    "cdsModalBody": "cds-modal-body",
    "cdsModalBodyContent": "cds-modal-body-content",
    "cdsDropdrown": "cds-dropdrown"
}

export default Object.entries(vanToTag)
    .reduce<Record<keyof typeof vanToTag, Element>>(
        (acc, [v, t]) => ({
            ...acc, [v]: van.tags[t] 
        }), {}
    );