---
title: Value and Ranges
description: "Get started with the Kendo UI for Vue ProgressBar and set its ranges and value in Vue projects."
slug: progressbar_value_ranges
position: 2
---

# Value and Ranges

The ProgressBar provides option for setting its value or a range of values and for indicating the progress of an ongoing task.

* To set the value of the ProgressBar, use its [`value`]({% slug api_progressbars_progressbarprops %}#toc-value) option.
* To define the start and end values of the range, use the [`min`]({% slug api_progressbars_progressbarprops %}#toc-min) and [`max`]({% slug api_progressbars_progressbarprops %}#toc-max) ProgressBar settings respectively.
* To indicate that a task is still in progress, set the [`value`]({% slug api_progressbars_progressbarprops %}#toc-value) property to `null`.



{% meta height:250 %}
{% embed_file progressbar/value_ranges/main.vue preview %}
{% embed_file progressbar/value_ranges/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the ProgressBarProps]({% slug api_progressbars_progressbarprops %})
