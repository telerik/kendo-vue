---
title: Configuration
description: "Learn how to configure the speech recognition settings of the Kendo UI for Vue Native SpeechToText Button component in Vue projects."
slug: speech_configs_speechtotext
position: 20
---

# Kendo UI for Vue SpeechToText Button Configuration Options

The Kendo UI for Vue Native SpeechToText Button component offers various configuration options for controlling how speech recognition works. This page outlines how to configure the speech recognition settings to meet your application's needs.

## Basic Usage

The SpeechToText Button component can be easily integrated into your application by adding the component to your application and configuring its speech recognition options and events.

{% meta height:220 %}
{% embed_file speech-to-text/basic-speech-config/main.vue preview %}
{% embed_file speech-to-text/basic-speech-config/main.js %}
{% endmeta %}

## Language Configuration

You can set the language used for speech recognition with the `lang` property. The SpeechToText Button component supports various language codes based on the [Web Speech API language support](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang).

{% meta height:510 %}
{% embed_file speech-to-text/language-selection/main.vue preview %}
{% embed_file speech-to-text/language-selection/main.js %}
{% endmeta %}

### Supported Languages

The available languages depend on the underlying speech recognition engine. For the browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), refer to the [list of supported languages](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang#languages).


## Continuous Recognition

The `continuous` property determines whether the speech recognition should continue listening after results are returned. When set to `true`, the recognition will continue until explicitly stopped, allowing users to speak multiple sentences.

{% meta height:450 %}
{% embed_file speech-to-text/continuous-recognition/main.vue preview %}
{% embed_file speech-to-text/continuous-recognition/main.js %}
{% endmeta %}

## Interim Results

With `interimResults` set to `true`, the component will return partial results as they become available while the user is speaking. This provides real-time feedback to users as they speak.

{% meta height:550 %}
{% embed_file speech-to-text/interim-results/main.vue preview %}
{% embed_file speech-to-text/interim-results/main.js %}
{% endmeta %}

## Multiple Recognition Alternatives

The SpeechToText Button component can provide alternative interpretations of the spoken text by configuring the `maxAlternatives` property. This is useful for ambiguous speech or words with similar pronunciations.

{% meta height:700 %}
{% embed_file speech-to-text/multiple-alternatives/main.vue preview %}
{% embed_file speech-to-text/multiple-alternatives/main.js %}
{% endmeta %}



## See Also

* [SpeechToText Button API Reference]({% slug api_buttons_speechtotextbuttonprops %})
