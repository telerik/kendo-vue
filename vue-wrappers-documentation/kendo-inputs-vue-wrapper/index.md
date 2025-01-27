---
title: Overview
page_title: Inputs Overview - Components - Kendo UI for Vue
description: "Learn about the Kendo UI wrappers for Vue which are delivered by the Inputs package."
slug: overview_inputs_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/inputs/"></WrapperBanner></div>

# Inputs Overview

The Inputs are fields which allow for an input of data, based on a specific and predefined format.

<Row>
    <Column count={6}>
        <Component href="{% slug overview_colorpicker_wrapper %}">
            <svg id="colorpicker" viewbox="0 0 72 72">
            <defs>
            <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="4.8245" y1="75.4218" x2="65.1755" y2="40.5782">
              <stop  offset="0" style="stop-color:#FF9B5E"/>
              <stop  offset="8.618834e-02" style="stop-color:#FF8C5D"/>
              <stop  offset="0.1949" style="stop-color:#FF7F5B"/>
              <stop  offset="0.3" style="stop-color:#FF7B5B"/>
              <stop  offset="0.7" style="stop-color:#FF6358"/>
              <stop  offset="0.7835" style="stop-color:#FC5F59"/>
              <stop  offset="0.8701" style="stop-color:#F4525E"/>
              <stop  offset="0.9577" style="stop-color:#E63E65"/>
              <stop  offset="1" style="stop-color:#DD3169"/>
            </linearGradient>
            </defs>
              <path d="M36,0C36,0,9,24,9,45c0,14.9,12.1,27,27,27s27-12.1,27-27C63,24,36,0,36,0z M36,66c-11.6,0-21-9.4-21-21
              C15,27,36,8.1,36,8.1S57,27,57,45C57,56.6,47.6,66,36,66z M33,51v6c8.3,0,15-6.7,15-15h-6C42,47,38,51,33,51z" />
            </svg>
            <ComponentTitle>ColorPicker</ComponentTitle>
            <ComponentDescription>A component for selecting and submitting color values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_maskedtextbox_wrapper %}">
            <svg id="maskedtextbox" viewbox="0 0 72 72">
            <path d="M0,30v42h72V30H0z M66,66H6V36h60V66z M12,55.8l4.2,4.2l4.8-4.8l4.8,4.8h0l4.2-4.2L25.2,51l4.8-4.8L25.8,42
            L21,46.8L16.2,42L12,46.2l4.8,4.8L12,55.8z M33,55.8l4.2,4.2l4.8-4.8l4.8,4.8h0l4.2-4.2L46.2,51l4.8-4.8L46.8,42L42,46.8L37.2,42
            L33,46.2l4.8,4.8L33,55.8z" />
          </svg>
            <ComponentTitle>MaskedTextBox</ComponentTitle>
            <ComponentDescription>A component for controlling the input of the user.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_numerictextbox_wrapper %}">
          	<svg id="numerictextbox" viewbox="0 0 72 72">
              <path d="M0,30v42h72V30H0z M66,66H6V36h60V66z M36,54H12v6h18L36,54z M54,42h6v6h-6V42z M54,54h6v6h-6V54z" />
            </svg>
            <ComponentTitle>NumericTextBox</ComponentTitle>
            <ComponentDescription>A component for editing and submitting specific numeric values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_rangeslider_wrapper %}">
           		<svg id="rangeslider" viewbox="0 0 72 72">
              <path d="M72,37H60v6h6L72,37z M0,37h36v6H0V37z M36,69h30l6-6H36V69z M0,63h12v6H0V63z M42,34h12v12H42V34z M18,60h12
              v12H18V60z" />
            </svg>
            <ComponentTitle>RangeSlider</ComponentTitle>
            <ComponentDescription>A component for selecting values from a predefined range.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_slider_wrapper %}">
           	<svg id="slider" viewbox="0 0 72 72">
              <path d="M72,37H60v6h6L72,37z M0,37h36v6H0V37z M36,69h30l6-6H36V69z M0,63h12v6H0V63z M42,34h12v12H42V34z M18,60h12
              v12H18V60z" />
            </svg>
            <ComponentTitle>Slider</ComponentTitle>
            <ComponentDescription>A component for displaying sliding values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_switch_wrapper %}">
           	<svg id="switch" viewbox="0 0 72 72">
              <path d="M0,36v36h72V36H0z M66,66H6V42h60V66z M36,60H12V48h24V60z" />
            </svg>
            <ComponentTitle>Switch</ComponentTitle>
            <ComponentDescription>A component for toggling between checked and unchecked states.</ComponentDescription>
        </Component>
    </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the ColorPicker, MaskedTextBox, NumericTextBox, RangeSlider, Slider, and Switch.

{% meta height:450 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the Inputs, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack


1. Install Kendo UI and add a theme.

  ```sh
  npm install --save @progress/kendo-ui
  npm install --save @progress/kendo-theme-default
  ```

1. Install the Kendo UI Inputs package for Vue.

  ```sh
  npm install --save @progress/kendo-inputs-vue-wrapper
  ```

  The package also exports the following wrappers for individual components:

    * MaskedTextBox
    * NumericTextBox
    * ColorPicker
    * Slider
    * RangeSlider
    * Switch

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.maskedtextbox' // Imports only the MaskedTextBox script and its dependencies
    // import '@progress/kendo-ui/js/kendo.numerictextbox' // Imports only the NumericTextBox script and its dependencies
    // import '@progress/kendo-ui/js/kendo.colorpicker' // Imports only the ColorPicker script and its dependencies
    // import '@progress/kendo-ui/js/kendo.slider' // Imports only the Slider script and its dependencies
    // import '@progress/kendo-ui/js/kendo.switch' // Imports only the Switch script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { MaskedTextBox,
             NumericTextBox,
             ColorPicker,
             Slider,
             RangeSlider,
             Switch,
             InputsInstaller } from '@progress/kendo-inputs-vue-wrapper'

    Vue.use(InputsInstaller)

    new Vue({
        el: '#app',
        components: {
            MaskedTextBox,
            NumericTextBox,
            ColorPicker,
            Slider,
            RangeSlider,
            Switch
        }
    })
    ```

## Suggested Links

* [Get Started with the ColorPicker]({% slug overview_colorpicker_wrapper %})
* [Get Started with the MaskedTextBox]({% slug overview_maskedtextbox_wrapper %})
* [Get Started with the NumericTextBox]({% slug overview_numerictextbox_wrapper %})
* [Get Started with the RangeSlider]({% slug overview_rangeslider_wrapper %})
* [Get Started with the Slider]({% slug overview_slider_wrapper %})
* [Get Started with the Switch]({% slug overview_switch_wrapper %})
