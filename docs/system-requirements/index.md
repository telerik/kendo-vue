---
title: System Requirements
description: "Check out the system requirements you need to work with Kendo UI for Vue Native suite."
slug: requirements_installation
position: 10
---

# System Requirements

This article states the system requirements you need to work with the Kendo UI for Vue Native suite.

## Operating Systems

The Kendo UI for Vue Native suite is OS agnostic.

## Node.js

The required [Node.js](https://nodejs.org/en/) version is 14.0.0 or later. Alongside the Node.js installation, a supported [NPM](https://www.npmjs.com/) version will be installed. You can also install Kendo UI for Vue Native components with third-party package managers such as [Yarn](https://yarnpkg.com/lang/en/).

For Node.js version 16.0.0 and above, use the following flag to ensure all the correct peer dependencies versions are installed in your project.

```sh
npm install --legacy-peer-deps
```

To check your Node.js version, run `node --version` in a terminal or console window.

## Vue.JS Framework Versions

All Kendo UI for Vue Native components work with the latest versions of `Vue 3` and `Vue 2`. 



## API Compatibility

The Kendo UI for Vue Native components work with both the `Options` and `Composition` APIs.

## Browser Support

| **Chrome** | **Firefox** |           **Edge**           |          **Safari**          |          **iOS**          |           **Android**          |    **IE 11**    |
|:----------:|:-----------:|:----------------------------:|:----------------------------:|:----------------------------:|:----------------------------:|:---------------:|
|   latest   |    latest   | 2 most recent major versions | 2 most recent major versions | 2 most recent major versions | 2 most recent major versions | Only with Vue 2 |

Kendo UI for Vue Native Suite supports the major browsers just as the Vue Framework does. For more details, refer to the [FAQ -> What browsers does Vue support?](https://vuejs.org/about/faq.html#what-browsers-does-vue-support) article in the official Vue documentation.

### IE 11 Support
Kendo UI for Vue Native suite provides support for Internet Explorer 11 based on the Vue version used in your project. 

Vue 3.x uses ES2015 features that cannot be polyfilled in legacy browsers, so `if you need to support legacy browsers, you will need to use Vue 2.x` instead.


## Suggested Links

* [Keeping Up to Date]({% slug up_to_date %})
