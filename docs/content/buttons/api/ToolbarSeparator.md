---
title: ToolbarSeparator
description: "Learn how to build custom functionality when working with the Vue Buttons by Kendo UI with the help of the ToolbarSeparator."
api_reference: true
type: inner_api
slug: api_buttons_toolbarseparator
---

# ToolbarSeparator
Represents the [Kendo UI for Vue ToolbarSeparator component]({% slug overview_toolbar %}).  A separator element for the sub-elements of the Toolbar.

```jsx
<template>
  <div>
    <Toolbar>
      <SplitButton
        :class="'k-toolbar-split-button'"
        :text="'Insert'"
        :items="splitItems"
      >
      </SplitButton>
      <ToolbarSeparator />
      <DropDownButton
        :text="'Paste'"
        :svg-icon="clipboardIcon"
        :items="ddItems"
      >
      </DropDownButton>
    </Toolbar>
  </div>
</template>
```



