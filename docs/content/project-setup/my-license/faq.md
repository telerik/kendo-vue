---
title: FAQs
page_title: Licensing FAQ - Kendo UI for Vue
description: "Find the answers to your questions about the licensing in the Kendo UI for Vue"
slug: faq_license
position: 4
---

# Frequently Asked Questions

## Will the product function without a license key?

Yes, the product will continue to function normally without a license key. However, the following will happen if a valid license key is not present:
* A watermark will appear above selected Kendo UI for Vue components.
* A licensing banner will pop over a page that uses unlicensed Kendo UI for Vue components.
* A warning message will appear in the browser console.

See the [Invalid License](slug:license_activation_errors#toc-invalid-license) section for more information.

Please, be aware that future updates of the library may restrict or disable some features when no valid license is present.

## Will a watermark and license banner appear if I use a Kendo UI for Vue version that was released prior to v.3.14.0?

If you have a valid license activated for your project, you won't get any [invalid license attributes](slug:license_activation_errors#toc-invalid-license).

## Does the license key expire?

Yes, the license key expires at the end of your support subscription.

For trial users, this is at the end of your 30-day trial. For licensed developers, this is when your subscription expires.

You will need to obtain and install a new license key after starting a trial, renewing a license, or upgrading a license.

An expired license key is valid for all Kendo UI for Vue versions _published before its expiration date_. The publish date of each version is available in the [Kendo UI for Vue changelog](https://www.telerik.com/kendo-vue-ui/components/changelogs/ui-for-vue/).

## I am using Vite in my project. I can't hide the invalid license watermarks, banner, and console warning even though the license activation is successful. What should I do?

The described scenario happens in Vite context and most often when you have previously activated a commercial or trial license in your project and now you want to renew this license. In the discussed case, once you run `npx kendo-ui-license activate`, the console message says you have successfully activated your license but in fact, all [invalid license attributes](slug:license_activation_errors#toc-invalid-license) are still presented.

The reason for the issue is that Vite is not updating its cache after the licensing command is executed. To make the warning disappear:
1. Delete the `.vite` folder in the `node_modules` folder of the project.
1. Execute the `npx kendo-ui-license activate` command.

## I updated the version of the Kendo UI for Vue packages in my project and the invalid license attributes appeared. How to hide these items?

If this happens, the possible reason is that the end date of the license activated in your application is before the release date of the newly installed Kendo UI for Vue packages. To fix this issue:
1. [Download a new license key](slug:my_license#toc-download-your-license-key).
1. [Activate the new license key](slug:my_license#toc-install-or-update-a-license-key) in your project.

## Do I need an Internet connection to activate the license?

No, the license activation and validation are performed entirely offline.

No network requests are made at any point of the project lifecycle.

## Should I add the license key to source control?

No, you do not have to add the `telerik-license.txt` license key file or its contents to source control.

Build servers should use the `TELERIK_LICENSE` environment variable as described above.

**DO NOT** Store the license key in plaintext, for example in a GitHub Actions Workflow definition.

## Is it possible to activate the license without executing commands?

Yes, the license will be activated automatically if it is present during package installation. This applies to both license key files and the environment variable. A diagnostic message will be printed in the `npm install` log.

Using the `kendo-ui-license activate` command is optional, but recommended in builds as it will return an error if the activation fails.

## What happens if both the environment variable and the license key file are present?

If both the `TELERIK_LICENSE` environment variable and the `telerik-license.txt` file are present, then the environment variable is used.

To enforce the use of the license key file, unset the environment variable.

## How can I manage my license?

You can now easily review, access, and download the available license key and license through our improved flow.

1. To view or download your Kendo UI for Vue license key, visit the [License Key Page](https://www.telerik.com/account/your-licenses/license-keys).
2. To view the licenses, visit the [Your Licenses Page](https://www.telerik.com/account/your-licenses).

## My team has more than one licensed developer. Which key should we use?

Any of the keys associated with your subscription(s) could be used to activate Kendo UI for Vue.

## Are older versions of Kendo UI for Vue affected?

No, versions prior to v2.0.0 do not require a license key.

## Suggested Links

* [Setting Up Your License Key](slug:my_license)
* [License Activation Errors and Warnings](slug:license_activation_errors)
* [Adding the License Key to CI Services](slug:ci_services_license)
