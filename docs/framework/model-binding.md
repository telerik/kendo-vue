---
title: Model Binding
page_title: Model Binding - Kendo UI for Vue
description: "Learn the basics of the model binding functionality when working with Kendo UI for Vue."
slug: modelbinding_wrappers_vue
use_runner: true
position: 3
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/getting-started"
toc: true
---

<WrapperBanner link="/kendo-vue-ui/components/getting-started"></WrapperBanner>

# Model Binding

The Kendo UI for Vue suite provides options for model binding.

## Integrating Vue Bindings

In order for the Kendo UI for Vue components to utilize the [`v-model`](https://vuejs.org/v2/guide/forms.html) directive, the wrappers use the custom `changemodel` event which, when emitted, notifies Vue that the model is changed. It is the `value` prop that holds the model.

> Currently, only widgets which are initialized from `form` elements&mdash;such as the ColorPicker, ComboBox, and NumerictextBox&mdash;support the `v-model` integration.

```html-preview
<div id="vueapp" class="vue-app">
    <kendo-colorpicker v-model="color">ColorPicker</kendo-colorpicker>
	color: <span v-text="color"></span>
</div>
```
```js
Vue.use(InputsInstaller);

new Vue({
    el: "#vueapp",
    data () {
        return {
            color: "5CE500"
        }
    }
})
```

## Events

To facilitate model binding with custom components, Vue allows you to use events. For more information, refer to the official [Vue documentation](https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events).

Kendo UI for Vue enables you to change a data property dynamically by using events. However, the argument which is passed to the event is not the newly entered value, but the event argument of the used event as defined in the API. For example, if you handle the [`change`](slug:api_colorpickercomponent_wrapper#toc-change) event of the ColorPalette, the argument that is available in the handler overload is not the value, but the event arguments. To assign the value, get it through the available event arguments, as demonstrated in the following example.

```html
<div id="vueapp" class="vue-app">
    <kendo-colorpicker :value="color"
					   v-on:change="(ev) => { color = ev.sender.value() }">
    </kendo-colorpicker>
	color: <span v-text="color"></span>
</div>
```
```js
Vue.use(InputsInstaller);

new Vue({
	el: '#vueapp',
	data () {
        return {
            color: "5CE500"
        }
    }
})
```

The following example demonstrates an alternative implementation.  

```html
<div id="vueapp" class="vue-app">
    <kendo-colorpicker :value="color"
					   v-on:change="onChange">
	</kendo-colorpicker>
	color: <span v-text="color"></span>
</div>
```
```js
Vue.use(InputsInstaller);

new Vue({
	el: '#vueapp',
	data () {
        return {
            color: "5CE500"
        }
    },
	methods: {
	  onChange (ev) {
		this.color = ev.sender.value();
	  }
	}
})
```

## Objects

Kendo UI for Vue does not support the binding of objects directly to the value prop and, consequently, it is not possible to pass a complex object through the `v-model` directive. However, you can work around the issue by customizing the code and using the API calls and events of the widget.

The following example demonstrates how to set up the DropDownList to bind the `model` property while consuming the `modelValue` [computed property](https://vuejs.org/v2/guide/computed.html#Computed-Properties) as a value.

```html
<div id="vueapp" class="vue-app">
    <kendo-dropdownlist :value="modelValue"
                        :data-source="dataSource"
                        data-text-field="text"
                        data-value-field="value"
                        v-on:change="onChange"></kendo-dropdownlist>
    Model: <span v-text="model"></span>
</div>
```
```js
Vue.use(DropdownsInstaller);

new Vue({
	el: '#vueapp',
	data () {
		return {
			model: {text: "Text 1", value: "Value 1"},
			dataSource: [
			  {text: "Text 1", value: "Value 1"},
			  {text: "Text 2", value: "Value 2"},
			  {text: "Text 3", value: "Value 3"}
			]
		}
	},
	computed: {
		modelValue: function () {
			return this.model.value;
		}
	},
	methods: {
		onChange (ev) {
			var selectedIndex = ev.sender.select();
			var selectedItem = ev.sender.dataItem(selectedIndex).toJSON();
			this.model = selectedItem;
		}
	}
})
```

## Suggested Links

* [Using CDN](slug:using_cdn)
* [Configuring the Kendo UI Wrappers for Vue](slug:configuration_wrappers_vue)
* [Getting Started with Kendo UI for Vue](slug:getting_started)
