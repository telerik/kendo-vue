---
title: Menu API
description: "API Index | Menu"
api_reference: true
slug: api_menuitemcomponent_wrapper
---

# Menu

## Directive

`kendo-menu-item`

## Parent Components

* [`kendo-menu`]({% slug api_menucomponent_wrapper %})
* [`kendo-contextmenu`]({% slug api_contextmenucomponent_wrapper %})

## Child Components

You can nest the `kendo-menu-item` components instead of binding the `items` prop to an array of items.

## Props

### text `String`

The text of the item.

### css-class `String`

Adds a custom CSS class to the item.

### url `String`

The link URL if navigation is needed.

### attr `Object`

Adds attributes with specified values.

### encoded `Boolean`

Allows the use of HTML for the item text.

### content `String`

The content within an item.

### content-attr `Object`

Adds attributes to the content container.

### image-attr `Object`

Adds additional image attributes.

### image-url `String`

The image URL of the item.

### items `Array`

The sub-item collection.

### sprite-css-class `String`

The sprite CSS class of the item image.

### select `Function`

(Optional) The `select` event handler of the item.

## Suggested Links

* [`dataSource` in Kendo UI Menu for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/menu/configuration/datasource)
