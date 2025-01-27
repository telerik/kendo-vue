---
title: Menu API
description: "API Index | Menu"
api_reference: true
slug: api_menucomponent_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/layout/api/MenuProps/"
---


# Menu

## Directive

`kendo-menu`

## Child Components

* [`kendo-menu-item`]({% slug api_menuitemcomponent_wrapper %})

## Props

### animation `Boolean | Object`

A collection of `Animation` objects for changing the default animations ([`animation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/animation)). If `animation` is set to `false`, all animations of the Menu will be disabled. Each animation has a reverse option which, by default, is used for the closing effect but which can be overridden by setting the close animation. Each animation also has a direction which can be set off the animation&mdash;for example, `slideIn:Down`. The supported composite props are available in [`AnimationProps`]({% slug api_menu_animationprops_wrapper %}).

### close-on-click `Boolean`

Specifies that sub-menus will close after the selection of the item is the user is not willing to navigate ([`closeOnClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/closeonclick)).

### data-source `Object | Array`

The data source of the Menu which will be used for rendering its items ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/datasource)).

The supported values are:

* A JSON object.
* An array that contains an item.
* An array of items.
* An existing `kendo.data.HierarchicalDataSource` instance.

### data-image-url-field `String`

The field of the data item that provides the image URL of the Menu nodes ([`dataImageUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/dataimageurlfield)).

### data-sprite-css-class-field `String`

The field of the data item that provides the sprite CSS class of the nodes ([`dataSpriteCssClassField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/dataspritecssclassfield)). If an array, each level uses the field that is at the same index in the array, or the last item in the array.

### data-text-field `String | Array`

The field of the data item that provides the text content of the nodes ([`dataTextField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/datatextfield)). If an array, each level uses the field that is at the same index in the array, or the last item in the array.

### data-url-field `String`

The field of the data item that provides the link URL of the nodes ([`dataUrlField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/dataurlfield)).

### data-content-field `String`

The field of the data item that provides the content of the nodes ([`dataContentField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/datacontentfield)).

### direction `String`

Specifies the opening direction of the Menu sub-menus ([`direction` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/direction)).

The supported value are:

* `top`
* `bottom`
* `left`
* `right`

### hover-delay `Number`

Specifies the delay (in milliseconds) before the sub-menus are opened or closed which helps to avoid accidental closure on leaving ([`hoverDelay` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/hoverdelay)).

### open-on-click `Boolean | Object`

Specifies that the root sub-menus will be opened on item click ([`openOnClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/openonclick)). The supported composite props are available in [`OpenOnClickProps`]({% slug api_menu_openonclickprops_wrapper %}).

### orientation `String`

The orientation of the root menu ([`orientation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/orientation)).

The supported values are:

* `horizontal`
* `vertical`

### popup-collision `String`

Specifies the way the Menu will adjust to screen boundaries ([`popupCollision` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/popupcollision)).

The supported approaches are:

* (Default) `fit`&mdash;A sub-menu fits with a horizontal parent or the root menu which means that it will move to fit within the screen boundaries in all directions.
* `fit flip`&mdash;A sub-menu with vertical parent will fit vertically and flip over its parent horizontally.

### scrollable `Boolean | Object`

If `scrollable` is enabled, the Menu displays buttons that scroll the items when they cannot fit the width or the height of the Menu popups ([`scrollable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/scrollable)). By default, scrolling is disabled. The supported composite props are available in [`ScrollableProps`]({% slug api_menu_scrollableprops_wrapper %}).

## Events

### close: `Function`

Fires before a sub-menu or the Menu is closed ([`close` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/events/close)). To prevent the closing of the sub-menu, you can cancel the `close` event.

### open: `Function`

Fires before a sub-menu or the Menu is opened ([`open` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/events/open)). To prevent the opening of the sub-menu, you can cancel the `open` event.

### activate: `Function`

Fires when a sub-menu or the Menu is opened and its animation finishes ([`activate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/events/activate)).

### deactivate: `Function`

Fires when a sub-menu or the Menu is closed and its animation finishes ([`deactivate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/events/deactivate)).

### select: `Function`

Fires when a menu item is selected ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/events/select)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Menu instance.
