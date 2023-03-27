---
title: Keeping Up to Date
description: "Update Kendo UI components to their latest versions."
slug: up_to_date
position: 40
---

# Keeping Up to Date

The Kendo UI for Vue Native packages are released frequently with bug fixes and new features.

## Semantic Versioning

The Kendo UI packages for Vue Native are released independently and their version numbers follow the rules of [Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning):

* A major version bump (X.y.z) signals a breaking change in the API. You might need to update application code or dependencies.
* A minor version bump (x.Y.z) signals the addition of new features. Existing code will continue to work but new features may require additional setup.
* A patch version bump (x.y.Z) indicates a bug-fix release. Typically, patches do not require changes to application code.

> In the early stages of development, package versions start in the 0.y.z version range. Up to the 1.0 milestone, the API is considered unstable and minor versions may include breaking changes.

## Updating to Compatible Releases

The `package.json` file references a major version range&mdash;for example, `"@progress/kendo-vue-grid": "^3.0.0"`. To fetch the latest compatible Minor or Patch release, run `npm update`.

> Commit the updated `package-lock.json` file in the source control.

## Updating to Latest Versions

To update to the most recent versions of the Kendo UI for Vue Native components, use [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates).

* To upgrade all Progress packages, run:

    ```sh
    npx npm-check-updates --upgrade --filter "/@progress.*/"
    ```

* To upgrade only Kendo UI for Vue packages, run:

    ```sh
    npx npm-check-updates --upgrade --filter "/@progress/kendo-vue.*/"
    ```

* In some cases, you may have to specify the location of the `package.json` file:

    ```sh
    npx npm-check-updates --upgrade --filter "/@progress.*/" --packageFile ./package.json
    ```

A successful run will record the updated versions in `package.json` and `package-lock.json`.

> Upgrading between major versions might require you to change the application code.
>
> For more details, refer to the [Release History](https://www.telerik.com/kendo-vue-ui/components/changelogs/ui-for-vue/).


## Updating Vue 2 project to Vue 3

To generate checklists for upgrading between the framework versions, use the [Vue 3 Migration Guide](https://v3-migration.vuejs.org/). 

> The above migration guide is only about the update of the Vue Framework itself. After the framework version is updated, some changes in the configuration of the different Kendo UI for Vue Native components may need to be applied. 



## Suggested Links

* [Kendo UI for Vue - First Steps with JavaScript]({% slug getting_started %})
* [Kendo UI for Vue - First Steps with TypeScript]({% slug getting_started_typescript %})
* [Kendo UI for Vue - First Steps with TypeScript + Composition API]({% slug getting_started_typescript_composition_api %})
* [Virtual Classroom - Kendo UI for Vue with TypeScript(Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})