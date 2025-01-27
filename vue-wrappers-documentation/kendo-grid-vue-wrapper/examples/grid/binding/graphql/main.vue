<template>
 <kendo-datasource ref="datasource1"
                        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"
                        :transport-read-data-type="'jsonp'"
                        :transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"
                        :transport-update-data-type="'jsonp'"
                        :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"
                        :transport-destroy-data-type="'jsonp'"
                        :transport-create-url="'https://demos.telerik.com/kendo-ui/service/Products/Create'"
                        :transport-create-data-type="'jsonp'"
                        :transport-parameter-map="parameterMap"
                        :schema-model-id="'ProductID'"
                        :schema-model-fields="schemaModelFields"
                        :batch='true'
                        :page-size='20'>
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource1'"
                :pageable='true'
                :editable="'inline'"
                :toolbar="['create']">
        <kendo-grid-column :field="'ProductName'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitsInStock'"
                           :title="'Units In Stock'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'Discontinued'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :command="['edit', 'destroy']"
                           :title="'&nbsp;'"
                           :width="170"></kendo-grid-column>
    </kendo-grid>
</template>
<script>
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    components: {
        'kendo-grid': Grid,
        'kendo-grid-column': GridColumn,
        'kendo-datasource': KendoDataSource
    },
   data: function () {
        return {
            schemaModelFields: {
                productID: { type: 'number', editable: false },
                productName: { validation: { required: true } },
                unitPrice: { type: 'number', validation: { required: true, min: 1 } },
                unitsInStock: { type: 'number', validation: { min: 0, required: true } }
            }
        };
    },
    methods: {
        schemaData: function(response) {
            var data = response.data;

            if (data.products) { return data.products; }
            else if (data.createProduct) { return data.createProduct; }
            else if (data.updateProduct) { return data.updateProduct; }
            else if (data.deleteProduct) { return data.deleteProduct; }
        },
        schemaTotal: function(response) {
            return response.data.products.length;
        },
        parameterMap: function(options, operation) {
            return  kendo.stringify({
                query: options.query,
                variables: options.variables
            });
        },
        additionalParamsOnCreate: function(model) {
            var createQuery = "mutation CreateProductMutation($product: ProductInput!){" +
                "createProduct(product: $product){" +
                    "productID,"+
                    "productName,"+
                    "unitPrice,"+
                    "unitsInStock"+
                "}"+
            "}";

            return {
                query: createQuery,
                variables: { "product": model }
            };
        },
        additionalParamsOnRead: function(model) {
            var readQuery = "query {" +
                "products { productID, productName, unitPrice, unitsInStock }" +
            "}";

            return { query: readQuery };
        },
        additionalParamsOnUpdate: function(model) {
            var updateQuery = "mutation UpdateProductMutation($product: ProductInput!){" +
                "updateProduct(product: $product){" +
                    "productID,"+
                    "productName,"+
                    "unitPrice,"+
                    "unitsInStock"+
                "}" +
            "}";

            return {
                query: updateQuery,
                variables: { "product": model }
            };
        },
        additionalParamsOnDestroy: function(model) {
            var deleteQuery = "mutation DeleteProductMutation($product: ProductInput!){" +
                "deleteProduct(product: $product){" +
                    "productID,"+
                    "productName,"+
                    "unitPrice,"+
                    "unitsInStock"+
                "}"+
            "}";

            return {
                query: deleteQuery,
                variables: { "product": model }
            };
        }
    }
}
</script>