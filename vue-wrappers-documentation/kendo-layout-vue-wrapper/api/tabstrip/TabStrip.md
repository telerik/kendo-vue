---
title: TabStrip API
description: "API Index | TabStrip"
api_reference: true
slug: api_tabstripcomponent_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/layout/api/TabStripProps/"
---

# TabStrip

## Directive

`kendo-tabstrip`

## Props

### animation `Boolean | Object`

A collection of visual animations for the TabStrip tabs which are expanded or collapsed by the user ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/animation)). If `animation` is set to `false`, all animations of the PanelBar will be disabled. The supported composite props are available in [`AnimationProps`]({% slug api_tabstrip_animationprops_wrapper %}).

### collapsible `Boolean`

Specifies whether the TabStrip will be able to collapse completely when the user clicks an expanded tab ([`collapsible` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/collapsible)).

### content-urls `Array`

An array with the URLs from which the content of the tabs are loaded ([`contentUrls` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/contenturls)). To load only specific tabs with Ajax, set the URLs to the corresponding positions in the array and the other elements to `null`.

### data-content-field `String`

The field of the data item that provides the text content for the `content` element of the tabs ([`dataContentField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/datacontentfield)).

### data-content-url-field `String`

The field of the data item that provides the URL for the Ajax-loaded tab content ([`dataContentUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/datacontentfield)).

### data-image-url-field `String`

The field of the data item that provides the image URL of the tab ([`dataImageUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/dataimageurlfield)).

### data-source `Object | Array`

The data source of the TabStrip for rendering the items ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/datasource)).

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the Chart will initialize a new `kendo.data.DataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the Chart will use that instance and will not initialize a new one.

### data-sprite-css-class `String`

The field of the data item that provides the CSS class of the tab ([`dataSpriteCssClass` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/dataspritecssclass)).

### data-text-field `String`

The field of the data item that provides the text name of the tab ([`dataTextField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/datatextfield)).

### data-url-field `String`

The field of the data item that provides the link URL for the tab ([`dataUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/dataurlfield)).

### navigatable `Boolean`

Specifies whether the TabStrip will support keyboard navigation ([`navigatable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/navigatable)).

### scrollable `Boolean | Object`

If `scrollable` is enabled, the TabStrip displays buttons that scroll the items when they cannot fit the width of the TabStrip ([`scrollable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/scrollable)). By default, scrolling is enabled. In order for the scrolling feature to work properly, you need to set the `tab-position` to `top` or `bottom`. Unless disabled, scrollable must be set to a JavaScript object, which represents the scrolling configuration. The supported composite props are available in [`ScrollableProps`]({% slug api_tabstrip_scrollableprops_wrapper %}).

### tab-position `String`

Specifies the position of the TabStrip tabs ([`tabPosition` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/tabposition)).

The supported values are:

* (Default) `top`
* `left`
* `right`
* `bottom`

For the tab-position settings that are different from the default ones, use a fade animation.

### value `String`

The selected tab ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/configuration/value)). Has to correspond to the `dataTextField` configuration and used when bound to a DataSource component.

## Events

### activate: `Function`

Fires after a tab was made visible and its animation completes ([`activate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/events/activate)). Triggered only for tabs with associated content.

### contentload: `Function`

Fires when the content is fetched from an AJAX request ([`contentLoad` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/events/contentload)).

### error: `Function`

Fires when an AJAX request results in an error ([`error` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/events/error)).

### select: `Function`

Fires before a tab is selected ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/events/select)).

### show: `Function`

Fires after a tab was made visible but before the animations ends ([`show` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip/events/show)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip#methods). 

### kendoWidget

##### returns

Returns the Kendo UI TabStrip instance.
