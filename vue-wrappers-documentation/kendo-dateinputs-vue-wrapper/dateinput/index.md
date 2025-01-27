---
title: Overview
page_title: DateInput Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI DateInput wrapper for Vue delivers and use the component in Vue projects."
slug: overview_dateinput_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dateinputs/dateinput/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/dateinputs/dateinput"></WrapperBanner></div>

# DateInput Overview

The DateInput represents an input field that recognizes and formats scheduling values such as dates.

The DateInput wrapper for Vue is a client-side wrapper for the [Kendo UI DateInput](https://docs.telerik.com/kendo-ui/api/javascript/ui/dateinput) widget.

> The input in each section of the DateInput is always valid for the relevant section. For example, you cannot enter `23` in the month section. As a result, the value in DateInput is always any valid date.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the DateInput in action.

{% meta height:200 %}
{% embed_file dateinputs/basic/main.vue preview %}
{% embed_file dateinputs/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Date ranges and formats]({% slug daterangesformats_dateinput_wrapper %})
* [Localization]({% slug localization_dateinput_wrapper %})
* [Integration with other editors]({% slug integrationotherwidgets_dateinput_wrapper %})
* [Keyboard navigation]({% slug keyboardnavigation_dateinput_wrapper %})
* [RTL support]({% slug rtl_dateinput_wrapper %})

## Events

The following example demonstrates basic DateInput events. You can subscribe to [all DateInput events](https://docs.telerik.com/kendo-ui/api/javascript/ui/dateinput#events) by the handler name.

{% meta height:200 %}
{% embed_file dateinputs/events/main.vue preview %}
{% embed_file dateinputs/events/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI DateInput for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/dateinput/overview)
* [API Reference of the DateInput Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/dateinput)
