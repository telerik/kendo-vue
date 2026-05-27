---
title: Appearance
description: "Get started with the Kendo UI for Vue ChunkProgressBar and change its appearance in Vue projects."
slug: chunkprogressbar_appearance
position: 6
---

# Appearance

The ChunkProgressBar enables you to [set its dimensions](#toc-setting-the-dimensions) and to implement [custom styling for its status indicator and label](#toc-customizing-the-label-and-status-indicator).

## Setting the Dimensions

To set the styling of the ChunkProgressBar wrapper element, use the respective CSS properties.



{% meta height:90 %}
{% embed_file chunkprogressbar/dimensions/main.vue preview %}
{% embed_file chunkprogressbar/dimensions/main.js %}
{% endmeta %}


## Customizing the Status Indicator

You can customize the bar that indicates the task progress by setting custom styling or custom classes to the inner elements that are responsible for their rendering. To define the custom layout, use the [`progressStyle`]({% slug api_progressbars_chunkprogressbarprops %}#toc-progressstyle) and [`progressClassName`]({% slug api_progressbars_chunkprogressbarprops %}#toc-progressclassname) options for the completed part and [`emptyStyle`]({% slug api_progressbars_progressbarprops %}#toc-emptystyle) and [`emptyClassName`]({% slug api_progressbars_progressbarprops %}#toc-emptyclassname) options for the empty part.



{% meta height:500 %}
{% embed_file chunkprogressbar/appearance/main.vue preview %}
{% embed_file chunkprogressbar/appearance/FormContent.vue %}
{% embed_file chunkprogressbar/appearance/FormInput.vue %}
{% embed_file chunkprogressbar/appearance/FormDropDownList.vue %}
{% embed_file chunkprogressbar/appearance/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the ChunkProgressBarProps]({% slug api_progressbars_chunkprogressbarprops %})
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
