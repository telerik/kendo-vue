---
title: RangeSlider API
description: "API Index | RangeSlider"
api_reference: true
slug: api_rangeslidercomponent_wrapper
---

# RangeSlider

## Directive

`kendo-rangeslider`

## Props

### large-step `Number`

The delta with which the value of the RangeSlider will change when the drag handle is focused and the user presses the **Page Up** or **Page Down** key ([`largeStep` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/configuration/largestep)). The allied `largeStep` will also set a large tick for every large step.

### left-drag-handle-title `String`

The title of the left drag handle of the RangeSlider ([`leftDragHandleTitle` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/configuration/leftdraghandletitle)).

### max `Number`

The maximum value of the RangeSlider ([`max` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/configuration/max)).

### min `Number`

The minimum value of the RangeSlider ([`min` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/configuration/min)).

### orientation `String`

The orientation of the RangeSlider ([`orientation` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/configuration/orientation)).

The supported values are:

* `horizontal`
* `vertical`

### right-drag-handle-title `String`

The title of the right drag handle of the RangeSlider ([`rightDragHandleTitle` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/configuration/rightdraghandletitle)).

### selection-end `Number`

The end selection value of the RangeSlider ([`selectionEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/configuration/selectionend)).

### selection-start `Number`

The start selection value of the RangeSlider ([`selectionStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/configuration/selectionstart)).

### small-step `Number`

The small step value of the RangeSlider ([`smallStep` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/configuration/smallstep)).

The underlying value will be changed when the user does any of the following:

* Clicks the increase or decrease buttons of the RangeSlider.
* Presses the **Arrow** keys when the drag handle is focused.
* Drags the drag handle.

### tick-placement `String`

Denotes the location of the tick marks in the RangeSlider ([`tickPlacement` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/configuration/tickplacement)). The available options are:

### tooltip `Object`

The configuration of the RangeSlider tooltip ([`tooltip` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/configuration/tooltip)). The supported composite props are available in [`TooltipProps`]({% slug api_rangeslider_tooltipprops_wrapper %}).

## Events

### change: `Function`

Fires when the value of the RangeSlider changes as a result of selecting a new value with one of the drag handles or with the keyboard ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/events/change).

### slide: `Function`

Fires when the user drags the drag handle to a new position ([`slide` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider/events/slide).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/rangeslider#methods). 

### kendoWidget

##### returns

Returns the Kendo UI RangeSlider instance.
