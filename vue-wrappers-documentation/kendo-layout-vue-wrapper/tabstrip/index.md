---
title: Overview
page_title: TabStrip Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI TabStrip wrapper for Vue delivers and use the component in Vue projects."
slug: overview_tabstrip_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/layout/tabstrip/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/layout/tabstrip"></WrapperBanner></div>    

# TabStrip Overview

The TabStrip displays a collection of tabs with associated content.

The tabs enable the user to switch between different views inside a single component.

The TabStrip wrapper for Vue is a client-side wrapper for the [Kendo UI TabStrip](https://demos.telerik.com/kendo-ui/tabstrip/index) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the TabStrip in action.

{% meta height:550 %}
{% embed_file tabstrip/basic/main.vue preview %}
{% embed_file tabstrip/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Data binding]({% slug databinding_tabstrip_wrapper %})
* [Images]({% slug images_tabstrip_wrapper %})
* [Animation effects]({% slug animation_effects_tabstrip_wrapper %})
* [Tab position]({% slug tab_position_tabstrip_wrapper %})
* [Scrollable tabs]({% slug scrollable_tabs_tabstrip_wrapper %})
* [Loading content with AJAX]({% slug loading_content_ajax_tabstrip_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_tabstrip_wrapper %})
* [RTL support]({% slug rtl_support_tabstrip_wrapper %})

## Events

The following example demonstrates basic TabStrip events. You can subscribe to [all TabStrip events](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
    <kendo-tabstrip @select="onSelect">
        <ul>
            <li class="k-state-active">
                Paris
            </li>
            <li>
                New York
            </li>
        </ul>
        <div>
            <div>
                <p>Rainy weather in Paris.</p>
            </div>
        </div>
        <div>
            <div>
                <p>Sunny weather in New York.</p>
            </div>
        </div>
    </kendo-tabstrip>
</div>
```
```js
Vue.use(LayoutInstaller);

new Vue({
        el: '#vueapp',
        methods: {
            onSelect: function(e) {
                console.log("Selected: " + $(e.item).find("> .k-link").text());
            }
        }
    })
```

## Suggested Links

* [Kendo UI TabStrip for jQuery](https://docs.telerik.com/kendo-ui/controls/navigation/tabstrip/overview)
* [API Reference of the TabStrip Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/tabstrip)
