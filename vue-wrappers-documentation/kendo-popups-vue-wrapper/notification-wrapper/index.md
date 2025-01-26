---
title: Overview
page_title: Notification Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Notification wrapper for Vue delivers and use the component in Vue projects."
slug: overview_notification_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/notification/"
position: 1
---


<div><WrapperBanner link="/kendo-vue-ui/components/notification"></WrapperBanner></div>    

# Notification Overview

The Notification enables you to initialize it from any element because it does not manipulate the content of the element.

If the Notification is used with popup notifications or if static Notifications are not appended to the Notification element, the element is hidden. The reason for this behavior is the assumption that the element is not needed. However, if the Notification element is meant to contain static (not popping up) notifications, then set its tag in such a way so as to allow the nesting of the elements inside the template of the notifications. For example, inline elements (such as `<span>`, `<a>`, or `<em>`), cannot contain block elements (such as `<div>`, `<p>`, `<ul>`, `<li>`, or headings).

The Notification wrapper for Vue is a client-side wrapper for the [Kendo UI Notification](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Notification in action.

{% meta height:200 %}
{% embed_file notification/basic/main.vue preview %}
{% embed_file notification/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Notification types]({% slug notification_types_notification_wrapper %})
* [Hidden state]({% slug hidden_state_notification_wrapper %})
* [Position]({% slug position_notification_wrapper %})
* [Templates]({% slug templates_notification_wrapper %})
* [RTL support]({% slug right_to_left_support_notification_wrapper %})

## Event Handling

The following example demonstrates basic Notification events. You can subscribe to [all Notification events](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification#events) by the handler name.

{% meta height:200 %}
{% embed_file notification/events/main.vue preview %}
{% embed_file notification/events/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Notification for jQuery](https://docs.telerik.com/kendo-ui/controls/layout/notification/overview)
* [API Reference of the Notification Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/notification)
