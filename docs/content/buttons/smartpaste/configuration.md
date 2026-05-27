---
title: Configuration
description: 'Configure the Kendo UI for Vue SmartPasteButton component to intelligently fill form fields from clipboard content using AI.'
components: ['smartpaste']
slug: configuration_smartpaste
position: 20
---

# SmartPasteButton Configuration

The SmartPasteButton automatically detects form fields and uses AI to extract relevant values from clipboard content. You can configure how the component interacts with the AI service and which form fields are targeted.

<demo metaUrl="buttons/smartpaste/configuration/" height="510"></demo>

## AI Service Integration

Attach a `click` event handler to send clipboard content to your AI endpoint and fill in the form fields with the extracted values.

```vue
<template>
    <SmartPasteButton @click="handleSmartPaste">Smart Paste</SmartPasteButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SmartPasteButton } from '@progress/kendo-vue-buttons';

const handleSmartPaste = async (event) => {
    // Send clipboard content to AI endpoint
};
</script>
```

## Automatic Form Detection

The SmartPasteButton automatically detects form fields within the closest form element and fills them with the extracted values.

## Explicit Form Field Configuration

You can explicitly configure which form fields the SmartPasteButton targets by specifying field types, descriptions, fixed choices, and selective fields.

<demo metaUrl="buttons/smartpaste/field-type-specification/" height="510"></demo>

### Field Descriptions

<demo metaUrl="buttons/smartpaste/field-descriptions/" height="510"></demo>

### Fixed Choice Fields

<demo metaUrl="buttons/smartpaste/fixed-choice-fields/" height="510"></demo>

### Selective Fields

<demo metaUrl="buttons/smartpaste/selective-fields/" height="510"></demo>

## Trigger Smart Paste Programmatically

<demo metaUrl="buttons/smartpaste/programmatic-trigger/" height="550"></demo>
