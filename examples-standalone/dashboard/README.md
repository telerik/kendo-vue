# Kendo UI for Vue Dashboard Application

This Vue 3 and Vite example combines Kendo UI for Vue Charts, Grid, and other components in a Meridian-styled dashboard. The issue activity charts and issue explorer use the public GitHub API for the latest 100 `telerik/kendo-ui-core` issues (excluding pull requests). Choose a time range to compare issue activity, or open **GitHub issues** to sort, filter, page, and expand issue details. The sidebar theme chooser switches between Meridian, Default, Bootstrap, and Material.

GitHub data is requested without credentials and cached while the app is open. The **Refresh** action requests it again. GitHub API rate limits or network failures are shown in the dashboard rather than silently replacing live data with sample data. The separate workspace views use local sample project/task data.

## Project setup

Install the NPM packages using:

```
npm install
```

Start the project using:

```
npm run dev
```

Verify the production build using:

```
npm run build
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
