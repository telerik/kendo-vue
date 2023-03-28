---
title: ASP.NET Core CRUD Data Grid
page_title: Kendo UI for Vue Native Data Grid – ASP.NET Core Sample App with CRUD - Kendo UI for Vue
description: "This sample project demonstrates how to integrate the Kendo UI for Vue Native Data Grid with ASP.NET Core for CRUD and server data operations."
slug: asp-net-core-sample-app
position: 6
---

# Kendo UI for Vue Native Data Grid with ASP.NET Core Server

You can use [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/) to enable CRUD and server data operations in the Kendo UI for Vue Native Data Grid. In such scenarios, operations like data paging, sorting, filtering, or grouping are executed server-side.

## About the App

The sample application is built by using [the Kendo UI for Vue Native Data Grid]({% slug overview_grid %}), [the Kendo Data Query]({% slug overview_dataquery %}) packages, and [Telerik UI for ASP.NET Core](https://www.telerik.com/aspnet-core-ui). We are using Telerik UI for ASP.NET Core on the server to help with all operations like filtering, sorting, paging, and grouping. More details about the step-by-step integration of the current example, you can find in [this Integration with UI for ASP.NET Core](https://www.telerik.com/kendo-vue-ui/components/dataquery/mvc-integration/) article.

The sample application also shows how to use [the Kendo UI for Vue DropDownList]({% slug overview_dropdownlist %}) component as an editor for complex fields in the Data Grid.

> The sample application demonstrates only one of the possible ways to integrate the Kendo UI for Vue `Native Grid` with `ASP.NET Core`. As the Grid provides its data operation parameters in JSON format that can be formatted and sent to any server API, you are free to use any other approach supported by your server setup.

## Prerequisites

1. [Vue.js](https://v3.vuejs.org/).
1. A commercial or trial license for [Telerik UI for ASP.NET Core](https://www.telerik.com/aspnet-core-ui). This license is needed because the application uses the Telerik UI for ASP.NET Core library for the server operations.
1. [.NET (LTS version)](https://dotnet.microsoft.com/en-us/download).
1. Node.js version 6.0 (or later)

## How to Run the Demo

To to see the demo implementation and how the different Native components are configured to interact with each other, you can run the `Dashboard application` locally, by following the below steps:

1. Clone or download the [kendo-vue GitHub repository](https://github.com/telerik/kendo-vue/).
1. In the folder that contains the `kendo-vue` repository, navigate to the `kendo-vue-demo-aspnetcore-data` folder.
1. Double click on the `VueJSCore.sln `file to open the project.
1. Start the project by clicking on "Debug -> Start Without Debugging" menu or pressing "Ctrl + F5". The first time you start the project all NPM dependencies will be installed automatically and this process may take time.

## Styling the Kendo UI for Vue Native components

The Kendo UI for Vue Native components come with customizable Kendo Themes that can style your application in different ways. The Kendo Themes are shipped as a part of the Kendo UI for Vue library. Details about the usage of the different themes, you can find in our [Styling]({% slug themesandstyles %}) documentation article. 

## Suggested Links

* [Kendo UI for Vue Native Data Grid]({% slug overview_grid %})
* [Kendo UI for Vue Native DropDownList]({% slug overview_dropdownlist %})
* [Kendo Data Query]({% slug overview_dataquery %})
