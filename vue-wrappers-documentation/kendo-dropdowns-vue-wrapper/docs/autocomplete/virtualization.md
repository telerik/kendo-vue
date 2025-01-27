---
title: Virtualization
page_title: Virtualization - AutoComplete - Kendo UI for Vue
description: "Use the virtualization features of the Kendo UI AutoComplete wrapper for Vue which allow you to handle large datasets."
slug: virtualization_autocomplete_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/autocomplete/"
position: 4
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/autocomplete"></WrapperBanner></div>

# Virtualization

Virtualization allows you to display large sets of data.

Regardless of the dataset size, the UI virtualization technique uses a fixed amount of list items in the popup list of the component. When the list is scrolled, the AutoComplete reuses the existing items to display the relevant data instead of creating new data.

The following example demonstrates how to set the minimum configuration of the AutoComplete and the DataSource to enable the virtualization.

{% meta height:350 %}
{% embed_file autocomplete/virtualization/main.vue preview %}
{% embed_file autocomplete/virtualization/main.js %}
{% endmeta %}
```

## Suggested Links

* [Kendo UI AutoComplete for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/autocomplete/overview)
* [API Reference of the AutoComplete Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete)
