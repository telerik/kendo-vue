---
title: Performance
description: "Get more information on how to improve the Kendo UI for Vue Native Grid performance when working with large data sets."
slug: performance_grid
position: 9
tag: updated
---

# Performance

The Kendo UI for Vue Data Grid is engineered to handle massive datasets with exceptional performance. Through advanced optimization techniques, intelligent rendering strategies, and modern Vue patterns, the Grid delivers enterprise-grade performance that scales from hundreds to millions of records while maintaining a responsive user experience.

## Performance Architecture

The Kendo UI for Vue Grid leverages a sophisticated performance architecture built on modern Vue patterns and optimized rendering strategies:

-   **Intelligent DOM Management**: Minimizes DOM operations through strategic element reuse and efficient rendering cycles
-   **Memory Optimization**: Smart data handling that prevents memory leaks and reduces garbage collection overhead
-   **Render Optimization**: Advanced reconciliation algorithms that update only changed elements
-   **Event Handling Efficiency**: Optimized event delegation and handling for maximum responsiveness

## Core Performance Features

The Kendo UI for Vue Data Grid offers several powerful performance optimization features:

-   **Virtual Scrolling (row virtualization)**&mdash;Only renders visible rows plus a buffer, enabling the Grid to handle millions of records with consistent performance and minimal memory usage (enabled by default for licensed users as of v11.0.0).
-   **[Column Virtualization]({% slug virtual_columns_grid %})**&mdash;Renders only visible columns dynamically during horizontal scrolling, significantly reducing DOM elements for datasets with many columns.
-   **[Paging]({% slug paging_grid %})**&mdash;Renders only data for the current page, ideal for analytical interfaces and SEO-friendly scenarios. It could be combined with virtual scrolling.
-   **[autoProcessData]({% slug api_grid_gridprops %}#toc-autoprocessdata)**&mdash;Built-in data processing that handles sorting, filtering, grouping, and paging automatically, reducing boilerplate code and improving maintainability.

> When testing the performance of the Kendo UI for Vue Data Grid, make sure to use a production build. Vue is significantly faster when using a production build, providing a more accurate representation of end-user experience.

{% meta height:880 %}
{% embed_file performance/basic/main.vue preview %}
{% embed_file performance/basic/main.js %}
{% endmeta %}

### Virtual Scrolling Performance

**Virtual Scrolling** is the primary performance optimization technique for handling large datasets in the Kendo UI for Vue Grid. This feature renders only the visible rows plus a buffer, enabling seamless handling of millions of records with constant memory usage.

**When to Use:**

-   Datasets with 1000+ rows
-   Applications requiring real-time data updates
-   Mobile applications with memory constraints
-   Any scenario where initial loading performance is critical

**Performance Benefits:**

-   **Constant Memory Usage**: Memory consumption stays consistent regardless of data size
-   **Fast Initial Rendering**: Only renders visible content, dramatically reducing initial load time
-   **Smooth Scrolling**: Maintains 60fps performance during scroll operations
-   **Reduced DOM Size**: Keeps DOM lightweight for better browser performance

This demo below showcases virtual scrolling (row virtualization), which renders only visible rows plus a buffer. This enables the Grid to handle millions of records with consistent performance and minimal memory usage.

### Combined Virtualization (Rows + Columns)

**[Column Virtualization]({% slug virtual_columns_grid %})** optimizes horizontal scrolling performance by rendering only visible columns, making it ideal for wide datasets with many columns.

**When to Use:**

-   Datasets with 50+ columns
-   Wide tables with varied column widths
-   Dashboard applications with many data points
-   Reporting interfaces with extensive column sets

**Performance Benefits:**

-   **Horizontal Scroll Performance**: Maintains smooth horizontal navigation regardless of column count
-   **Memory Efficiency**: Reduces memory footprint for wide datasets
-   **DOM Optimization**: Keeps horizontal DOM size manageable
-   **Combined with Virtual Scrolling**: Maximum performance for both rows and columns

### Paging Performance

**[Paging]({% slug paging_grid %})** provides predictable performance by rendering only the current page of data, making it ideal for analytical interfaces and SEO-friendly applications.

**When to Use:**

-   Analytics and reporting interfaces
-   SEO-friendly applications requiring static URLs
-   Applications with user-controlled data consumption
-   Interfaces where users expect traditional page-based navigation

**Performance Benefits:**

-   **Predictable Performance**: Consistent rendering time regardless of total data size
-   **Memory Efficiency**: Only current page data is held in memory
-   **User Control**: Users can adjust page size based on their needs

{% meta height:760 %}
{% embed_file performance/virtual/main.vue preview %}
{% embed_file performance/virtual/main.js %}
{% endmeta %}

## Performance Best Practices

### Development Guidelines

1. **Always Use Production Builds**: Vue development builds include extensive debugging overhead. Production builds can be 3-6x faster and provide accurate performance measurements.

1. **Choose the Right Strategy**:

    - Use **Virtual Scrolling** for 1000+ rows with consistent row heights
    - Use **Column Virtualization** for 50+ columns or wide datasets
    - Use **Paging** for analytical interfaces
    - Combine strategies for maximum performance with large, wide datasets

### Data Operations

-   Prefer `autoProcessData` for built-in sorting, filtering, grouping, and paging to minimize manual logic and improve maintainability.
-   Trigger sorting and other data operations only in response to user actions, not on every render.
-   Debounce remote data requests to reduce unnecessary API calls and improve responsiveness.
-   Update Grid state after editing is complete, rather than on every cell change, to minimize re-renders.
-   Define custom components (such as cells or rows) outside the main Grid component to prevent unnecessary re-renders of child components.

## Modern Optimization Features

### AutoProcessData

The `autoProcessData` feature eliminates the need for manual data processing by handling sorting, filtering, grouping, and paging automatically within the Grid component.

```jsx
<Grid
    :data-items="data"
    :auto-process-data="{
        filter: true,
        search: true,
        sort: true,
        group: true,
        page: true
    }"
    :filterable="true"
    :sortable="true"
    :groupable="true"
    :pageable="true"
/>
```

This approach reduces boilerplate code, improves maintainability, and ensures optimal performance through built-in optimizations.

## Performance Testing & Monitoring

**Testing Strategy:**

-   Start with small datasets (100 rows, 5 columns) to establish baseline
-   Gradually increase dataset size to identify performance thresholds
-   Test different optimization strategies (virtual scrolling vs paging)
-   Compare development vs production build performance
-   Test on target devices and browsers

**Key Performance Metrics:**

-   **Initial Render Time**: Time from mount to first paint
-   **Scroll Responsiveness**: Maintain 60fps during scroll operations
-   **Memory Consumption**: Monitor memory usage patterns and leaks
-   **Interaction Latency**: Response time for user interactions (sorting, filtering)
-   **Bundle Size Impact**: Measure JavaScript bundle size impact

**Performance Testing Tools:**

-   **Chrome DevTools**: Comprehensive browser performance analysis
-   **Lighthouse**: Core Web Vitals and performance scoring
-   **Web Vitals Extension**: Real-time performance monitoring


> We advise testing with a production build as well. That shows the real power of the Kendo UI for Vue Grid with up to 6 times improved performance compared to when testing with a development build.

## Suggested Links

* [Data Query Overview]({% slug overview_dataquery %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
* [Grid Column Virtualization]({% slug virtual_columns_grid %})
