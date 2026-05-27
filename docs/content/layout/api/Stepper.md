---
title: Stepper
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the Stepper."
api_reference: true
type: inner_api
slug: api_layout_stepper
---

# Stepper
Represents the [Kendo UI for Vue Stepper component]({% slug overview_stepper %}).

```jsx
<template>
   <Stepper :value="value" @change="handleChange" :items="items" />
</template>

<script>
import {
 Stepper
    } from '@progress/kendo-vue-layout';
export default {
    components: {
       Stepper
    },
    data () {
      return {
        value: 0,
        items: [
          {
            label: "Cart",
            icon: "cart",
          },
          {
            label: "Delivery Address",
            icon: "marker-pin-target",
          },
          {
            label: "Payment Method",
            icon: "dollar",
          },
          {
            label: "Preview",
            icon: "preview",
            optional: true,
          },
          {
            label: "Finish Order",
            icon: "track-changes-accept",
          },
        ]
      }
    },
    methods: {
      handleChange (e) {
        this.value = e.value;
      }
    }
};
</script>
```



