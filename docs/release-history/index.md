---
title: Kendo UI for Vue - Release History
heading: Release History
description: Kendo UI for Vue - Release History
---

## 2020 R3 <span class="release-date">(2020-09-16)</span> 

#### Support for the Latest Vue.js 3.0 Release Candidate
All Kendo UI for Vue components, both wrapped and native UI components, are compatible with the latest Vue 3.0 RC.

#### New Native ComboBox Component
The new Kendo UI for Vue ComboBox component is a form element designed to let users select from a list of available data items. Extending on top of the HTML `<select>` element, the ComboBox has features like data binding, filtering, and letting users input their own custom text.

#### New Native AutoComplete Component
The Kendo UI for Vue AutoComplete component is a text input component that showcases potential values in a popup as a user focuses the Vue component. Additionally, the Vue AutoComplete will automatically filter down available data items as the user types.

#### New Native MaskedTextBox Component
With the new Kendo UI for Vue MaskedTextBox component developers can provide any predefined mask, or create their own custom masks, to ensure that users only input data in the appropriate format.

## 2020 R2 <span class="release-date">(2020-05-13)</span>

#### new Native Calendar component
The Kendo UI for Vue Calendar is a form component that represents a graphical Gregorian calendar and supports the selection of and navigation between dates and date ranges for scheduling appointments.

#### new Native DateInput component
The Kendo UI for Vue DateInput represents an input field that recognizes and formats scheduling values such as dates.

#### new Native DatePicker component
The Kendo UI for Vue DatePicker component offers a highly customizable interface for the user to enter and pick dates supporting different locales.

#### release v1.0.0  - add DropDownList, NumericTextBox and DatePicker to Native Grid

#### add Footer Cell to Native Grid for Vue

#### remove vue-class-component dependency

## 2020 R1 <span class="release-date">(2020-01-15)</span>

#### new Native DropDownList component

#### new Native Input component

#### new Native NumericTextBox component

#### new Native Dialog component

#### new Native Popup component

#### new Native Animation component


## 2019 R3 <span class="release-date">(2019-09-17)</span>

#### Bug Fixing Effort
For R3 2019 the Vue team put in a considerable amount of effort around resolving reported bugs and issues with the existing *native data Grid* as well as the *wrapped* Vue.js components ensuring that R3 2019 is the most stable release of Kendo UI for Vue.js to date.

#### Documentation Updates
As the Vue.js UI components are fairly new, between R2 and R3 2019 the Kendo UI team focused on adding more documentation articles and samples for all available UI components - especially the native Grid. Exploring the documentation will highlight more scenarios and features than previously - often times directly coming from feedback or requests from Kendo UI for Vue.js users.

## 2019 R2 <span class="release-date">(2019-05-15)</span>

#### Native Data Grid Enhancements
The native Kendo UI Grid for Vue.js received a lot of attention in the last couple of months:

* **Grouping & Virtualization** - Virtualization can now be used in conjunction with grouping, meaning that there are no longer limitations for using groups along with virtualization. This can yield a huge performance gain.
* **Frozen / Locked Columns** - Frozen, or locked, columns provide a slick way to ensure that a column is permanently displayed as you scroll through your columns. A column doesn’t always have to be frozen and you can set up columns to only lock once they have scrolled past.
* **Grid Column Menu** - Being able to provide more options for interacting with columns is often a requirement for any Grid implementation. With the column menu feature developers can now set up a default menu, or a customized menu, for interacting with features like filtering, sorting, the showing and hiding of columns - all within a menu that appears when you click on the Grid’s headers.

#### ListView - Endless Scrolling
Having a pager at the bottom of a data bound list is sometimes far from ideal based on user requirements - end-users would like to just see a scrollbar instead. This is where Endless Scrolling comes in to play as it gives your users a way to scroll through all of your data without seeing a pager, and you as the developer receives a ton of benefits from loading pages of data rather than all data at once.

## 2019 R1 <span class="release-date">(2019-09-16)</span>

