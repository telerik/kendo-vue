---
title: TextArea
description: "Learn how to build custom functionality when working with the Vue Inputs by Kendo UI with the help of the TextArea."
api_reference: true
type: inner_api
slug: api_inputs_textarea
---

# TextArea
Represents the [Kendo UI for Vue Native TextArea component]({% slug overview_textarea %}).

Accepts properties of type [TextAreaProps]({% slug api_inputs_textareaprops %}).


```jsx
<template>
    <k-form
      @submit="handleSubmit">
      <formcontent />
   </k-form>
</template>
<script>
import { Form } from "@progress/kendo-vue-form";
import FormContent from './FormContent.vue';

export default {
    components: {
      'k-form': Form,
      'formcontent': FormContent
    },
    methods: {
      handleSubmit (dataItem) {
         alert(JSON.stringify(dataItem, null, 2));
      }
    }
};

</script>
```



