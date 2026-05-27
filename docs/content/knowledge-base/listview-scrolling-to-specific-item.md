---
title: Scrolling to a Specific Item in Kendo UI for Vue ListView
description: Learn how to scroll to a specific item in the Kendo UI for Vue ListView using JavaScript.
type: how-to
page_title: How to Scroll to a Specific Item in Kendo UI for Vue ListView
meta_title: How to Scroll to a Specific Item in Kendo UI for Vue ListView
slug: listview-scrolling-to-specific-item
tags: listview, kendo ui for vue, scrollintoView, item scrolling, javascript
res_type: kb
ticketid: 1702223
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>Kendo UI for Vue ListView</td>
        </tr>
        <tr>
            <td>Version</td>
            <td>Current</td>
        </tr>
    </tbody>
</table>

## Description

I want to scroll to a specific item in the [Kendo UI for Vue ListView](https://www.telerik.com/kendo-vue-ui/components/listview). The items may have different heights, and I need a robust approach to ensure smooth scrolling to the required item.

This knowledge base article also answers the following questions:
- How to scroll to a specific item in Kendo UI for Vue ListView?
- How to use JavaScript to scroll to an item in Kendo UI for Vue ListView?
- How to scroll smoothly to a rendered item in Kendo UI for Vue ListView?

## Solution

To scroll to a specific item in the Kendo UI for Vue ListView, follow these steps:

1. Assign a unique ID or data attribute to each rendered item in the ListView. You can use the `.k-listview-content` class or set a custom ID in the item template.
2. Locate the desired DOM element using JavaScript with the assigned ID or data attribute.
3. Ensure the item is rendered before calling the scroll method.
4. Use `element.scrollIntoView({ behavior: 'smooth' })` to scroll to the item.

Here is an implementation example:

```javascript
// Define a method to scroll to an item by its ID
function scrollToItem(itemId) {
  // Locate the element with the given ID
  const element = document.getElementById(itemId);

  // Ensure the element exists before scrolling
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
  }
}
```

### Example Integration in Vue

{% meta height:500 %}
{% embed_file listview-scrolling-to-specific-item/main.vue preview %}
{% embed_file listview-scrolling-to-specific-item/main.js %}
{% embed_file listview-scrolling-to-specific-item/products.json %}
{% embed_file listview-scrolling-to-specific-item/useListViewScroll.js %}

{% endmeta %}

## See Also

- [Kendo UI for Vue ListView Documentation](https://www.telerik.com/kendo-vue-ui/components/listview)
- [JavaScript scrollIntoView Method](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
- [Kendo UI for Vue ListView API Reference](https://www.telerik.com/kendo-vue-ui/components/listview/api)
