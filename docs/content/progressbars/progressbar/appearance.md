---
title: Appearance
description: "Get started with the Kendo UI for Vue ProgressBar and change its appearance in Vue projects."
slug: progressbar_appearance
position: 8
---

# Appearance

The ProgressBar enables you to [set its height and width](#toc-setting-the-dimensions) and to implement [custom styling for its status indicator and label](#toc-customizing-the-label-and-status-indicator).

## Setting the Dimensions

To set the styling of the ProgressBar wrapper element, use the respective CSS properties.



{% meta height:90 %}
{% embed_file progressbar/dimensions/main.vue preview %}
{% embed_file progressbar/dimensions/main.js %}
{% endmeta %}


## Customizing the Label and Status Indicator

You can customize the label and the bar that indicates the task progress by setting custom styling or custom classes to the inner elements that are responsible for their rendering. To define the custom layout, use the [`progressStyle`]({% slug api_progressbars_progressbarprops %}#toc-progressstyle) and [`progressClassName`]({% slug api_progressbars_progressbarprops %}#toc-progressclassname) options for the completed part and [`emptyStyle`]({% slug api_progressbars_progressbarprops %}#toc-emptystyle) and [`emptyClassName`]({% slug api_progressbars_progressbarprops %}#toc-emptyclassname) options for the empty part.



{% meta height:270 %}
{% embed_file progressbar/appearance/main.vue preview %}
{% embed_file progressbar/appearance/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the ProgressBarProps]({% slug api_progressbars_progressbarprops %})
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
