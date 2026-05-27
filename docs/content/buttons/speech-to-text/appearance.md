---
title: Appearance
description: "Learn how to customize the appearance of the Kendo UI for Vue SpeechToText Button component."
slug: customization_speechtotext
position: 200
---

# SpeechToText Button Customization

The Kendo UI for Vue SpeechToText Button provides a variety of options to customize its appearance to match your application's design.

## Button Appearance

The SpeechToText Button inherits its styling capabilities from the Kendo UI for Vue Button component, providing consistent styling options across the library.

{% meta height:630 %}
{% embed_file speech-to-text/button-customization/main.vue preview %}
{% embed_file speech-to-text/button-customization/main.js %}
{% endmeta %}

### Size

The `size` prop controls the size of the SpeechToText Button. The available options are:

- `small` - A smaller-sized button
- `medium` (default) - A medium-sized button
- `large` - A larger-sized button

{% meta height:200 %}
{% embed_file speech-to-text/size-customization/main.vue preview %}
{% embed_file speech-to-text/size-customization/main.js %}
{% endmeta %}

### Fill Mode

The `fillMode` prop determines how the button is filled with color. The available options are:

- `solid` (default) - Button with a solid background color
- `outline` - Button with a colored outline and transparent background
- `flat` - Button with no background or border, but colored text
- `link` - Button that appears like a link but maintains button behavior

{% meta height:200 %}
{% embed_file speech-to-text/fillmode-customization/main.vue preview %}
{% embed_file speech-to-text/fillmode-customization/main.js %}
{% endmeta %}

### Rounded Style

The `rounded` prop controls the corner radius of the button. The available options are:

- `small` - Slightly rounded corners
- `medium` (default) - Moderately rounded corners
- `large` - Prominently rounded corners
- `full` - Fully rounded corners (creates a circular or pill-shaped button)

{% meta height:200 %}
{% embed_file speech-to-text/rounded-customization/main.vue preview %}
{% embed_file speech-to-text/rounded-customization/main.js %}
{% endmeta %}

### Theme Color

The `themeColor` prop determines the color scheme of the button. The available options are:

- `base` (default) - The base theme color
- `primary` - The primary theme color
- `secondary` - The secondary theme color
- `tertiary` - The tertiary theme color
- `info` - The information theme color (typically blue)
- `success` - The success theme color (typically green)
- `warning` - The warning theme color (typically yellow/orange)
- `error` - The error theme color (typically red)

{% meta height:200 %}
{% embed_file speech-to-text/themecolor-customization/main.vue preview %}
{% embed_file speech-to-text/themecolor-customization/main.js %}
{% endmeta %}

## Custom Styling

You can apply custom styles to the SpeechToText Button using the `style` and `class` attributes:

{% meta height:160 %}
{% embed_file speech-to-text/custom-styling/main.vue preview %}
{% embed_file speech-to-text/custom-styling/main.js %}
{% endmeta %}

## Active State Styling

When speech recognition is active, the SpeechToText Button automatically adds the `k-listening` CSS class and changes its icon to a stop icon. You can use this class to apply custom styles for the active state:

{% meta height:350 %}
{% embed_file speech-to-text/active-state/main.vue preview %}
{% embed_file speech-to-text/active-state/main.js %}
{% endmeta %}

## See Also

* [SpeechToText Button Icons]({% slug icons_speechtotext %})
* [SpeechToText Button States]({% slug states_speechtotext %})
* [SpeechToText Button API Reference]({% slug api_buttons_speechtotextbuttonprops %})
* [Kendo UI Themes]({% slug themesandstyles %})
