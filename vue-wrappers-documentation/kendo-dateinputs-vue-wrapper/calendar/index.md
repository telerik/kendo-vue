---
title: Overview
page_title: Calendar Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Calendar wrapper for Vue delivers and use the component in Vue projects."
slug: overview_calendar_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/calendar/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/calendar"></WrapperBanner></div>


# Calendar Overview

The Calendar is a form component that represents a graphical Gregorian calendar.

It supports the selection of and navigation between dates as well as data templates and ranges for scheduling appointments.

The Calendar wrapper for Vue is a client-side wrapper for the [Kendo UI Calendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Calendar in action.

{% meta height:390 %}
{% embed_file calendar/basic/main.vue preview %}
{% embed_file calendar/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Disabled dates]({% slug disableddates_calendar_wrapper %})
* [Date ranges]({% slug dateranges_calendar_wrapper %})
* [Active view and view depth]({% slug activeview_calendar_wrapper %})
* [Week number column]({% slug weeknumbercolumn_calendar_wrapper %})
* [Multiple selection]({% slug multipleselection_calendar_wrapper %})
* [Templates]({% slug templates_calendar_wrapper %})
* [Keyboard navigation]({% slug keyboardnavigation_calendar_wrapper %})
* [RTL support]({% slug rtl_calendar_wrapper %})

## Events

The following example demonstrates basic Calendar events. You can subscribe to [all Calendar events](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
	<kendo-calendar v-on:navigate="onNavigate"></kendo-calendar>
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

* [Kendo UI Calendar for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/calendar/overview)
* [API Reference of the Calendar](https://docs.telerik.com/kendo-ui/api/javascript/ui/calendar)
