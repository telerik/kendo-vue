---
title: Icons
description: "Learn how to customize the icons of the Kendo UI for Vue SpeechToText Button component."
slug: icons_speechtotext
position: 140
---

# SpeechToText Button Icons

You can customize the icon appearance of the Kendo UI for Vue SpeechToText Button.

You can leverage the available props to:

* [Customize the icon inside the Button](#custom-icon)
* [Change the icon size](#icon-size)

## Custom Icon

You can replace the default microphone icon with a custom SVG icon from the Kendo UI for Vue icon library or your own custom SVG icon.

The following example demonstrates how to change the default microphone icon to a star icon:

{% meta height:150 %}
{% embed_file speech-to-text/custom-icon/main.vue preview %}
{% embed_file speech-to-text/custom-icon/main.js %}
{% endmeta %}

Note that when the SpeechToText Button is active, it will still switch to the stop icon regardless of the custom icon you provide for the inactive state.

## Icon Size

The SpeechToText Button allows you to adjust the size of the icon through the `iconSize` prop. Available options are:

- `small` (default) - A smaller-sized icon
- `medium` - A medium-sized icon
- `large` - A larger-sized icon

The following example demonstrates how to change the icon size of the SpeechToText Button:

{% meta height:150 %}
{% embed_file speech-to-text/icon-size/main.vue preview %}
{% embed_file speech-to-text/icon-size/main.js %}
{% endmeta %}


## See Also

* [SpeechToText Button Customization]({% slug customization_speechtotext %})
* [SpeechToText Button API Reference]({% slug api_buttons_speechtotextbuttonprops %})
* [Kendo UI SVG Icons]({% slug overview_svgicon %})
