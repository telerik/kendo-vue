---
title: Events
description: "Learn how to handle events in the Kendo UI for Vue SpeechToText Button component."
slug: events_speechtotext
position: 800
---

# SpeechToText Button Events

The Kendo UI for Vue SpeechToText Button provides a set of events that allow you to respond to user interactions and speech recognition states.

## Available Events

The SpeechToText Button emits the following events:

- **[onStart]({% slug api_buttons_speechtotextbuttonprops %}#toc-onstart)** - Triggered when speech recognition starts.
- **[onResult]({% slug api_buttons_speechtotextbuttonprops %}#toc-onresult)** - Triggered when a speech recognition result is available.
- **[onEnd]({% slug api_buttons_speechtotextbuttonprops %}#toc-onend)** - Triggered when speech recognition ends.
- **[onError]({% slug api_buttons_speechtotextbuttonprops %}#toc-onerror)** - Triggered when an error occurs during speech recognition.

## Basic Usage

The following example demonstrates how to handle the basic events of the SpeechToText Button:

{% meta height:500 %}
{% embed_file speech-to-text/events/main.vue preview %}
{% embed_file speech-to-text/events/main.js %}
{% endmeta %}

## Event Details

### onStart Event

The `onStart` event is emitted when the user clicks the button and the speech recognition process begins.

```jsx
const onStart = () => {
  console.log('Speech recognition started');
  // Update UI to indicate that listening has started
};
```

### onResult Event

The `onResult` event is emitted whenever a speech recognition result is available. This event provides the result data from the speech recognition process.

The event object contains:

- `isFinal` (boolean): Indicates whether this is a final result or an interim result.
- `alternatives` (array): An array of alternative results, each with:
  - `transcript` (string): The recognized text.
  - `confidence` (number): A value between 0 and 1 indicating the confidence level of the recognition.

```jsx
const onResult = (event) => {
  const { isFinal, alternatives } = event;

  if (alternatives.length > 0) {
    const bestMatch = alternatives[0];
    console.log('Transcript:', bestMatch.transcript);
    console.log('Confidence:', bestMatch.confidence);

    if (isFinal) {
      // Process the final result
      processRecognizedText(bestMatch.transcript);
    } else {
      // Handle interim results (optional)
      updateIntermediateUI(bestMatch.transcript);
    }
  }
};
```

### onEnd Event

The `onEnd` event is emitted when the speech recognition process ends. This can happen when:

-   The user clicks the button again to stop listening OR
-   The speech recognition system stops automatically after detecting silence

```jsx
const onEnd = () => {
  console.log('Speech recognition stopped');
  // Update UI to indicate that listening has ended
};
```

### onError Event

The `onError` event is emitted when an error occurs during the speech recognition process. The event object contains information about the error.

Common error types include:

- `'no-speech'`: No speech was detected.
- `'aborted'`: The recognition was aborted by the user or system.
- `'audio-capture'`: Audio capture failed (e.g., no microphone available).
- `'network'`: Network communication required for recognition failed.
- `'not-allowed'`: The user denied permission to use the microphone.
- `'service-not-allowed'`: The user denied permission to use the speech recognition service.
- `'bad-grammar'`: There was an error in the grammar or language model.
- `'language-not-supported'`: The language specified is not supported.

```jsx
const onError = (event) => {
  console.error('Speech recognition error:', event.error);

  // Handle specific error types
  switch (event.error) {
    case 'not-allowed':
      alert('Please allow microphone access to use speech recognition.');
      break;
    case 'no-speech':
      console.log('No speech detected.');
      break;
    case 'network':
      alert('Network error. Please check your connection.');
      break;
    default:
      console.error('Speech recognition error:', event.error);
  }
};
```

## See Also

* [SpeechToText Button API Reference]({% slug api_buttons_speechtotextbuttonprops %})
* [Button Customization]({% slug customization_speechtotext %})
