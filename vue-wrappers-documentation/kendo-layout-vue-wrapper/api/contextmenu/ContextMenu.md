---
title: ContextMenu API
description: "API Index | ContextMenu"
api_reference: true
slug: api_contextmenucomponent_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/layout/api/MenuProps/"
---

# ContextMenu

## Directive

`kendo-contextmenu`

## Child Components

* [`kendo-menu-item`]({% slug api_menuitemcomponent_wrapper %})

## Props

### align-to-anchor `Boolean`

Specifies that when it is displayed, the ContextMenu will be aligned to the target or to the `filter` element if specified ([`alignToAnchor` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/aligntoanchor)).

### animation `Boolean | Object`

A collection of `Animation` objects for changing the default animations ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/animation)). If `animation` is set to `false`, all animations of the ContextMenu will be disabled. Each animation has a reverse option which, by default, is used for the closing effect but which can be overridden by setting the close animation. Each animation also has a direction which can be set off the animation&mdash;for example, `slideIn:Down`. The supported composite props are available in [`AnimationProps`]({% slug api_contextmenu_animationprops_wrapper %}).

### append-to `String | jQuery`

The DOM element to which the ContextMenu will be appended ([`appendTo` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/appendto)). The element needs to be relatively positioned.

### close-on-click `Boolean`

Specifies that sub-menus will close after the selection of the item is the user is not willing to navigate ([`closeOnClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/closeonclick)).

### copy-anchor-styles `Boolean`

Copies and uses the styles from the anchor ([`copyAnchorStyles` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/copyanchorstyles)).

### data-source `Object | Array`

The data source of the Menu which will be used for rendering its items ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/datasource)).

The supported values are:

* A JSON object.
* An array that contains an item.
* An array of items.
* An existing `kendo.data.HierarchicalDataSource` instance.

### data-image-url-field `String`

The field of the data item that provides the image URL of the ContextMenu nodes ([`dataImageUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/dataimageurlfield)).

### data-sprite-css-class-field `String`

The field of the data item that provides the sprite CSS class of the nodes ([`dataSpriteCssClassField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/dataspritecssclassfield)). If an array, each level uses the field that is at the same index in the array, or the last item in the array.

### data-text-field `String | Array`

The field of the data item that provides the text content of the nodes ([`dataTextField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/datatextfield)). If an array, each level uses the field that is at the same index in the array, or the last item in the array.

### data-url-field `String`

The field of the data item that provides the link URL of the nodes ([`dataUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/dataurlfield)).

### data-content-field `String`

The field of the data item that provides the content of the nodes ([`dataContentField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/datacontentfield)).

### direction `String`

Specifies the opening direction of the ContextMenu sub-menus ([`direction` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/direction)).

The supported value are:

* `top`
* `bottom`
* `left`
* `right`

### filter `String`

Specifies the filter selector of the ContextMenu&mdash;the ContextMenu will only be shown on items that satisfy the provided selector ([`filter` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/filter)).

### hover-delay `Number`

Specifies the delay (in milliseconds) before the sub-menus are opened or closed which helps to avoid accidental closure on leaving ([`hoverDelay` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/hoverdelay)).

### orientation `String`

The orientation of the root menu ([`orientation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/orientation)).

The supported values are:

* `horizontal`
* `vertical`

### popup-collision `String`

Specifies the way the ContextMenu will adjust to screen boundaries ([`popupCollision` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/popupcollision)).

The supported approaches are:

* (Default) `fit`&mdash;A sub-menu fits with a horizontal parent or the root menu which means that it will move to fit within the screen boundaries in all directions.
* `fit flip`&mdash;A sub-menu with vertical parent will fit vertically and flip over its parent horizontally.

You can also switch off the screen boundary detection completely by setting `popupCollision` to `false`.

### scrollable `Boolean | Object`

If `scrollable` is enabled, the ContextMenu displays buttons that scroll items which cannot fit the viewport height ([`scrollable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/scrollable)). By default, scrolling is disabled. The supported composite props are available in [`ScrollableProps`]({% slug api_contextmenu_scrollableprops_wrapper %}).

### show-on `String`

The event or events on which the ContextMenu will open ([`showOn` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/showon)). By default, for desktop devices the ContextMenu is displayed on the `contextmenu` event and for touch devices the ContextMenu is displayed on the `hold` event. Accepts `pointer`, `mouse`, and `touch` events, individually or in combinations separated by spaces.

### target `String | jQuery`

The element on which the ContextMenu will open ([`target` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/configuration/target)). The default element is the `body` of the document.

## Events

### close: `Function`

Fires before a sub-menu or the ContextMenu is closed ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/events/close)). To prevent the closing of the sub-menu, you can cancel the `close` event.

### open: `Function`

Fires before a sub-menu or the ContextMenu is opened ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/events/open)). To prevent the opening of the sub-menu, you can cancel the `open` event.

### activate: `Function`

Fires when a sub-menu or the ContextMenu is opened and its animation finishes ([`activate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/events/activate)).

### deactivate: `Function`

Fires when a sub-menu or the ContextMenu is closed and its animation finishes ([`deactivate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/events/deactivate)).

### select: `Function`

Fires when a menu item is selected ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu/events/select)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/contextmenu#methods). 

### kendoWidget

##### returns

Returns the Kendo UI ContextMenu instance.
