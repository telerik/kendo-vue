---
title: Switch API
description: "API Index | Switch"
api_reference: true
slug: api_switchcomponent_wrapper
---

# Switch

## Directive

`kendo-switch`

## Props

### checked `Boolean`

The checked state of the Switch ([`checked` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/switch/configuration/checked)).

### enabled `Boolean`

If `enabled` is set to `false`, the Switch will be disabled and will not allow user interaction ([`enabled` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/switch/configuration/enabled)).

### enable `deprecated`

If `enable` is set to `false`, the Switch will be disabled and will not allow user interaction. Use [`enabled`](#toc-enabled) instead.

### readonly `Boolean`

If `readonly` is set to `true`, the Switch will render as read-only ([`readonly` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/switch/configuration/readonly)).

### on-label `deprecated`

Defines the checked label of the Switch. Use [`messages`](#toc-messages) instead.

### off-label `deprecated`

Defines the checked label of the Switch. Use [`messages`](#toc-messages) instead.

### messages `Object`

Defines the text of the checked and unchecked labels that are displayed within the Switch ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/switch/configuration/messages)). All labels support localization. The supported composite props are available in [`MessagesProps`]({% slug api_switch_messagesprops_wrapper %}).

### width `Number | String`

The width of the Switch ([`width` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/switch/configuration/width)).

## Events

### change: `Function`

Fires when the user toggles between the checked and unchecked states of the Switch [`change` in Kendo UI for jQuery(https://docs.telerik.com/kendo-ui/api/javascript/ui/switch/events/change).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/switch#methods). 

### kendoSwitch

##### returns

Returns the Kendo UI Switch instance.
