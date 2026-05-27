---
title: Creating a Custom Checkbox Group in Kendo UI for Vue
description: Learn how to create a custom CheckboxGroup in Kendo UI for Vue by iterating over an array and configuring checkboxes dynamically.
type: how-to
page_title: Implementing a Checkbox Group in Kendo UI for Vue
meta_title: Implementing a Checkbox Group in Kendo UI for Vue
slug: checkbox-simulate-group
tags: kendo ui for vue,checkbox,checkbox group
res_type: kb
ticketid: 1701684
---

## Environment

<table>
    <tbody>
        <tr>
            <td> Product </td>
            <td> Kendo UI for Vue Checkbox </td>
        </tr>
        <tr>
            <td> Version </td>
            <td> Current </td>
        </tr>
    </tbody>
</table>

## Description

I want to implement a checkbox group in Kendo UI for Vue. However, there is no built-in CheckboxGroup component available. How can I create one to iterate over an array and configure checkboxes dynamically?

This knowledge base article also answers the following questions:
- How to create a custom CheckboxGroup in Vue?
- How to configure multiple checkboxes dynamically in Kendo UI for Vue?
- How to implement custom logic for a checkbox group?

## Solution

To implement a custom CheckboxGroup in Kendo UI for Vue:

1. Define an array containing the values for the checkboxes.
2. Use the `map` function to iterate over the array and dynamically render a Kendo UI for Vue [Checkbox](https://www.telerik.com/kendo-vue-ui/components/checkbox/overview/) for each element.
3. Add custom logic for mass selection or disabling checkboxes, based on your requirements.

Below is an example implementation:

{% meta height:500 %}
{% embed_file checkbox-simulate-group/main.vue preview %}
{% embed_file checkbox-simulate-group/main.js %}
{% endmeta %}


You can extend this implementation according to your specific requirements.

## See Also

- [Kendo UI for Vue Checkbox Documentation](https://www.telerik.com/kendo-vue-ui/components/checkbox/overview)
