window.moduleDirectives = (window.moduleDirectives || []).concat([
    {
        module: '@progress/kendo-vue-scrollview',
        main: 'dist/cdn/js/kendo-vue-scrollview.js',
        match: '(ScrollView)',
        import: 'ScrollView'
    },
    {
        module: '@progress/kendo-vue-intl',
        main: 'dist/cdn/js/kendo-vue-intl.js'
    },
    {
        module: '@progress/kendo-vue-inputs',
        main: 'dist/cdn/js/kendo-vue-inputs.js',
    }, {
        module: '@progress/kendo-drawing',
        main: 'dist/cdn/js/kendo-drawing.js'
    },
    {
        module: '@progress/kendo-svg-icons',
        main: 'dist/index.js'
    }
]);
