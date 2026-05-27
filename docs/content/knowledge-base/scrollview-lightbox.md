---
title: Implement a Lightbox with the Kendo UI for Vue ScrollView
description: Learn how to create an image lightbox using the Kendo UI for Vue ScrollView and Dialog components
type: how-to
page_title: How to Implement a Lightbox - Kendo UI for Vue ScrollView
slug: scrollview-lightbox
tags: scrollview, dialog, lightbox, gallery, images, kendovue
ticketid: 1701817
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>7.0.1</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® Kendo UI for Vue ScrollView</td>
        </tr>
    </tbody>
</table>

## Description

How can I implement a lightbox-style image viewer using the Kendo UI for Vue ScrollView? I need to:

- Display a gallery of thumbnail images that users can click to open in a larger view
- Show the full-size images in a Dialog with navigation between images
- Keep the ScrollView and thumbnail gallery in sync when users navigate

## Solution

Use the Kendo UI for Vue [`Dialog`]({% slug overview_dialog %}) component to contain a ScrollView that displays full-size images, while maintaining synchronization with a thumbnail gallery built with ListView.

The following example demonstrates this approach in action:

{% meta height:500 %}
{% embed_file scrollview-lightbox/main.vue preview %}
{% embed_file scrollview-lightbox/main.js %}
{% embed_file scrollview-lightbox/styles.css %}
{% endmeta %}

## See Also

- [Kendo UI for Vue ScrollView Documentation]({% slug overview_scrollview %})
- [Kendo UI for Vue Dialog Documentation]({% slug overview_dialog %})
- [Kendo UI for Vue ListView Documentation]({% slug overview_listview %})
