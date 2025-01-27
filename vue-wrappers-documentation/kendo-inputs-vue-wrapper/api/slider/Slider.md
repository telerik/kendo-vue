---
title: Slider API
description: "API Index | Slider"
api_reference: true
slug: api_slidercomponent_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/api/SliderProps/"
---

# Slider

## Directive

`kendo-slider`

## Props

### decrease-button-title `String`

The title of the decrease button of the Slider ([`decreaseButtonTitle` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/decreasebuttontitle)).

### drag-handle-title `String`

The title of the drag handle of the Slider ([`dragHandleTitle` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/draghandletitle)).

### increase-button-title `String`

The title of the increase button of the Slider ([`increaseButtonTitle` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/increasebuttontitle)).

### large-step `Number`

The delta with which the value of the RangeSlider will change when the drag handle is focused and the user presses the **Page Up** or **Page Down** key ([`largeStep` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/largestep)). The `largeStep` will also set a large tick for every large step and must be a positive number that is larger than `smallStep`.

### max `Number`

The maximum value of the Slider ([`max` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/max)).

### min `Number`

The minimum value of the Slider ([`min` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/min)).

### orientation `String`

The orientation of the Slider ([`orientation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/orientation)).

The supported values are:

* `horizontal`
* `vertical`

### show-buttons `Boolean`

If `show-buttons` is set to `true`, the increase and decrease buttons of the Slider are displayed, and if `show-buttons` is set to `false`, the increase and decrease buttons of the Slider are hidden ([`showButtons` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/showbuttons)).

### small-step `Number`

The small step value of the Slider which determines the amount of the value change when the user clicks the increase or decrease buttons, presses the arrow keys when the drag handle is focused, or drags the drag handle ([`smallStep` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/smallstep)). Must be a positive number, otherwise, throws a JavaScript exception.

### tick-placement `String`

The location of the tick marks in the Slider ([`tickPlacement` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/tickplacement)).

The supported options are:

* `topLeft`&mdash;Tick marks are located on the top of the horizontal Slider or to the left of the vertical Slider.
* `bottomRight`&mdash;Tick marks are located on the bottom of the horizontal Slider or to the right side of the vertical Slider.
* both&mdash;Tick marks are located on both sides of the Slider.
* none&mdash;Tick marks are invisible.

### tooltip `Object`

The configuration of the Slider tooltip ([`tooltip` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/tooltip)). The supported composite props are available in [`TooltipProps`]({% slug api_slider_tooltipprops_wrapper %}).

### value `Number`

The underlying value of the Slider ([`value` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/configuration/value)).

## Events

### change: `Function`

Fires when the value of the Slider changes as a result of selecting a new value with one of the drag handles, with the buttons, or with the keyboard ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/events/change)).

### slide: `Function`

Fires when the user drags the drag handle to a new position ([`slide` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider/events/slide)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/slider#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Slider instance.
