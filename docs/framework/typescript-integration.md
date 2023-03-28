---
title: TypeScript Integration
page_title: TypeScript Integration - Kendo UI for Vue
description: "Learn how to use Kendo UI Vue components in a Vue application with TypeScript."
slug: typescript_integration
use_runner: true
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/typescript-integration"
position: 7
---

<WrapperBanner link="/kendo-vue-ui/components/typescript-integration"></WrapperBanner>

# TypeScript Integration

The Vue framework allows developers to use the TypeScript superset to develop their applications.

To use the Kendo UI components for Vue with TypeScript:

1. Install Vue CLI.

    ```sh
    npm install --global @vue/cli
    ```

1. If you have already installed the Vue CLI, make sure it is version 3.0 or later.

    ```sh
    vue --version
    ```

1. Navigate to the desired folder and create the new Vue project in it.

    ```sh
    vue create kendo-vue-in-typescript
    ```

1. Select the **Manually select features** option.

    <img src="../images/typescript-create-new-project.png" class="img-fluid" alt="TypeScript Create New Project"/>

1. Select **TypeScript** to include it in the application.

    <img src="../images/typescript-configure-project.png" class="img-fluid" alt="TypeScript Configure Project"/>

1. Answer to each of the next configuration options as per your needs. Finally, you will have an application with a `tsconfig.json` file with similar contents as demonstrated below.

    ```js
    {
        "compilerOptions": {
            "target": "esnext",
            "module": "esnext",
            "strict": true,
            "jsx": "preserve",
            "importHelpers": true,
            "moduleResolution": "node",
            "experimentalDecorators": true,
            "esModuleInterop": true,
            "allowSyntheticDefaultImports": true,
            "sourceMap": true,
            "baseUrl": ".",
            "types": [
                "webpack-env",
                "mocha",
                "chai"
            ],
            "paths": {
            "@/*": [
                "src/*"
            ]
            },
            "lib": [
                "esnext",
                "dom",
                "dom.iterable",
                "scripthost"
            ]
        },
        "include": [
            "src/**/*.ts",
            "src/**/*.tsx",
            "src/**/*.vue",
            "tests/**/*.ts",
            "tests/**/*.tsx"
        ],
        "exclude": [
            "node_modules"
        ]
    }
    ```

1. Navigate inside the project folder and install Kendo UI and the desired Kendo UI theme.

    ```sh
    npm install -s @progress/kendo-ui
    npm install - s @progress/kendo-theme-default
    ```

1. Install the Kendo UI packages for Vue that will be required by the specific project scenario. The following example uses the `kendo-dropdowns-vue-wrapper` package.

    ```sh
    npm install - s @progress/kendo-dropdowns-vue-wrapper
    ```

1. In the `main.ts` file, import the Kendo UI, the Kendo UI theme, and the `DropdownsInstaller` from `kendo-dropdowns-vue-wrapper`.

    ```ts
    import '@progress/kendo-ui';
    import '@progress/kendo-theme-default';
    import { DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper'
    ```

1. Include the `DropdownsInstaller` that will be used by Vue.

    ```ts
    Vue.use(DropdownsInstaller);
    ```

1. In the `HelloWorld.vue` component, change its template content to include a Kendo UI DropDownList for Vue.

    ```html
    <template>
    <div class="hello">
        <p>DropDownList</p>
        <kendo-dropdownlist ref="dropDownList"
                            :data-source="dataSourceArray"
                            :data-text-field="'text'"
                            :data-value-field="'value'"
                            :index="0">
        </kendo-dropdownlist>
    </div>
    </template>
    ```

1. In the `<script>` element, import the Kendo UI DropDownList for Vue component.

    ```ts
    import { DropDownList } from '@progress/kendo-dropdowns-vue-wrapper';
    ```

1. In the component class, define the `dropDown` and `dataSourceArray` fields. The `dropDown` will hold the DropDownList instance while the `dataSourceArray` will contain the data items for the DataSource of the component.

    ```ts
    export default class HelloWorld extends Vue {
        private dropDown!: kendo.ui.DropDownList;

        private dataSourceArray: Array<object> = [
            { text: 'Small', value: '1' },
            { text: 'Medium', value: '2' },
            { text: 'Large', value: '3' },
            { text: 'X-Large', value: '4' },
            { text: '2X-Large', value: '5' }
        ];
    }
    ```

1. In the `mounted` event handler, retrieve the DropDownList instance and assign it to the `dropDown` field of the component.

    ```ts
    export default class HelloWorld extends Vue {
        ...

        mounted(ev: any) {
            this.dropDown = (this.$refs.dropDownList as DropDownList).kendoWidget() as kendo.ui.DropDownList;

            window.console.log(this.dropDown);
        }
    }
    ```

1. Run the application.

    ```sh
    npm run serve
    ```

## Suggested Links

* [Kendo UI Vuex Integration](slug:vuex_integration)
* [Vue TypeScript Support](https://vuejs.org/v2/guide/typescript.html)
