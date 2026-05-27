---
title: Step
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the Step."
api_reference: true
type: inner_api
slug: api_layout_step
---

# Step
Represents the [Kendo UI for Vue Step component]({% slug overview_stepper %}).

```jsx
<Step v-bind="props" @change="(e) => props.onChange(e)">
<span class="k-step-indicator" aria-hidden="true">
   <span class="emoji">{{ props.emoji }}</span>
</span>
<span class="k-step-label">
   <span class="k-step-text">{{ props.label }}</span>
</span>
</Step>
```



