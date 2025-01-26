---
title: Overview
page_title: DatePicker Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI DatePicker wrapper for Vue delivers and use the component in Vue projects."
slug: overview_datepicker_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/datepicker/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/datepicker"></WrapperBanner></div>

# DatePicker Overview

The DatePicker combines the Kendo UI DateInput and Calendar components.

It enables the user to enter or pick a date value.

The DatePicker wrapper for Vue is a client-side wrapper for the [Kendo UI DatePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the DatePicker in action.

{% meta height:450 %}
{% embed_file datepicker/basic/main.vue preview %}
{% embed_file datepicker/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Disabled dates]({% slug disabledates_datepicker_wrapper %})
* [Active view]({% slug startviewdepth_datepicker_wrapper %})
* [Week number column]({% slug weekcolumn_datepicker_wrapper %})
* [Date ranges and formats]({% slug startviewdepth_datepicker_wrapper %})
* [Range selection]({% slug rangeselection_datepicker_wrapper %})
* [Templates]({% slug templates_datepicker_wrapper %})
* [Keyboard navigation]({% slug keyboardnavigation_datepicker_wrapper %})
* [RTL support]({% slug rtl_datepicker_wrapper %})

## Events

The following example demonstrates basic DatePicker events. You can subscribe to [all DatePicker events](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
    <kendo-datepicker v-on:open="onOpen" v-on:close="onClose"></kendo-datepicker>
</div>
```
```js
Vue.use(DateinputsInstaller);
new Vue({
	el: '#vueapp',
	methods: {
		onOpen: function (e) {
			console.log("DatePicker is opened");
		},
		onClose: function (e) {
			console.log("DatePicker is closed");
		}
	}
})
```

## Suggested Links

* [Kendo UI DatePicker for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/datepicker/overview)
* [API Reference of the DatePicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker)
