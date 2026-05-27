window.moduleDirectives = (window.moduleDirectives || []).concat([ {
    module: '@progress/kendo-vue-editor',
    main: 'dist/cdn/js/kendo-vue-editor.js',
    match: '(Editor|EditorTools|EditorUtils|ProseMirror)',
    import: 'Editor, EditorTools, EditorUtils, ProseMirror'
}, {
    module: '@progress/kendo-vue-intl',
    main: 'dist/cdn/js/kendo-vue-intl.js'
}, {
    module: '@progress/kendo-vue-buttons',
    main: 'dist/cdn/js/kendo-vue-buttons.js'
}, {
    module: '@progress/kendo-vue-popup',
    main: 'dist/cdn/js/kendo-vue-popup.js'
}, {
    module: '@progress/kendo-vue-dialogs',
    main: 'dist/cdn/js/kendo-vue-dialogs.js'
}, {
    module: '@progress/kendo-vue-dropdowns',
    main: 'dist/cdn/js/kendo-vue-dropdowns.js'
}, {
    module: '@progress/kendo-drawing',
    main: 'dist/cdn/js/kendo-drawing.js'
}, {
    module: '@progress/kendo-vue-inputs',
    main: 'dist/cdn/js/kendo-vue-inputs.js'
}, {
    module: '@progress/kendo-vue-treeview',
    main: 'dist/cdn/js/kendo-vue-treeview.js'
},{
    module: '@progress/kendo-vue-labels',
    main: 'dist/cdn/js/kendo-vue-labels.js'
},{
    module: '@progress/kendo-vue-layout',
    main: 'dist/cdn/js/kendo-vue-layout.js'
}, {
    module: '@progress/kendo-vue-upload',
    main: 'dist/cdn/js/kendo-vue-upload.js'
},
{
    module: '@progress/kendo-svg-icons',
    main: 'dist/index.js'
} ]);
