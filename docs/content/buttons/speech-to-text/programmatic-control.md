---
title: Programmatic Control
description: "Learn how to control the Kendo UI for Vue SpeechToText Button component programmatically using its exposed methods."
slug: programmatic_control_speechtotext
position: 70
---

# SpeechToText Button Programmatic Control

The Kendo UI for Vue SpeechToText Button component provides programmatic control through exposed methods that allow you to start, stop, and check the status of speech recognition operations from your application code.

## Available Methods

* [start()]({% slug api_buttons_speechtotextbuttonprops %}#start)—Initiates speech recognition programmatically without requiring user interaction with the button.
* [stop()]({% slug api_buttons_speechtotextbuttonprops %}#stop)—Stops the current speech recognition session programmatically.
* [isActive()]({% slug api_buttons_speechtotextbuttonprops %}#isActive)—Returns a boolean value indicating whether speech recognition is currently active.

## Basic Usage

The following example demonstrates all three programmatic control methods in action:

{% meta height:600 %}
{% embed_file speech-to-text/programmatic-control/main.vue preview %}
{% embed_file speech-to-text/programmatic-control/main.js %}
{% endmeta %}


## See Also

* [SpeechToText Button Events]({% slug events_speechtotext %})
* [SpeechToText Button Integration]({% slug integration_speechtotext %})
* [SpeechToText Button Speech Configurations]({% slug speech_configs_speechtotext %})
