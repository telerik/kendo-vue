---
title: Vue Templates
page_title: Vue Templates - Kendo UI for Vue
description: "Learn how to use Vue templates with Kendo UI for Vue."
slug: vue_templates
use_runner: true
position: 5
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components"
toc: true
---

<WrapperBanner link="/kendo-vue-ui/components"></WrapperBanner>

# Vue Templates

The Kendo UI for Vue wrappers support both the native Vue templates (through using single-file components) and the standard Kendo UI templates.

> * The Kendo UI for Vue components require the usage of the full Vue build that features both the runtime and the compiler.
> * When you use the runtime-only build with Vue CLI, create a `vue-config.js` file in the root of your project and set [the runtimeCompiler option](https://cli.vuejs.org/config/#runtimecompiler) to `true`.
> * The [Vue router-link](https://router.vuejs.org/api/#router-link) component could not be used in Vue templates when those are part of a Kendo UI for Vue component definition.

## Using Single-File Components

The following steps demonstrate how to use a Kendo UI DropDownList with a Vue template. For the full implementation of the approach, refer to [this CodeSandbox example](https://codesandbox.io/s/vue-template-ddl-forked-jjq92).

1. Define the item template as a vue file (`ItemTemplate.vue`).

    ```html
    <template>
        <span>
            <button @click="buttonClick">{{templateArgs.value}}</button>
            {{templateArgs.title}}
        </span>
    </template>
    ```
    ```js
    <script>
        export default {
            name: 'template1',
            methods: {
                buttonClick: function (e) {
                    alert("Button click")
                }
            },
            data () {
                return {
                    templateArgs: {}
                }
            }
        }
    </script>
    ```

1. Set the template of the DropDownList as a function.

    ```html
    <template>
        <div id="container">
            <kendo-dropdownlist ref="ddl"
                                :data-source="localDataSource"
                                :data-text-field="'title'"
                                :data-value-field="'id'"
                                :filter="'contains'"
                                :template="itemTemplate">
            </kendo-dropdownlist>
        </div>
    </template>
    ```

1. Include and register the single-file component in the view where the DropDownList initialization is located. Then, define the template as a method that returns the component and pass any required metadata in the template arguments.

    > Native Vue templates are compiled at runtime. Thus, the parent scope is not automatically passed to child components. To work around this limitation, pass any required metadata in the template arguments as demonstrated in the following code snippet.

    ```js
    <script>
    import Template from "./ItemTemplate.vue";
    import Vue from "vue";

    export default {
        name: "HelloWorld",
        data() {
            return {
                localDataSource: {
                    data: [
                        { title: "title 1", num: 1, numTwo: 2, total: 3, id: 1 },
                        { title: "title 2", num: 1, numTwo: 2, total: 3, id: 2 }
                    ]
                }
            };
        },
        methods: {
            itemTemplate: function(e) {
                return {
                    template: Vue.component(Template.name, Template),
                    templateArgs: Object.assign({}, e, {
                        parentComponent: this.$refs.ddl
                    })
                };
            }
        }
    };
    </script>
    ```

## Using Standard Kendo UI Templates

The following steps demonstrate how to use a Kendo UI DropDownList with a Kendo UI template. For the full implementation of the approach, refer to [this CodeSandbox example](https://codesandbox.io/s/vue-template-ddl-forked-pn4nq).

1. Set the template of the DropDownList as a function and define the script that holds its content.

    ```html
    <template>
        <div id="container">
            <kendo-dropdownlist ref="ddl"
                                :data-source="localDataSource"
                                :data-text-field="'title'"
                                :data-value-field="'id'"
                                :filter="'contains'"
                                :template="itemTemplate">
            </kendo-dropdownlist>

            <script id="itemTemplate" type="text/x-kendo-template">
                <div>
                    #= data.id #
                </div>
            </script>
        </div>
    </template>
    ```

1. Define the template as a method that returns the compiled script.

    ```js
    methods: {
        itemTemplate: function (e) {
            var template = kendo.template(kendo.jQuery('#itemTemplate').html())
            return template(e)
        }
    }
    ```

## Suggested Links

* [Official Vue Loader Documentation](https://vue-loader.vuejs.org/)
* [Official Vue Single-File Components Documentation](https://vuejs.org/v2/guide/single-file-components.html)
* [Getting Started with Kendo UI for Vue](slug:getting_started)
