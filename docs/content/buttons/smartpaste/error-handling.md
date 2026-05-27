---
title: Validation
description: 'Handle validation and errors in the Kendo UI for Vue SmartPasteButton component.'
components: ['smartpaste']
slug: error_handling_smartpaste
position: 30
---

# Validation

The SmartPasteButton provides built-in validation capabilities to ensure that the AI-extracted values are valid before filling in the form fields.

## Default Validation

By default, the SmartPasteButton validates the extracted values against the form field types and constraints.

<demo metaUrl="buttons/smartpaste/error-handling/" height="510"></demo>

## Manual Validation

You can manually validate the extracted values before applying them to the form fields.

<demo metaUrl="buttons/smartpaste/manual-validation/" height="510"></demo>

## Content Pre-Validation

You can pre-validate the clipboard content before sending it to the AI endpoint.

<demo metaUrl="buttons/smartpaste/content-validation/" height="510"></demo>
