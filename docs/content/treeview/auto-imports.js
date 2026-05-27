window.moduleDirectives = (window.moduleDirectives || []).concat([ {
    module: '@progress/kendo-vue-treeview',
    main: 'dist/cdn/js/kendo-vue-treeview.js',
    match: '(TreeView|processTreeViewItems|handleTreeViewCheckChange|moveTreeViewItem|TreeViewDragAnalyzer|TreeViewDragClue)',
    import: 'TreeView, processTreeViewItems, handleTreeViewCheckChange, moveTreeViewItem, TreeViewDragAnalyzer, TreeViewDragClue'
}, {
    module: '@progress/kendo-vue-animation',
    main: 'dist/cdn/js/kendo-vue-animation.js'
}, {
    module: '@progress/kendo-vue-dropdowns',
    main: 'dist/cdn/js/kendo-vue-dropdowns.js'
}, {
    module: '@progress/kendo-vue-treeview',
    main: 'dist/cdn/js/kendo-vue-treeview.js'
},{
    module: '@progress/kendo-vue-labels',
    main: 'dist/cdn/js/kendo-vue-labels.js'
},{
    module: '@progress/kendo-vue-intl',
    main: 'dist/cdn/js/kendo-vue-intl.js'
},{
    module: '@progress/kendo-svg-icons',
    main: 'dist/index.js'
} ]);
