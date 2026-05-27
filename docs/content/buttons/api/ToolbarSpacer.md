---
title: ToolbarSpacer
description: "Learn how to build custom functionality when working with the Vue Buttons by Kendo UI with the help of the ToolbarSpacer."
api_reference: true
type: inner_api
slug: api_buttons_toolbarspacer
---

# ToolbarSpacer
Represents the [Kendo UI for Vue ToolbarSpacer component]({% slug overview_toolbar %}).  A spacer element for the sub-elements of the Toolbar.

```jsx
<template>
 <div>
   <Toolbar>
     <ButtonGroup :class="'k-toolbar-button-group'">
       <Button
         :class="'k-toolbar-button'"
         :svg-icon="boldIcon"
         :title="'Bold'"
         :togglable="true"
       />
       <Button
         :class="'k-toolbar-button'"
         :svg-icon="italicIcon"
         :title="'Italic'"
         :togglable="true"
       />
       <Button
         :class="'k-toolbar-button'"
         :svg-icon="underlineIcon"
         :title="'Underline'"
         :togglable="true"
       />
     </ButtonGroup>
     <ToolbarSpacer />
     <Button :class="'k-toolbar-button'" :svg-icon="cutIcon" :title="'Cut'">
       Cut
     </Button>
     <Button :class="'k-toolbar-button'" :svg-icon="copyIcon" :title="'Copy'">
       Copy
     </Button>
   </Toolbar>
 </div>
</template>
```



