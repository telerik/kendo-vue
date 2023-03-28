---
title: Accessibility Support
page_title: Accessibility Support - Kendo UI for Vue Docs & Demos
description: "A list of the Kendo UI components for Vue in terms of the accessibility and keyboard navigation support they provide."
slug: compliance_accessibility
position: 90
---

# Accessibility Support

How the Kendo UI for Vue Team Approaches Accessibility

When implementing any Kendo UI for Vue component, the Kendo UI for Vue team follows the WAI-ARIA specification to ensure that the right foundation for the accessibility of each component is laid. From there, the team employs automated testing across the Kendo UI for Vue library through the Compliance Sheriff tool, which the team has found to be the tool that works best for automated accessibility testing of the product. Each component also goes through manual testing, which includes testing the components with various screen readers and testing out other aspects of accessibility such as keyboard navigation.

Due to the complexity of some of the components in the Kendo UI for Vue UI library, the team sometimes runs into scenarios not covered by the WAI-ARIA specification. In those cases, they tap into the web development accessibility know-how of the rest of the Progress organization, including feedback from accessibility-minded users, for expertise and feedback based on 10 years of creating web component libraries. This knowledge-sharing across internal teams and clients helps the team ensure that Kendo UI for Vue can reach a certain level of accessibility compliance even with its most advanced components.

The following table lists the accessibility compliance levels and keyboard navigation support provided by the Kendo UI for Vue UI components.

