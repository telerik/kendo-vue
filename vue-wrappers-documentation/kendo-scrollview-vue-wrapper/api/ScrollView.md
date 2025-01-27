---
title: ScrollView API
description: "API Index | ScrollView"
api_reference: true
slug: api_scrollviewcomp_wrapper
---

# ScrollView

## Directive

`kendo-scrollview`

## Props

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the ScrollView will not bind to the data source during initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/configuration/autobind)). Only applicable for the data-bound mode.

### bounce-velocity-threshold `Number`

The velocity threshold after which a swipe will result in a bounce effect ([`bounceVelocityThreshold` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/configuration/bouncevelocitythreshold)).

### content-height `Number | String`

The height of the ScrollView content ([`contentHeight` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/configuration/contentheight)). If the container element of the ScrollView has no set height, renders 100% and each page will be stretched to fill the container height.

### data-source `kendo.data.DataSource | Object`

The DataSource instance to which the ScrollView will be bound to ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/configuration/datasource)). If `data-source` is set, the ScrollView will operate in its data-bound mode.

### duration `Number`

The duration (in milliseconds) for the ScrollView to snap to the current page after it was released ([`duration` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/configuration/duration)).

### empty-template `String`

The template for rendering the pages without content ([`emptyTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/configuration/emptytemplate)). By default, the ScrollView renders a blank page. Only applicable for the data-bound mode.

### enable-pager `Boolean`

If `enable-pager` is set to `true`, the ScrollView will display a pager ([`enablePager` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/configuration/enablepager)). By default, the pager is enabled.

### page `Number`

The initial page to display ([`page` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/configuration/page)).

### template `String`

The template which is used to render the content of pages ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/configuration/autobind)). By default the ScrollView renders a div element for every page.Applicable only in data bound mode.


[Kendo API for template option](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/configuration/template)

### velocity-threshold `Number`

The velocity threshold after which a swipe will navigate to the next page, as opposed to snapping back to the current page ([`velocityThreshold` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/configuration/velocitythreshold)).

## Events

### change: `Function`

Fires when the ScrollView page is changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/events/change)).

### refresh: `Function`

Fires when ScrollView refreshes ([`refresh` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview/events/refresh)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview#methods). 

### kendoScrollView

##### returns

Returns the Kendo UI ScrollView instance.
