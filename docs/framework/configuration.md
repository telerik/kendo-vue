---
title: Configuration
page_title: Configuration - Kendo UI for Vue
description: "Learn the basics of using the configuration options and props of the wrappers when working with Kendo UI for Vue."
slug: configuration_wrappers_vue
use_runner: true
position: 2
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components"
toc: true
---

<WrapperBanner link="/kendo-vue-ui/components"></WrapperBanner>

# Configuration

To use and configure the Kendo UI widgets for jQuery in Vue, utilize their API configuration options as props for their Kendo UI counterparts for Vue.

The available types of settings that you can use as props are grouped into:
* [API-based options](#toc-api-based-options)
* [Camel-case options](#toc-camel-case-options)
* [Composite options](#toc-composite-options)
* [Composite array options](#toc-composite-array-options)
* [Events](#toc-events)

## API-Based Options

Each configuration option that is available in the schema of the respective Kendo UI widget for jQuery&mdash;for example, in the [API of the Calendar](slug:api_calendarcomponent_wrapper)&mdash;can be used as a prop in the respective Kendo UI component for Vue.

```html-preview
<div id="vueapp" class="vue-app">
	<kendo-calendar :value="new Date()"></kendo-calendar>
</div>
```
```js
Vue.use(DateinputsInstaller);

new Vue({
	el: '#vueapp'
})
```

The previous example configures the Calendar widget in the same way as the following jQuery example.

```html
<div id="calendar"></div>
```
```js
$("#calendar").kendoCalendar({
	value: new Date()
});
```

## Camel-Case Options

The Camel-case options are the widget options which are named in Camel case. To use the Camel-case options as properties, translate them into Kebab case.

The following example demonstrates how to configure the [`disableDates`](slug:api_calendarcomponent_wrapper#toc-disable-dates) option of the Calendar.

```html
<div id="vueapp" class="vue-app">
	<kendo-calendar :value="new Date()"
					:disable-dates="['we', 'th']">
	</kendo-calendar>
</div>
```
```js
Vue.use(DateinputsInstaller);

new Vue({
	el: '#vueapp'
})
```

## Composite Options

The composite options are the widget options which can accept an object notation to achieve a more complex configuration&mdash;for example, the [`month`](slug:api_calendarcomponent_wrapper#toc-month) option of the Calendar.

```js
{
	month: {
		content: "content: '#= data.value #'"
	}
}
```

To use the composite options as props, either:
* Translate them into Kebab case and append the inner option (recommended), or
* Configure them by using the root option to pass an object for the setting.

```html
<div id="vueapp" class="vue-app">
	<kendo-calendar :value="new Date()" :month="{ content: '#= data.value #' }"></kendo-calendar>

	<!-- Is the same as -->

	<kendo-calendar :value="new Date()" :month-content="'#= data.value #'"></kendo-calendar>
</div>
```
```js
Vue.use(DateinputsInstaller);

new Vue({
	el: '#vueapp'
})
```

> Using inline objects in props is never recommended and should be avoided. When using inline objects, Vue will dispatch a change for every inline object bound even if the change has nothing to do with the particular object. To avoid that, use the Kebab case with an inner option props.

## Composite Array Options

The composite array options are options which can be assigned to a collection of objects with a certain schema&mdash;for example, the [`columns`](slug:api_gridcomponent_wrapper#toc-columns) option of the Grid.

Just like the composite options, you can directly declare an array of the items to configure&mdash;either as a value to the prop inline or through the Vue data. However, some components work with inner child components that are dedicated to configure such type of options. For example, the Grid columns can also be configured through the `KendoGridColumn` (`kendo-grid-column`) component.

```html
<div id="vueapp" class="vue-app">
	<h4>Columns configured as Array in Vue data</h4>
	<kendo-grid :data-source="localDataSource" :columns="columns">
	</kendo-grid>

	<h4>Columns configured via the <code>kendo-grid-column</code> component</h4>
	<kendo-grid :data-source="localDataSource">
		<kendo-grid-column field="ProductName"></kendo-grid-column>
		<kendo-grid-column field="UnitPrice" title="Unit Price" :width="120" :format="'{0:c}'"></kendo-grid-column>
		<kendo-grid-column field="UnitsInStock" title="Units In Stock" :width="120"></kendo-grid-column>
		<kendo-grid-column field="Discontinued" :width="120"></kendo-grid-column>
	</kendo-grid>
</div>
```
```js
Vue.use(GridInstaller);

new Vue({
	el: '#vueapp',
	data () {
		return {
			columns: [
				"ProductName",
				{ field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "120px" },
				{ field: "UnitsInStock", title:"Units In Stock", width: "120px" },
				{ field: "Discontinued", width: "120px" },
			],
			localDataSource: [{
					'ProductID':1,
					'ProductName':'Chai',
					'UnitPrice':18,
					'UnitsInStock':39,
					'Discontinued':false
				},
				{
					'ProductID':2,
					'ProductName':'Chang',
					'UnitPrice':19,
					'UnitsInStock':17,
					'Discontinued':false
				}
			]
		}
	}
})
```

## Using Quotes in Props

Quotes are used in `props` preceded by `colon` to specify that the prop value should be interpreted as a string. For example:

```html
<div id="vueapp" class="vue-app">
    <kendo-maskedtextbox :title="'phone'">
    </kendo-maskedtextbox>

    <!-- Is the same as the following declaration where no colons are used -->

    <kendo-maskedtextbox title="phone">
    </kendo-maskedtextbox>
</div>
```
```js
Vue.use(DateinputsInstaller);

new Vue({
	el: '#vueapp'
})
```

If the inner quotes are omitted, the widget will be looking for a field of the App data with that name (in this case `phone`). Such configuration can also be used in the following way:

```html
<div id="vueapp" class="vue-app">
    <kendo-maskedtextbox :title="phone">
    </kendo-maskedtextbox>
</div>
```
```js
Vue.use(DateinputsInstaller);

new Vue({
    el: '#vueapp',
    data () {
        return {
            phone: "phone"
        }
    }
})
```

## Events

You can use the events which are fired by the Kendo UI widgets and configure them for use in the wrapper suite by utilizing the native Vue `v-on` directive or its `@` shorthand.

> When you utilize widget events that are named in Camel case and translate them for configuring the wrapper components through the `v-on` or the `@` directive, transition them into lowercase. For example, `requestEnd` has to become `@requestend`.

```html
<div id="vueapp" class="vue-app">
	<kendo-calendar :value="new Date()" v-on:change="onChange"></kendo-calendar>
</div>
```
```js
Vue.use(DateinputsInstaller);

new Vue({
	el: '#vueapp',
	methods: {
		onChange (ev) {
			console.log("date changed to: " + ev.sender.value());
		}
	}
})
```

## Getting Widget References

You can get a reference to a widget through its `ref` attribute value.

```html
<div id="vueapp" class="vue-app">
	<kendo-calendar ref="calendar1" :value="new Date()" v-on:change="onChange"></kendo-calendar>
</div>
```
```js
Vue.use(DateinputsInstaller);

new Vue({
	el: '#vueapp',
	methods: {
		onChange (ev) {
			var calendar = this.$refs.calendar1.kendoWidget();
			console.log(calendar.value());
		}
	}
})
```

## Suggested Links

* [Using CDN](slug:using_cdn)
* [Model Binding of the Kendo UI Wrappers for Vue](slug:modelbinding_wrappers_vue)
* [Getting Started with Kendo UI for Vue](slug:getting_started)
