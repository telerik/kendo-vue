---
title: Prototype Pollution Vulnerability (11628)
description: "How to mitigate CVE-2024-11628, a prototype pollution vulnerability."
slug: kb-security-prototype-pollution-cve-2024-11628
tags: telerik, kendo, security, vue, cve-2024-11628, kb
published: True
position: 2
res_type: kb
category: knowledge-base
---

## Description

Product Alert - Febrary 2025 - [CVE-2024-11628](https://www.cve.org/CVERecord?id=CVE-2024-11628)

- Progress® Telerik® Kendo UI for Vue v2.4.0 - v6.0.1

## Issue

CWE-1321 Improperly Controlled Modification of Object Prototype Attributes ('Prototype Pollution')

### What Are the Impacts

In Progress® Telerik® Kendo UI for Vue versions from v2.4.0 to v6.0.1, an attacker can introduce or modify properties within the global prototype chain which can result in denial of service or command injection.

## Solution

Updating to at least version Kendo UI for Vue v6.1.0 is the only way to remove this vulnerability. We have addressed the issue and the Progress Telerik team recommends performing an upgrade to the version listed in the table below.

| Current Version | Guidance |
|-----------------|----------|
| 2.4.0 - 6.0.1 | 6.1.0 ([update instructions](https://www.telerik.com/kendo-vue-ui/components/up-to-date/)) |

Customers can access the updated packages via npm. See [installation documentation](https://www.telerik.com/kendo-vue-ui/components/getting-started/) for more information.

## Notes

- If you are not using the Form component in your application, this vulnerability does not affect you.
- To check your version of Kendo UI for Vue, view your project's dependencies list (e.g., package.json) or use the `npm list` command.
- If you have any questions or concerns related to this issue, open a new Technical Support case in [Your Account | Support Center](https://www.telerik.com/account/support-center/contact-us/). Technical Support is available to customers with an active support plan.
- We would like to thank Tariq Hawis for their cooperation and responsible disclosure with CVE-2024-11628.

## External References

[CVE-2024-11628](https://www.cve.org/CVERecord?id=CVE-2024-11628) (MEDIUM)

**CVSS:** 4.1

In Progress® Telerik® Kendo UI for Vue versions v2.4.0 through v6.0.1, an attacker can introduce or modify properties within the global prototype chain with the consequences of denial of service or command injection.

CREDIT: Tariq Hawis