|Component |Section 508|WCAG 2.1| Accessibility Example | Accessibility Documentation |
|:---          |:---|:---|:---|:---
|`Appbar`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_appbar) |
|`ArcGauge`|`No`|`n/a`| `n/a` | `n/a` |
|`AutoComplete`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_autocomplete) | [Documentation](slug:accessibility_autocomplete) |
|`Avatar`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_avatar) |
|`Badge`|`No`|`n/a`| `n/a` | `n/a` |
|`BottomNavigation`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_bottomnavigation) |
|`Button`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_button) |
|`ButtonGroup`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_buttongroup) |
|`Calendar`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_calendar) | [Documentation](slug:accessibility_calendar) |
|`Card`|`No`|`n/a`| `n/a` | `n/a` |
|`Chart`|`No`|`n/a`| `n/a` | `n/a` |
|`CheckBox`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_checkbox) | [Documentation](slug:accessibility_checkbox) |
|`Chip`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_chip) |
|`Chiplist`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_chiplist) | [Documentation](slug:accessibility_chiplist) |
|`ChunkProgressBar`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_chunkprogressbar) |
|`CircularGauge`|`No`|`n/a`| `n/a` | `n/a` |
|`ColorGradient`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_colorgradient) |
|`ColorPalette`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_colorpalette) | [Documentation](slug:accessibility_colorpalette) |
|`ColorPicker`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_colorpicker) | [Documentation](slug:accessibility_colorpicker) |
|`ComboBox`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_combobox) | [Documentation](slug:accessibility_combobox) |
|`DateInput`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_dateinput) | [Documentation](slug:accessibility_dateinput) |
|`DatePicker`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_datepicker) | [Documentation](slug:accessibility_datepicker) |
|`DateRangePicker`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_daterangepicker) | [Documentation](slug:accessibility_daterangepicker) |
|`DateTimePicker`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_datetimepicker) | [Documentation](slug:accessibility_datetimepicker) |
|`Dialog`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_dialog) | [Documentation](slug:accessibility_dialog) |
|`Drawer`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_drawer) |
|`DropDownButton`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_dropdownbutton) | [Documentation](slug:accessibility_dropdownbutton) |
|`DropDownList`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_dropdownlist) | [Documentation](slug:accessibility_dropdownlist) |
|`Editor`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_editor) |
|`ExpansionPanel`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_expansionpanel) | [Documentation](slug:accessibility_expansionpanel) |
|`Filter`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_filter) |
|`FlatColorPicker`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_flatcolorpicker) |
|`FloatingActionButton `|`Yes`|`AA`| [Demo](slug:keyboard_navigation_floatingactionbutton) | [Documentation](slug:accessibility_floatingactionbutton) |
|`FloatingLabel`|`No`|`n/a`| `n/a` | `n/a` |
|`Form`|`No`|`n/a`| `n/a` | `n/a` |
|`Grid`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_grid) | [Documentation](slug:accessibility_grid) |
|`GridLayout`|`No`|`n/a`| `n/a` | `n/a` |
|`Input`|`No`|`n/a`| `n/a` | `n/a` |
|`Label`|`No`|`n/a`| `n/a` | `n/a` |
|`LinearGauge`|`No`|`n/a`| `n/a` | `n/a` |
|`ListBox`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_listbox) |
|`Listview`|`Yes`|`AAA`| `n/a` | [Documentation](slug:accessibility_listview) |
|`Loader`|`No`|`n/a`| `n/a` | `n/a` |
|`MaskedTextBox`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_maskedtextbox) |
|`Menu`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_menu) | [Documentation](slug:accessibility_menu) |
|`MultiSelect`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_multiselect) | [Documentation](slug:accessibility_multiselect) |
|`Notification`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_notification) |
|`NumericTextBox`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_numerictextbox) | [Documentation](slug:accessibility_numerictextbox) |
|`Pager `|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_pager) |
|`PanelBar`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_panelbar) | [Documentation](slug:accessibility_panelbar) |
|`Popup`|`Yes`|`AA`| `n/a` | `n/a` |
|`ProgressBar`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_progressbar) |
|`RadialGauge`|`No`|`n/a`| `n/a` | `n/a` |
|`RadioButton`|`Yes`|`AA`| `n/a` | `n/a` |
|`RadioGroup`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_radiogroup)  | [Documentation](slug:accessibility_radiogroup) |
|`RangeSlider`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_rangeslider)  | [Documentation](slug:accessibility_rangeslider) |
|`Scheduler`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_scheduler)  | [Documentation](slug:accessibility_scheduler) |
|`ScrollView`|`No`|`n/a`| `n/a` | `n/a` |
|`Signature`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_signature) |
|`Skeleton`|`Yes`|`AAA`| `n/a` | [Documentation](slug:accessibility_skeleton) |
|`Slider`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_slider) | [Documentation](slug:accessibility_slider) |
|`SplitButton`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_splitbutton) | [Documentation](slug:accessibility_splitbutton) |
|`Splitter`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_splitter) | [Documentation](slug:accessibility_splitter) |
|`StackLayout`|`No`|`n/a`| `n/a` | `n/a` |
|`Stepper`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_stepper) | [Documentation](slug:accessibility_stepper) |
|`Stockchart`|`No`|`n/a`| `n/a` | `n/a` |
|`Switch`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_switch) | [Documentation](slug:accessibility_switch) |
|`Tabstrip`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_tabstrip) | [Documentation](slug:accessibility_tabstrip) |
|`TextArea`|`Yes`|`AAA`| `n/a` | [Documentation](slug:accessibility_textarea) |
|`TileLayout`|`Yes`|`AAA`| `n/a` | [Documentation](slug:accessibility_tilelayout) |
|`TimePicker`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_timepicker) | [Documentation](slug:accessibility_timepicker) |
|`Toolbar`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_toolbar) |
|`Tooltip`|`Yes`|`AA`| `n/a` | [Documentation](slug:accessibility_tooltip) |
|`Treelist`|`No`|`n/a`| `n/a` | `n/a` |
|`TreeView`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_treeview) | [Documentation](slug:accessibility_treeview) |
|`Upload`|`Yes`|`AAA`| [Demo](slug:keyboard_navigation_upload) | [Documentation](slug:accessibility_upload) |
|`Window`|`Yes`|`AA`| [Demo](slug:keyboard_navigation_window) | [Documentation](slug:accessibility_window) |


The UI for Vue Native components are highly extensible and customizable. This means that, depending on the level of customization applied, you may be introducing rendering that is not accessible. Therefore, it is recommended that you test any modifications you make to the Kendo UI for Vue components to ensure the components still meet the desired level of accessibility standards. Additionally, be mindful of components working with custom input (images, text, HTML content, and so on) and make sure your content is accessible, too.

> Last updated on `14 March, 2023`. Related to v3.8.5 of the Native Vue components. Using Vue v3.2.47.

## Suggested Links

* [Overview of Accessibility](slug:overview_accessibility)
* [Telerik Blogs: Accessibility Guidebook for Web Development](https://www.telerik.com/blogs/web-accessibility-guidebook-for-developers?fbclid=IwAR2L0K0iOGfagkvLQQUBM5hxkO2s7P_ZM7gT3dqdj1_LO328eHN9NkVjk0o)
