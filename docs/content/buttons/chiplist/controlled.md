---
title: Controlled Mode
description: "By default the Kendo UI for Vue ChipList is in uncontrolled mode."
slug: controlledmode_chiplist
position: 3
---

# Controlled Mode

By default, the ChipList is in an uncontrolled state.

Set the [`defaultDataItems`]({% slug api_buttons_chiplistprops %}#toc-defaultdataitems) property if you want to stay in uncontrolled mode.

To manage the state of the ChipList:
* Set the [`dataItems`]({% slug api_buttons_chiplistprops %}#toc-dataitems) property to your data value.
* Handle the [`onDataChange`]({% slug api_buttons_chiplistprops %}#toc-ondatachange) event.
* Set the new value trough the props.

{% meta height:130 %}
{% embed_file chiplist/controlled/main.vue preview %}
{% embed_file chiplist/controlled/CustomChip.vue %}
{% embed_file chiplist/controlled/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the ChipList]({% slug api_buttons_chiplistprops %})
