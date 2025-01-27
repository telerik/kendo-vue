---
title: Overview
page_title: ColorPicker Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI ColorPicker wrapper for Vue delivers and use the component in Vue projects."
slug: overview_colorpicker_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/colorpicker"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/inputs/colorpicker"></WrapperBanner></div>

# ColorPicker Overview

The ColorPicker allows the user to select a color from a drop-down menu.

It is designed to replace the `<input type="color">` HTML5 tag, which is not widely supported in browsers. The original `input` element is kept in the DOM. The `value` attribute element gets updated as the user selects a color which allows the submission of forms with ColorPickers.

The ColorPicker wrapper for Vue is a client-side wrapper for [Kendo UI ColorPicker](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the ColorPicker in action.

{% meta height:400 %}
{% embed_file colorpicker/basic/main.vue preview %}
{% embed_file colorpicker/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Disabled ColorPicker]({% slug disabled_state_colorpicker_wrapper %})
* [Flat ColorPicker]({% slug flat_colorpicker_wrapper %})
* [Standalone palette]({% slug standalone_palette_colorpicker_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_colorpicker_wrapper %})

## Events

The following example demonstrates basic ColorPicker events. You can subscribe to [all ColorPicker events](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
    <kendo-colorpicker :value="color" v-on:change="onChange">ColorPicker</kendo-colorpicker>
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
    },
	methods: {
		onChange (ev) {
			this.color = ev.sender.value()
		}
	}
})
```

## Suggested Links

* [Kendo UI ColorPicker for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/colorpicker/overview)
* [API Reference of the ColorPicker Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker)
