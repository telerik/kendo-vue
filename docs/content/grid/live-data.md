---
title: Live Data Updates
description: "Get started with the live updates functionality of the Kendo UI for Vue Native Grid and learn how to show dynamic data."
slug: live_data_grid
position: 200
---

# Real-Time Data Updates (Live Streaming Updates)

The Kendo UI for Vue Native Grid can render multiple live updates in a short time. This functionality allows you to do real-time updates in the Grid (also referred to as streaming updates).

The Grid will only re-render (not re-mount) the updated rows when it receives the new data real-time. That makes each streaming update very efficient.

> This example uses a local data service to simulate real-time updates. In the live application, bind your Native Vue Data Grid to a state variable and update it with steaming (live) data.

{% meta height:800 %}
{% embed_file live-data/main.vue preview %}
{% embed_file live-data/main.js %}
{% embed_file live-data/ChangePriceComponent.vue %}
{% embed_file live-data/Grid.vue %}
{% embed_file live-data/PriceComponent.vue %}
{% embed_file live-data/RatingComponent.vue %}
{% embed_file live-data/TickerComponent.vue %}
{% embed_file live-data/VolumeComponent.vue %}
{% embed_file live-data/services.js %}
{% embed_file live-data/financial-data.js %}
{% embed_file live-data/trends.js %}
{% embed_file live-data/utils.js %}
{% endmeta %}

## Suggested Links

* [Data Query Overview]({% slug overview_dataquery %})
* [API Index of the Grid]({% slug api_grid %})
* [Manage Grid's Column Width]({% slug columns_width_grid %})
