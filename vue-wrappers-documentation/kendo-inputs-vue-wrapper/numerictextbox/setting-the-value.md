---
title: Setting the Value
page_title: Setting the Value - NumericTextBox - Kendo UI for Vue
description: "Set the value of the Kendo UI NumericTextBox wrapper for Vue."
slug: values_numerictextbox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/numerictextbox/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/inputs/numerictextbox"></WrapperBanner></div>    

# Setting the Value

The NumericTextBox allows you to set various types of values.

The following example demonstrates how to create a currency NumericTextBox.

{% meta height:100 %}
{% embed_file numerictextbox/value/main.vue preview %}
{% embed_file numerictextbox/value/main.js %}
{% endmeta %}

The following example demonstrates how to create a percentage NumericTextBox.

```html
<div id="vueapp" class="vue-app">
    <kendo-numerictextbox :format="'p'" :value="0.12"></kendo-numerictextbox>
</div>
```
```js
Vue.use(InputsInstaller);

new Vue({
    el: "#vueapp"
})
```

## Suggested Links

* [Kendo UI NumericTextBox for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/numerictextbox/overview)
* [API Reference of the NumericTextBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox)
