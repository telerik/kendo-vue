---
title: Implementing Mentions in Kendo Vue Editor
description: A guide on adding mentions in the Kendo Vue Editor.
type: how-to
page_title: How to Add Mentions in Kendo Vue Editor
slug: implementing-mentions-in-kendo-vue-editor
tags: editor, vue, mentions, prosemirror-mentions, plugin
res_type: kb
ticketid: 1646425
---

## Environment

| Product | Kendo UI for Vue Editor |
| --- | --- |
| Version | Current |

## Description

I am using the Kendo Editor for Vue to post comments and need to add a mention feature. Is it possible to implement mentions in the Kendo Vue Editor? If so, how can I achieve this?

This KB article also answers the following questions:
- How can I add mentions in the Kendo Vue Editor?
- Is there a plugin to add mentions in Kendo Vue Editor?
- How to use prosemirror-mentions with Kendo Editor for Vue?

## Solution

To implement the mention functionality within the Kendo Vue Editor, follow the steps below:

1. Install the [`prosemirror-mentions`](https://github.com/joelewis/prosemirror-mentions) plugin:

   ```bash
   npm install prosemirror-mentions
   ```

2. Reference the plugin in your Vue component:

   ```javascript
 import {
  addMentionNodes,
  addTagNodes,
  getMentionsPlugin,
} from "prosemirror-mentions";
   ```

3. Define the mentions data and pass it to the mentions plugin:

```javascript
const mentionsData = [
  { name: "Anna Brown", id: "103", email: "anna@gmail.com" },
  { name: "John Doe", id: "101", email: "joe@gmail.com" },
  { name: "Joe Lewis", id: "102", email: "lewis@gmail.com" },
];

const tagsData = [
  { tag: "WikiLeaks" },
  { tag: "NetNeutrality" },
  { tag: "KendoReact" },
];

const getMentionSuggestionsHTML = (items) => {
  return (
    '<div class="suggestion-item-list">' +
    items
      .map((i) => '<div class="suggestion-item">' + i.name + "</div>")
      .join("") +
    "</div>"
  );
};

const getTagSuggestionsHTML = (items) => {
  return (
    '<div class="suggestion-item-list">' +
    items
      .map((i) => '<div class="suggestion-item">' + i.tag + "</div>")
      .join("") +
    "</div>"
  );
};

const mentionPlugin = getMentionsPlugin({
  getSuggestions: (type, text, done) => {
    setTimeout(() => {
      if (type === "mention") {
        done(mentionsData);
      } else {
        done(tagsData);
      }
    }, 0);
  },
  getSuggestionsHTML: (items, type) => {
    if (type === "mention") {
      return getMentionSuggestionsHTML(items);
    } else if (type === "tag") {
      return getTagSuggestionsHTML(items);
    }
  },
});

```

[Live demo here]

Refer to the example project on CodeSandbox for a complete implementation: [Example Project](https://codesandbox.io/p/sandbox/elegant-faraday-hdm2hp?file=%2Fsrc%2Fmain.vue%3A16%2C21).

## See Also

- [Kendo Editor for Vue Documentation](https://docs.telerik.com/kendo-ui/components/editor/overview/)
- [prosemirror-mentions Plugin Documentation](https://github.com/joelewis/prosemirror-mentions)
