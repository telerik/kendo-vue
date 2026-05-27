window.moduleDirectives = (window.moduleDirectives || []).concat(
    [
        {
            module: '@progress/kendo-vue-labels',
            main: 'dist/cdn/js/kendo-vue-labels.js',
            match: '(Label|FloatingLabel|Error|Hint)',
            import: 'Label, FloatingLabel, Error, Hint'
        },
        {
            module: '@progress/kendo-vue-form',
            main: 'dist/cdn/js/kendo-vue-form.js',
            match: '(Form|Field|FieldWrapper|FormElement)',
            import: 'Form, Field, FieldWrapper, FormElement'
        },
        {
            module: '@progress/kendo-vue-dropdowns',
            main: 'dist/cdn/js/kendo-vue-dropdowns.js',
            match: '(DropDownList)',
            import: 'DropDownList'
        },
        {
            module: '@progress/kendo-vue-treeview',
            main: 'dist/cdn/js/kendo-vue-treeview.js'
        },
        {
            module: '@progress/kendo-vue-inputs',
            main: 'dist/cdn/js/kendo-vue-inputs.js',
            match: '(Input)',
            import: 'Input'
        },
        {
            module: '@progress/kendo-vue-intl',
            main: 'dist/cdn/js/kendo-vue-intl.js'
        }
    ]
);
