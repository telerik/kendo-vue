---
title: System Requirements
page_title: System Requirements - Kendo UI for Vue
description: "Check out the system requirements you need to work with Kendo UI for Vue."
slug: requirements_installation
position: 100
---

# System Requirements

This article states the system requirements you need to work with the Kendo UI for Vue suite.

## Operating Systems

The Kendo UI for Vue suite is OS agnostic, which allows it to run seamlessly on any operation system without requiring specific adjustments.

## Node.js

The Kendo UI for Vue library adheres to the version compatibility rules that the Vue framework requires. For more detailed information about the compatible [Node.js](https://nodejs.org/en/) versions for each Vue release, check out the Vue documentation.

Currently, the required Node.js version is 16.0.0 or later. Alongside the Node.js installation, a supported [NPM](https://www.npmjs.com/) version will be installed. You can also install Kendo UI for Vue components with third-party package managers such as [Yarn](https://yarnpkg.com/lang/en/).

For Node.js version 16.0.0 and above, use the following flag to ensure all the correct peer dependencies versions are installed in your project.

```sh
npm install --legacy-peer-deps
```

To check your Node.js version, run `node --version` in a terminal or console window.

## Vue

Kendo UI for Vue supports Vue 3 and focuses on leveraging the latest Vue framework capabilities.

> Vue 2 support has been deprecated. For more information about the Vue 2 deprecation timeline and migration guidance, see the [Vue 2 Deprecation](https://www.telerik.com/kendo-vue-ui/components/vue2-deprecation) announcement.

Currently, the supported Vue versions are:

| Vue Version | Status | Kendo UI for Vue compatible versions |
|---------|--------|------------------------------------------|
| ^3.0.0 | Active | All current Kendo UI for Vue versions |
| ^2.6.0 | Deprecated | Legacy versions only - no new features |

> The Kendo UI for Vue components are built for Vue 3 and leverage the Composition API. We recommend migrating Vue 2 applications to Vue 3 for continued support and access to new features.

For more details about the actively supported releases of Vue, refer to the [Vue Releases](https://github.com/vuejs/core/releases) page in the official Vue documentation.

To check your Vue project version, run `npm list vue` in a terminal or console window.

## Browser Support

| **Chrome** | **Firefox** |           **Edge**           |          **Safari**          |          **iOS**          |           **Android**          |
|:----------:|:-----------:|:----------------------------:|:----------------------------:|:----------------------------:|:----------------------------:|
|   2 most recent major versions   |    latest   | 2 most recent major versions | 2 most recent major versions | 2 most recent major versions | 2 most recent major versions |

Kendo UI for Vue supports the major browsers that Vue supports. For more details, refer to the browser compatibility requirements in Vue applications.

### Dropping IE 11 Support

Kendo UI for Vue no longer provides support for Internet Explorer 11 since the end of 2022.

The main reason for dropping the IE 11 support is that modern Vue applications and build tools no longer support IE 11, and the Vue ecosystem has moved away from legacy browser support.

Additionally, Microsoft retired the [IE 11 desktop application](https://docs.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge) and ended support for certain operating systems on June 15, 2022.

## Suggested Links

* [Keeping Up to Date](slug:up_to_date)
* [Getting Started with Vue](https://vuejs.org/guide/)
* [End of Internet Explorer Support for Telerik & Kendo UI Web Components](https://www.telerik.com/blogs/end-internet-explorer-support-telerik-kendo-ui-web-components)
