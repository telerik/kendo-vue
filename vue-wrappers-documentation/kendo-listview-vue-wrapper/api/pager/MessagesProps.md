---
title: messagesProps API
description: "API Index | messagesProps"
api_reference: true
slug: api_pager_messagesprops_wrapper
---

# MessagesProps

### messages-display `String`

The information text of the Pager. Uses `kendo.format`.

The Pager contains the following placeholders:

* `{0}`&mdash;The index of the first data item.
* `{1}`&mdash;The index of the last data item.
* `{2}`&mdash;The total number of data items.

### messages-empty `String`

The text that is displayed when the DataSource view does not contain items.

### messages-all-pages `String`

The text that is displayed for the item which represents the `allPages` option when `allPages` is enabled.

### messages-page `String`

The label that is displayed before the Pager input.

### messages-of `String`

The label that is displayed before the Pager input. Uses `kendo.format`. Contains the `{0}` optional placeholder which represents the total number of pages.

### messages-items-per-page `String`

The label that is displayed after the page size drop-down list.

### messages-first `String`

The tooltip of the button which navigates to the first page.

### messages-previous `String`

The tooltip of the button which navigates to the previous page.

### messages-next `String`

The tooltip of the button which navigates to the next page.

### messages-last `String`

The tooltip of the button which navigates to the last page.

### messages-refresh `String`

The tooltip of the **Refresh** button.

## Suggested Links

* [`Messages` in Kendo UI Pager for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/messages)
