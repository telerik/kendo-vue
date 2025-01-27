---
title: Hidden Notification
page_title: Hidden Notification - Notification - Kendo UI for Vue
description: "Show or hide the Kendo UI Notification wrapper for Vue."
slug: hidden_state_notification_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/notification/"
position: 3
---

<div><WrapperBanner link="/kendo-vue-ui/components/notification"></WrapperBanner></div>    

# Hidden Notification

By default, the Notification remains visible for five seconds before it disappears.

If the user clicks anywhere on a notification, it immediately hides. You can delay the hiding of the component by configuring this option in milliseconds. If you set a zero value, the automatic hiding is disabled. After its hiding animation is completed, the dismissed notification is removed from the DOM.

If you want to make the notification more intuitive for the end user, the component allows you to display a **Close** button. You can also disable the default behavior of hiding a notification by clicking anywhere on it. In this case, the user can dismiss the notification only by clicking the **Close** button (if present).

You can also postpone the manual hiding of a notification, which is useful when preventing the user from accidentally hiding a notification that appeared shortly before that. By default, the option to postpone the hiding of a notification is disabled.

The following example demonstrates how to manage the hidden state of the Notification.

```html-no-run
<div id="vueapp" class="vue-app">
    <kendo-notification ref="popupNotification"
        :allow-hide-after="2000"
        :auto-hide-after="7000"
        :button="true"
        :hide-on-click="true">
    </kendo-notification>
</div>
```

## Suggested Links

* [Kendo UI Notification for jQuery](https://docs.telerik.com/kendo-ui/controls/layout/notification/overview)
* [API Reference of the Notification Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification)
