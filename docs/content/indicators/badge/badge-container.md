---
title: Badge Container
description: 'Use the Kendo UI for Vue Badge Container and its template to initialize badges in Vue projects.'
slug: badgecontainer_badge
position: 2
---

# Kendo UI for Vue Badge Container

The `BadgeContainer` component provides an alternative approach for defining a badge in the Kendo UI for Vue Native suite. Below you can find a basic **BadgeContainer** definition that uses a Slot template to define the content of the badge.

```jsx-no-run
<BadgeContainer
  :content="'content'"
  :align="{
    vertical: 'bottom',
    horizontal: 'end',
  }"
  :theme-color="'tertiary'"
>
  <SvgIcon :icon="copyIcon" style="width: 36px; color: #4eb9ed" />
  <template #content> 11 </template>
</BadgeContainer>
```

The following example demonstrates the definition of the same badges using the both **Badge** and **BadgeContainer** approaches side by side.

{% meta height:280 %}
{% embed_file badge/container/main.vue preview %}
{% embed_file badge/container/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the BadgeContainer]({% slug api_indicators_badgecontainer %})
- [API Reference of the BadgeContainerProps]({% slug api_indicators_badgecontainerprops %})
- [API Reference of the Badge]({% slug api_indicators_badge %})
- [API Reference of the BadgeProps]({% slug api_indicators_badgeprops %})
