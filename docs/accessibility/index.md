---
title: Overview
page_title: Accessibility Overview - Kendo UI for Vue
description: "General accessibility standards and keyboard navigation requirements for web applications and their support by Kendo UI for Vue."
slug: overview_accessibility
position: 0
---

# Accessibility Overview

Websites and applications are accessible when they provide full control over their features by enabling users with disabilities to access their content by using assistive technologies or keyboard navigation.

For the full list of components which support accessibility and keyboard navigation, refer to the article on [accessibility support by Kendo UI for Vue](slug:compliance_accessibility).

## Standards and Policies

Accessible websites and applications normally comply with some or all of the following standards:

* [Section 508](#toc-section-508)
* [Web Content Accessibility Guidelines (WCAG)](#toc-web-content-accessibility-guidelines)

### Section 508

Since 1998, Section 508 is part of the [U.S. Rehabilitation Act of 1973](https://en.wikipedia.org/wiki/Rehabilitation_Act_of_1973). Section 508 represents a set of accessibility standards which were defined by the U.S. General Services Administration (GSA) and which initially applied to Federal agencies only with the aim to ensure that their electronic and information technology is accessible to people with disabilities.

[In 2017, Section 508 was reorganized](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/overview-of-the-final-rule) to meet and reflect recent communication technology innovations and nowadays the Section 508 guidelines impact not only all U.S. Federal agencies, but also affect any company which does business with a Federal agency. Such companies include vendors, private contractors, financial industry, healthcare and legal organizations, and partners of those agencies which operate in the United States or abroad.

For more information, refer to:

* [Section 508 (Latest Amendment)](https://www.access-board.gov/the-board/laws/rehabilitation-act-of-1973#508)
* [Rehabilitation Act of 1973](https://legcounsel.house.gov/Comps/Rehabilitation%20Act%20Of%201973.pdf)
* [Kendo UI for Vue: Accessibility Support](slug:compliance_accessibility)

### Web Content Accessibility Guidelines

The Web Content Accessibility Guidelines (WCAG) which are set by the World Wide Web Consortium (W3C) define recommendations for making web content accessible to people with physical and cognitive disabilities. WCAG defines accessibility principles with their respective success criteria. Depending on the implemented success criteria by a web application, the WCAG provide the A, AA, and AAA levels of accessibility conformance.

For more information, refer to:

* [WCAG 2 Quick Reference Guide](https://www.w3.org/WAI/WCAG21/quickref/)
* [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21)

## Technical Specifications

* [WAI-ARIA](#toc-wai-aria)
* [Keyboard navigation](#toc-keyboard-navigation)

### WAI-ARIA

WAI-ARIA is a set of technical specifications which were developed by the W3C and which provide the semantics for the assistive technologies to access and interpret web content and web applications. The WAI-ARIA recommendations (standards) divide the semantics into roles and into states and properties which those roles support. For example, a [`checkbox` role](https://www.w3.org/TR/wai-aria-1.1/#checkbox) supports the [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) state which indicates whether a checkbox, radio button, or a similar UI element is checked.

The WAI-ARIA framework targets web developers who create web applications by using AJAX, scripting, and other rich application techniques.

For more information, refer to:

* [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
* [WAI-ARIA Role Definitions](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)
* [WAI-ARIA State and Property Definitions](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
* [Kendo UI for Vue: Accessibility Support](slug:compliance_accessibility)

### Keyboard Navigation

By default, users can only navigate to links, buttons, and form controls with a keyboard. The navigation order in which interactive items receive keyboard focus has to be logical and intuitive. Generally, keyboard navigation logic needs to follow the visual horizontal and vertical flow of the page. For example, left to right and top to bottom, header first followed by the main and then the page navigation.

[Keyboard accessibility](https://www.w3.org/WAI/WCAG21/quickref/#keyboard-accessible) is a category under the [WCAG Operable principle](https://www.w3.org/WAI/WCAG21/quickref/#principle2).

In WCAG 2.1, the keyboard accessible category provides the following success criteria:

* [Keyboard](https://www.w3.org/WAI/WCAG21/quickref/#keyboard)
* [No Keyboard Trap](https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap)
* [Keyboard (No Exception)](https://www.w3.org/WAI/WCAG21/quickref/#keyboard-no-exception)
* [Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/quickref/#character-key-shortcuts)

## Suggested Links

* [Accessibility Support by Kendo UI for Vue](slug:compliance_accessibility)
* [GSA Government-Wide Section 508 Accessibility Program](https://www.access-board.gov/the-board/laws/rehabilitation-act-of-1973#508)
* [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)
* [Accessibility Swatch for Kendo UI for Vue](slug:themes_swatch_accessibility)
