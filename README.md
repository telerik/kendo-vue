# Kendo UI for Vue 3 and Vue 2

Kendo UI for Vue uses GitHub Issues as a bug tracker. This repository is here for that purpose&mdash;it does not contain the actual components source code. 

In this repository you will also find examples of how our components can be integrated in more complex scenarios. 

> Historically, all Kendo UI for Vue Native components support both **Vue 2** and **Vue 3**, however Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Table of Contents  
* [Features of Kendo UI for Vue suite](#features-of-kendo-ui-for-vue-suite)  
* [Components planned for the next official release](#components-planned-for-the-next-release)  
* [How do I…?](#how-do-i)  
* [When do you plan on releasing Feature X](#when-do-you-plan-on-releasing-feature-x)  
* [I think I found a bug](#i-think-i-found-a-bug)  
* [I want to report a bug](#i-want-to-report-a-bug)  
* [I need a tailor-made solution](#i-need-a-tailor-made-solution)  

## Features of Kendo UI for Vue suite

The following table lists the widgets and features available in Kendo UI for Vue Native suite. In this document you will also find a list of the components we plan to release with our next official release. 

| Component name | Kendo UI for Vue Native |
| ------- | :------------------: |
| **Data Management**       |
| [Grid](https://www.telerik.com/kendo-vue-ui/components/grid/)                 | :white_check_mark:           |
| **Editor**       |
| [Editor](https://www.telerik.com/kendo-vue-ui/components/editor/)                 | :white_check_mark:           |
| **Scheduler**       |
| [Scheduler](https://www.telerik.com/kendo-vue-ui/components/scheduler/)                 | :white_check_mark:           |
| **TreeView**       |
| [TreeView](https://www.telerik.com/kendo-vue-ui/components/treeview/)                 | :white_check_mark:           |
| **Buttons**            |
| [Button](https://www.telerik.com/kendo-vue-ui/components/buttons/button/)              | :white_check_mark:           |
| [ButtonGroup](https://www.telerik.com/kendo-vue-ui/components/buttons/buttongroup/)    | :white_check_mark:           |
| [DropDownButton](https://www.telerik.com/kendo-vue-ui/components/buttons/dropdownbutton/)    | :white_check_mark:           |
| [Chip](https://www.telerik.com/kendo-vue-ui/components/buttons/chip/)    | :white_check_mark:           |
| [ChipList](https://www.telerik.com/kendo-vue-ui/components/buttons/chiplist/)    | :white_check_mark:           |
| [FloatingActionButton ](https://www.telerik.com/kendo-vue-ui/components/buttons/floatingactionbutton/)          | :white_check_mark:           |
| [SplitButton](https://www.telerik.com/kendo-vue-ui/components/buttons/splitbutton/)          | :white_check_mark:           |
| [ToolBar ](https://www.telerik.com/kendo-vue-ui/components/buttons/toolbar/)          | :white_check_mark:           |
| **Dropdowns**            |
| [AutoComplete](https://www.telerik.com/kendo-vue-ui/components/dropdowns/autocomplete/)              | :white_check_mark:           |
| [ComboBox](https://www.telerik.com/kendo-vue-ui/components/dropdowns/combobox/)    | :white_check_mark:           |
| [DropDownList](https://www.telerik.com/kendo-vue-ui/components/dropdowns/dropdownlist/)    | :white_check_mark:           |
| [MultiSelect](https://www.telerik.com/kendo-vue-ui/components/dropdowns/multiselect/)    | :white_check_mark:           |
| **Gauges**            |
| [ArcGauge](https://www.telerik.com/kendo-vue-ui/components/gauges/arcgauge/)              | :white_check_mark:           |
| [CircularGauge](https://www.telerik.com/kendo-vue-ui/components/gauges/circulargauge/)    | :white_check_mark:           |
| [LinearGauge](https://www.telerik.com/kendo-vue-ui/components/gauges/lineargauge/)    | :white_check_mark:           |
| [RadialGauge](https://www.telerik.com/kendo-vue-ui/components/gauges/radialgauge/)    | :white_check_mark:           |
| **Dialogs**            |
| [Dialog](https://www.telerik.com/kendo-vue-ui/components/dialogs/dialog/)              | :white_check_mark:           |
| [Window](https://www.telerik.com/kendo-vue-ui/components/dialogs/window/)    | :white_check_mark:           |
| **Inputs**            |
| [Input](https://www.telerik.com/kendo-vue-ui/components/inputs/input/)              | :white_check_mark:           |
| [MaskedTextBox](https://www.telerik.com/kendo-vue-ui/components/inputs/maskedtextbox/)    | :white_check_mark:           |
| [NumericTextBox](https://www.telerik.com/kendo-vue-ui/components/inputs/numerictextbox/)    | :white_check_mark:           |
| [Slider](https://www.telerik.com/kendo-vue-ui/components/inputs/slider/)    | :white_check_mark:           |
| [Checkbox](https://www.telerik.com/kendo-vue-ui/components/inputs/checkbox/)    | :white_check_mark:           |
| [RadioButton](https://www.telerik.com/kendo-vue-ui/components/inputs/radiobutton/)    | :white_check_mark:           |
| [RadioGroup](https://www.telerik.com/kendo-vue-ui/components/inputs/radiogroup/)    | :white_check_mark:           |
| [RangeSlider](https://www.telerik.com/kendo-vue-ui/components/inputs/rangeslider/)    | :white_check_mark:           |
| [Switch](https://www.telerik.com/kendo-vue-ui/components/inputs/switch/)    | :white_check_mark:           |
| [TextArea](https://www.telerik.com/kendo-vue-ui/components/inputs/textarea/)    | :white_check_mark:           |
| **Date Inputs**                |
| [Calendar](https://www.telerik.com/kendo-vue-ui/components/dateinputs/calendar/)          | :white_check_mark:           |
| [DateInput](https://www.telerik.com/kendo-vue-ui/components/dateinputs/dateinput/)          | :white_check_mark:           |
| [DatePicker](https://www.telerik.com/kendo-vue-ui/components/dateinputs/datepicker/)          | :white_check_mark:           |
| [DateRangePicker](https://www.telerik.com/kendo-vue-ui/components/dateinputs/daterangepicker/)          | :white_check_mark:           |
| [DateTimePicker](https://www.telerik.com/kendo-vue-ui/components/dateinputs/datetimepicker/)          | :white_check_mark:           |
| [MultiView Calendar](https://www.telerik.com/kendo-vue-ui/components/dateinputs/multiview-calendar/)          | :white_check_mark:           |
| [TimePicker](https://www.telerik.com/kendo-vue-ui/components/dateinputs/timepicker/)          | :white_check_mark:           |
| **Layout**                |
| [Avatar](https://www.telerik.com/kendo-vue-ui/components/layout/avatar/)          | :white_check_mark:           |
| [Card](https://www.telerik.com/kendo-vue-ui/components/layout/card/)          | :white_check_mark:           |
| [Drawer](https://www.telerik.com/kendo-vue-ui/components/layout/drawer/)          | :white_check_mark:           |
| [Menu](https://www.telerik.com/kendo-vue-ui/components/layout/menu/)          | :white_check_mark:           |
| [PanelBar](https://www.telerik.com/kendo-vue-ui/components/layout/panelbar/)          | :white_check_mark:           |
| [Splitter](https://www.telerik.com/kendo-vue-ui/components/layout/splitter/)          | :white_check_mark:           |
| [Stepper](https://www.telerik.com/kendo-vue-ui/components/layout/stepper/)          | :white_check_mark:           |
| [TabStrip](https://www.telerik.com/kendo-vue-ui/components/layout/tabstrip/)          | :white_check_mark:           |
| [Wizard](https://www.telerik.com/kendo-vue-ui/components/layout/wizard/)          | :white_check_mark:           |
| **ScrollView**                |
| [ScrollView](https://www.telerik.com/kendo-vue-ui/components/scrollview/)          | :white_check_mark:           |
| **Data Tools**                |
| [Filter](https://www.telerik.com/kendo-vue-ui/components/datatools/filter/)          | :white_check_mark:           |
| [Pager](https://www.telerik.com/kendo-vue-ui/components/datatools/pager/)          | :white_check_mark:           |
| **Animations**                |
| [Expand](https://www.telerik.com/kendo-vue-ui/components/animation/api/ExpandProps/)          | :white_check_mark:           |
| [Fade](https://www.telerik.com/kendo-vue-ui/components/animation/api/FadeProps/)          | :white_check_mark:           |
| [Push](https://www.telerik.com/kendo-vue-ui/components/animation/api/PushProps/)          | :white_check_mark:           |
| [Reveal](https://www.telerik.com/kendo-vue-ui/components/animation/api/RevealProps/)          | :white_check_mark:           |
| [Slide](https://www.telerik.com/kendo-vue-ui/components/animation/api/SlideProps/)          | :white_check_mark:           |
| [Zoom](https://www.telerik.com/kendo-vue-ui/components/animation/api/ZoomProps/)          | :white_check_mark:           |
| **Popup**                |
| [Popup](https://www.telerik.com/kendo-vue-ui/components/popup/)          | :white_check_mark:           |
| **Upload**                |
| [Upload](https://www.telerik.com/kendo-vue-ui/components/upload/)          | :white_check_mark:           |
| **Form**                |
| [Form](https://www.telerik.com/kendo-vue-ui/components/form/)          | :white_check_mark:           |
| **Charts**                |
| [Area](https://www.telerik.com/kendo-vue-ui/components/charts/area/)          | :white_check_mark:           |
| [Bar](https://www.telerik.com/kendo-vue-ui/components/charts/bar/)          | :white_check_mark:           |
| [Box Plot](https://www.telerik.com/kendo-vue-ui/components/charts/box-plot/)          | :white_check_mark:           |
| [Bubble](https://www.telerik.com/kendo-vue-ui/components/charts/bubble/)          | :white_check_mark:           |
| [Bullet](https://www.telerik.com/kendo-vue-ui/components/charts/bullet/)          | :white_check_mark:           |
| [Donut](https://www.telerik.com/kendo-vue-ui/components/charts/donut/)          | :white_check_mark:           |
| [Funnel](https://www.telerik.com/kendo-vue-ui/components/charts/)          | :white_check_mark:           |
| [Line](https://www.telerik.com/kendo-vue-ui/components/charts/)          | :white_check_mark:           |
| [Pie](https://www.telerik.com/kendo-vue-ui/components/charts/)          | :white_check_mark:           |
| [Polar](https://www.telerik.com/kendo-vue-ui/components/charts/)          | :white_check_mark:           |
| [Radar](https://www.telerik.com/kendo-vue-ui/components/charts/)          | :white_check_mark:           |
| [Range Area](https://www.telerik.com/kendo-vue-ui/components/charts/)          | :white_check_mark:           |
| [Range Bar](https://www.telerik.com/kendo-vue-ui/components/charts/)          | :white_check_mark:           |
| [Scatter](https://www.telerik.com/kendo-vue-ui/components/charts/)          | :white_check_mark:           |
| [Sparkline](https://www.telerik.com/kendo-vue-ui/components/charts/sparkline/)          | :white_check_mark:           |
| [StockChart](https://www.telerik.com/kendo-vue-ui/components/charts/stockchart/)          | :white_check_mark:           |
| [Waterfall](https://www.telerik.com/kendo-vue-ui/components/charts/waterfall)          | :white_check_mark:           |
| **Labels**                |
| [Label](https://www.telerik.com/kendo-vue-ui/components/labels/label/)          | :white_check_mark:           |
| [FloatingLabel](https://www.telerik.com/kendo-vue-ui/components/labels/floating-label/)          | :white_check_mark:           |
| [Hint](https://www.telerik.com/kendo-vue-ui/components/labels/hint/)          | :white_check_mark:           |
| [Error](https://www.telerik.com/kendo-vue-ui/components/labels/error/)          | :white_check_mark:           |
| **Notification**                |
| [Notification](https://www.telerik.com/kendo-vue-ui/components/notification/)          | :white_check_mark:           |
| **Tooltip**                |
| [Tooltip](https://www.telerik.com/kendo-vue-ui/components/tooltip/)          | :white_check_mark:           |
| **Indicators**                |
| [Loader](https://www.telerik.com/kendo-vue-ui/components/indicators/loader/)          | :white_check_mark:           |
| [Skeleton](https://www.telerik.com/kendo-vue-ui/components/indicators/skeleton/)          | :white_check_mark:           |
| **Progress Bars**                |
| [Progress Bar](https://www.telerik.com/kendo-vue-ui/components/progressbars/progressbar/)          | :white_check_mark:           |
| **Tools & Features**   |
| [Data Query](https://www.telerik.com/kendo-vue-ui/components/dataquery/)        | :white_check_mark:           |
| [Date Math](https://www.telerik.com/kendo-vue-ui/components/datemath/)        | :white_check_mark:           |
| [Drawing](https://www.telerik.com/kendo-vue-ui/components/drawing/)        | :white_check_mark:           |
| [Excel Export](https://www.telerik.com/kendo-vue-ui/components/excel-export/) | :white_check_mark: | :white_check_mark: | :white_check_mark:   |
| [File Saver](https://www.telerik.com/kendo-vue-ui/components/filesaver/) | :white_check_mark: | :white_check_mark: | :white_check_mark:   |
| [Globalization](https://www.telerik.com/kendo-vue-ui/components/intl/)| :white_check_mark:           |
| [Localization](https://www.telerik.com/kendo-vue-ui/components/intl/localization/) | :white_check_mark:           |
| [PDF Processing](https://www.telerik.com/kendo-vue-ui/components/pdf-processing/)      | :white_check_mark:           |
| [ThemeBuilder](https://www.telerik.com/kendo-vue-ui/components/styling/theme-builder/)        | :white_check_mark:           |

## When do you plan on releasing Feature X?

1. Check the [Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap) for the planned items.
1. If the item you need is not present there, [check our feedback portal](https://feedback.telerik.com/kendo-vue-ui). If someone has already posted it there, you can upvote it. If nobody has requested it so far, you can post a new idea.

## Components planned for the next release

| Component name | Kendo UI for Vue Native |
| ------- | :------------------: |
| **TreeList**              | Planned for R3 2022           |
| **ColorPicker**              | Planned for R3 2022           |
| **FlatColorPicker**              | Planned for R3 2022           |
| **ColorGradient**              | Planned for R3 2022           |
| **ColorPalette**              | Planned for R3 2022           |

## How do I&hellip;?

1. Check out the [**Components** &nearr;](https://www.telerik.com/kendo-vue-ui/components/)or  [**Troubleshooting** &nearr;](http://www.telerik.com/kendo-vue-ui/components/troubleshooting/) pages.
1. Browse the [kendo-vue-ui &nearr;](https://stackoverflow.com/questions/tagged/kendo-vue-ui) questions on Stack Overflow. If you haven't found what you are looking for there, pose a question for the Stack Overflow community to follow or answer.
1. Use our official support channel and [submit a support ticket &nearr;](https://www.telerik.com/account/support-tickets).

## I think I found a bug

1. Review the issues in the [Issue Tracker &nearr;](https://github.com/telerik/kendo-vue/issues). Maybe someone has already reported it and it will be fixed soon.
1. The problem might have also been fixed. In this case, you will find the issue in [the closed issues list &nearr;](https://github.com/telerik/kendo-vue/issues?q=is%3Aissue+is%3Aclosed).
1. If you cannot find your issue, [follow the reproduction steps guide below](#user-content-i-want-to-report-a-bug). We will look into it.

## I want to report a bug

1. Find an example in [the documentation](https://www.telerik.com/kendo-vue-ui/components/) that looks similar to your case.
1. Open it in StackBlitz by using the **OPEN IN STACKBLITZ** button.
1. Fork the project by using the **FORK** button at the top.
1. Modify the project, so that the issue is reproducible in it. Try to include the minimum possible amount of code.
1. Save the project by using the **SAVE** button at the top.
1. Copy the link from the address bar of the browser.
1. [Open a new issue](https://github.com/telerik/kendo-vue/issues/new) and add the StackBlitz link in the description.
1. Provide any additional information necessary for us to reproduce the problem such as browser version, steps to perform, etc.

> We might not be able to act on issues without a runnable demo.

If you need assistance on troubleshooting or isolating a problem, you can request a remote assistance session through our [Support Ticket](https://www.telerik.com/account/support-tickets) system. Remote Assistance is included in the [DevCraft Ultimate](http://www.telerik.com/purchase/kendo-ui) subscription.

## I need a tailor-made solution

Our aim is to provide the most versatile and proven set of application building blocks. Still, there is some assembly required depending on the desired functionality.

The [Progress Services](https://www.progress.com/services) team is available to assist in building functional blocks or complete applications according to your specification. They will help you make the best out of KendoVue while freeing you to work on the real business problems.
