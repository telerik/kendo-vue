---
title: Chat API
description: "API Index | Chat"
api_reference: true
slug: api_chatcomponent
---

# Chat

## Directive

`kendo-chat`

## Child Components

* [`kendo-chat-toolbar-button`]({% slug api_chattoolbarbuttoncomponent %})

## Props

### messages `Object`

Allows the localization of used strings ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/configuration/messages)). The supported composite props are available in [`MessagesProps`]({% slug api_chat_messagesprops %}).

### user `Object`

Configures the user information ([`user` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/configuration/user)). The supported composite props are available in [`UserProps`]({% slug api_chat_userprops %}).

### toolbar `Object`

Configures the toolbar of the Chat ([`toolbar` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/configuration/toolbar)). The supported composite props are available in [`ToolbarProps`]({% slug api_chat_toolbarprops %}).

## Events

### actionclick: `Function`

Fires when an action button is clicked inside an attachment template or when a suggested action is clicked ([`actionClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/events/actionclick)).

### post: `Function`

Fires when a message is posted in the Chat through the message box or as an action-button click ([`post` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/events/post)).

### sendmessage: `Function`

Fires when a message is posted through the message box ([`sendMessage` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/events/sendmessage)).

### typingend: `Function`

Fires when users clear the chat message box signaling in this way that they stopped typing or when they submit the currently typed content in the message box ([`typingEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/events/typingend)).

### typingstart: `Function`

Fires when the user starts typing in the message box ([`typingStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/events/typingstart)). The event is fired only once (not on each keystroke).

### toolclick: `Function`

Fires when the user clicks a button from the Chat toolbar ([`toolClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/events/toolclick)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Chat instance.
