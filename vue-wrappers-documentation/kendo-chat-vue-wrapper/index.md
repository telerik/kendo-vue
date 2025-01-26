---
title: Overview
page_title: Chat Overview - Components - Kendo UI for Vue
description: "Learn about the Kendo UI wrappers for Vue which are delivered by the Chat package."
slug: overview_chatpackage
position: 0
---

<div><WrapperBanner></WrapperBanner></div>

# Chat Overview

The Chat component allows the user to take part in chat sessions with other users or with chat bots.

The Chat wrapper for Vue is a client-side wrapper for the [Kendo UI Chat](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Chat.

{% meta height:670 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}

## Installation

To initialize the Chat, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Chat package for Vue.

    ```sh
    npm install --save @progress/kendo-chat-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files to the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.chat' // Imports only the Chat script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { Chat, ChatInstaller } from '@progress/kendo-chat-vue-wrapper'

    Vue.use(ChatInstaller)

    new Vue({
        el: '#app',
        components: {
            Chat
        }
    })
    ```

## Functionality and Features

* [Default cards]({% slug defaultcards_chatpackage %})
* [Default actions]({% slug defaultactions_chatpackage %})
* [Toolbar]({% slug toolbar_chatpackage %})

## Events

The following example demonstrates basic Chat events. You can subscribe to [all Chat events](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat#events) by their handler name.

```html
<div id="vueapp" class="vue-app">
    <kendo-chat ref="chat"
                v-on:post="onPost"
                v-on:sendmessage="onSendMessage"
                v-on:actionclick="onActionClick"
                v-on:typingstart="onTypingStart"
                v-on:typingend="onTypingEnd"></kendo-chat>
</div>
```
```js
Vue.use(ChatInstaller);

new Vue({
    el: '#vueapp',
    methods: {
        onPost: function (ev) {
            console.log("A message has been posted to the Chat widget!");
        },
        onSendMessage: function (ev) {
            console.log("A message has been posted to the Chat widget using the message box!");
        },
        onActionClick: function (ev) {
            console.log("The user clicked an action button in attachment template, or selected a suggestedAction!");
        },
        onTypingStart: function (ev) {
            console.log("The user started typing in the Chat message box!");
        },
        onTypingEnd: function (ev) {
            console.log("The user cleared the Chat message box!");
        }
    }
})
```

## Suggested Links

* [Kendo UI Chat for jQuery](https://docs.telerik.com/kendo-ui/controls/conversational-ui/chat/overview)
* [API Reference of the Chat Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat)