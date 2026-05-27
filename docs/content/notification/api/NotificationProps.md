---
title: NotificationProps
description: "Learn how to build custom functionality when working with the Vue Notification by Kendo UI with the help of the NotificationProps."
api_reference: true
type: inner_api
slug: api_notification_notificationprops
---

# NotificationProps
Represents the props of the [Kendo UI for Vue Notification component]({% slug overview_notification %}).


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the aria-label attribute of the Notification component. Defaults to `undefined`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### closable?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Notification will require a user action to hide.
If the property is set to `true`, the Notification renders a **Close** button.
If the property is set to `object`, the Notification renders a **Close** button
by extending the default props with the provided object.

The possible values are:
* (Default) `false`
* `true`
* `{ title: 'Hide', ... }`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `dir` HTML attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [NotificationEvent]({% slug api_notification_notificationevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `close` event which will be triggered when the **Close** button is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the `themeColor` of the Notification.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


{ icon?: boolean; style?: "base" | "none" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "error" | "inverse"; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Notification type
([see example]({% slug types_notification %})).

The possible values are:
   * * `style: 'none'|'base'|'primary'|'secondary'|'tertiary'|'success'|'error'|'warning'|'info'|'inverse'`. Defaults to `none`.
* `icon?: 'true'|'false'`. Defaults to `true`.


</td>
</tr>
</tbody>
</table>



