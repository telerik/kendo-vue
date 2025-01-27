---
title: Overview
page_title: NumericTextBox Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI NumericTextBox wrapper for Vue delivers and use the component in Vue projects."
slug: overview_numerictextbox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/numerictextbox/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/inputs/numerictextbox"></WrapperBanner></div>    

# NumericTextBox Overview

The NumericTextBox enables the user to edit and submit specific numeric values by typing or by using the spin buttons.

It converts an `<input>` element into a numeric, percentage, or currency textbox. The conversion data type depends on the specific format. The component renders spin buttons which increase or decrease its value with a predefined step. The NumericTextBox accepts only numeric entries and uses the `kendo.culture.current` culture to determine the number precision and other culture-specific properties. When the NumericTextBox initializes, it wraps the `<input>` element with a `<span></span>` tag and renders **Spin** buttons.

The NumericTextBox wrapper for Vue is a client-side wrapper for [Kendo UI NumericTextBox](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the NumericTextBox in action.

{% meta height:100 %}
{% embed_file numerictextbox/basic/main.vue preview %}
{% embed_file numerictextbox/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Setting the value]({% slug values_numerictextbox_wrapper %})
* [Precision of numbers]({% slug precision_of_numbers_numerictextbox_wrapper %})
* [Rounding of numbers]({% slug rounding_of_numbers_numerictextbox_wrapper %})
* [Range validation]({% slug range_validation_numerictextbox_wrapper %})
* [Focusing]({% slug focusing_numerictextbox_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_numerictextbox_wrapper %})
* [RTL support]({% slug right_to_left_support_numerictextbox_wrapper %})

## Events

The following example demonstrates basic NumericTextBox events. You can subscribe to [all NumericTextBox events](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
    <kendo-numerictextbox v-on:change="onChange"></kendo-numerictextbox>
</div>
```
```js
Vue.use(InputsInstaller);

new Vue({
    el: "#vueapp",
	methods: {
		onChange (e) {
			var value = e.sender.value();
			console.log(value);
		}
	}
})
```

## Suggested Links

* [Kendo UI NumericTextBox for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/numerictextbox/overview)
* [API Reference of the NumericTextBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox)