#### New Component: Native Vue.js Data Grid
with the R1 2019 release we have delivered a *native* data grid for Vue.js! This means no jQuery dependencies and an even deeper integration with the Vue.

The data grid can easily be bound to any data repository, local or remote, and provides a ton of features out-of-the-box to ensure users can not only display data but also interact with it. Specifically we have introduced the following features:

* Paging
* Sorting
* Filtering
* Grouping
* Editing
* Column Resizing and Reordering
* Multi-column headers
* Virtual Scrolling
* Custom Rendering (templates)
* Globalization / Localization
* Export to PDF and Excel


#### New Component: MultiViewCalendar
The MultiViewCalendar provides two calendars representing two months next to each other, side-by-side. This provides an easier way to select a range of dates across multiple weeks and months.

#### New Component: DateRangePicker
The DateRangePicker provides the MultiViewCalendar in a drop down component, giving a single input element to provide a start and end date range.

#### New Component: Ripple
This new component, Ripple, ties in with the Material theme and gives developers a generic way to create the nice-looking ripple animation that has originated from the Material theme.

#### New Component: ScrollView
With the ScrollView you can have a list of images scrolled through (either manual or automatic) taking up the real-estate of a single image. Any scroll just swaps out the currently viewed image.

#### New Component: Switch
A traditional switch component that gives a nice user experience for toggling between values (on/off, true/false, etc.). Labels listed can be completely customized.

## 2018 R3 <span class="release-date">(2018-09-12)</span>

#### WCAG 2.1 Compliance
With the R3 2018 the wrapped Vue components become the first commercial UI library to officially support [the new WCAG 2.1 recommended standard for web accessibility](https://www.w3.org/TR/WCAG21/).

#### New Components
In R3 2018 we added the **MultiColumnComboBox** component. This is a great way to display data in a table but hide it away in a ComboBox.

Another new component is the **ArcGauge** wrapper&mdash;ideal for quick and elegant data visualization needs.

#### Updates to Existing Vue Components
The TreeList component received the following updates, bridging the gap further between it and the Grid component:

* **Multi-column headers**
* **Client-side paging**
* **Batch/In-cell editing**
* **Keyboard navigation**

The Grid also added functionality.
* **Group summaries are now available in the group header**
* **Support for the `media` property in columns for responsive web apps**
* **API added: update column width programmatically**

The Conversational UI component received a popular feature as well, namely, the **toolbar feature**. This lets developers add in more ways to interact with the chat interface.

Between May of 2018 and the R3 2018 release we **added over 200 new demos** to our Vue documentation. This is all in an effort to make the getting started experience with our Vue UI components as seamless as possible, all while providing advanced users with more in-depth articles.

Lastly, the Vue components are now fully compatible with **Material Design** with the new **Material Theme**.

## 2018 R2 <span class="release-date">(2018-05-16)</span>

#### Conversational UI

The R2 2018 release for Vue.js includes the new Conversational UI component that is now featured across all flavors of Kendo UI.

#### DropDownTree

As a part of this release we also introduced the new DropDownTree component&mdash;combining the best of a TreeView and DropDown all in one.

#### Vuex integration

To ensure that Vue.js developers can continue to use their favorite libraries along with Vue.js and Kendo UI the components now officially support integration with Vuex.

## 2018 R1 <span class="release-date">(2018-01-17)</span>

#### Full-coverage of Kendo UI components

For the R1 2018 release Kendo UI Wrappers for Vue.js now cover all UI components offered by Kendo UI - bringing the full power of Kendo UI over to Vue.js

#### Template Support

The Vue.js components now include support for the native Vue template functionality, replacing the need to use the Kendo UI templates when working with the Kendo UI components.

## 2017 R3 <span class="release-date">(2017-09-13)</span>

#### Initial release of Kendo UI Wrappers for Vue.js

The R3 2017 release is the initial release of our UI components for Vue.js. This initial coverage of components include some of our most popular components (including the Grid) and share functionality with our jQuery widgets.
