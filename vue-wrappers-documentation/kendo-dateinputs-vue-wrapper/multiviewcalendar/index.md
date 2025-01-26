---
title: Overview
page_title: MultiViewCalendar Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI MultiViewCalendar wrapper for Vue delivers and use the component in Vue projects."
slug: overview_multiviewcalendar_wrapper
position: 0
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/multiview-calendar/"
---

<div><WrapperBanner></WrapperBanner></div>

# MultiViewCalendar Overview

The MultiViewCalendar renders a graphical Gregorian calendar with multiple horizontal views.

It supports the selection and navigation between dates as well as data templates and ranges for scheduling appointments.

The MultiViewCalendar wrapper for Vue is a client-side wrapper for the [Kendo UI MultiViewCalendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiviewcalendar) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the MultiViewCalendar in action.

{% meta height:450 %}
{% embed_file multiviewcalendar/basic/main.vue preview %}
{% embed_file multiviewcalendar/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Disabled dates]({% slug disabled_dates_multiviewcalendar_wrapper %})
* [Active view]({% slug active_view_multiviewcalendar_wrapper %})
* [Multiple views]({% slug multiple_views_multiviewcalendar_wrapper %})
* [Selection]({% slug selection_multiviewcalendar_wrapper %})
* [Day template]({% slug day_template_multiviewcalendar_wrapper %})
* [Week column]({% slug week_column_multiviewcalendar_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_multiviewcalendar_wrapper %})

## Events

The following example demonstrates basic MultiViewCalendar events. You can subscribe to [all MultiViewCalendar events](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiviewcalendar#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
    <kendo-multiviewcalendar  v-on:navigate="onNavigate"></kendo-multiviewcalendar>
</div>
```
```js
Vue.use(DateinputsInstaller);
new Vue({
	el: '#vueapp',
	methods: {
		onNavigate: function (e) {
			var view = e.sender.view();
			console.log(view.name); //the name of the current view

			var current = e.sender.current();
			console.log(current); //currently the focused date
		}
	}
})
```

## Suggested Links

* [Kendo UI MultiViewCalendar for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/multiviewcalendar/overview)
* [API Reference of the MultiViewCalendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiviewcalendar)
