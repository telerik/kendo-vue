---
title: MediaPlayer API
description: "API Index | MediaPlayer"
api_reference: true
slug: api_mediaplayercomponent
---

# MediaPlayer

## Directive

`kendo-mediaplayer`

## Props

### auto-play `Boolean`

If `auto-play` is set to `true`, the MediaPlayer will start playing the video or videos after it initializes ([`autoPlay` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/configuration/autoplay)).

### auto-repeat `Boolean`

If `auto-repeat` is set to `true`, the MediaPlayer will start playing the video or videos after it initializes ([`autoRepeat` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/configuration/autorepeat)).

### forward-seek `Boolean`

If `forward-seek` is set to `false`, the user will be prevented from seek forwarding the video ([`forwardSeek` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/configuration/forwardseek)).

### full-screen `Boolean`

If set to true, the widget will enter full-screen mode ([`fullScreen` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/configuration/fullscreen)).

### media `Object`

The object which holds the information about the media that will be played by the control ([`media` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/configuration/media)). The supported composite props are available in [`MediaProps`]({% slug api_mediaplayer_mediaprops %}).

### messages `Object`

The object which holds the localization strings ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/configuration/messages)). The supported composite props are available in [`MessagesProps`]({% slug api_mediaplayer_messagesprops %}).

### mute `Boolean`

If `mute` is set to `true`, the video will be played without sound ([`mute` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/configuration/mute)).

### navigatable `Boolean`

If `navigatable` is set to `true`, the keyboard navigation is enabled ([`navigatable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/configuration/navigatable)).

### volume `Number`

A value between 0 and 100 that specifies the volume of the video ([`volume` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/configuration/volume)).

## Events

### end: `Function`

Fires when the MediaPlayer finishes playing ([`end` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/events/end)). The event handler function context (available through the `this` keyword) will be set to the MediaPlayer instance.

### pause: `Function`

Fires when the MediaPlayer is paused ([`pause` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/events/pause)). The event handler function context (available through the `this` keyword) will be set to the MediaPlayer instance.

### play: `Function`

Fires when the MediaPlayer starts playing ([`play` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/events/play)). The event handler function context (available through the `this` keyword) will be set to the MediaPlayer instance.

### ready: `Function`

Fires when loading is over and the MediaPlayer is ready to start playing the media ([`ready` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/events/ready)). The event handler function context (available through the `this` keyword) will be set to the MediaPlayer instance.

### timechange: `Function`

Fires when the user selects a new play time ([`timeChange` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/events/timechange)). The event handler function context (available through the `this` keyword) will be set to the MediaPlayer instance.

### volumechange: `Function`

Fires when the volume level is changed ([`volumeChange` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer/events/volumechange)). The event handler function context (available through the `this` keyword) will be set to the MediaPlayer instance.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer#methods). 

### kendoWidget

##### returns

Returns the Kendo UI MediaPlayer instance.
