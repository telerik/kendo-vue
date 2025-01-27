<template>
  <kendo-datasource :page-size="8" :batch="true" ref="datasource1"
      :transport-read-url="crudServiceBaseUrl + '/Products'"
      :transport-read-data-type="'jsonp'"

      :transport-update-url="crudServiceBaseUrl + '/Products/Update'"
      :transport-update-data-type="'jsonp'"

      :transport-destroy-url="crudServiceBaseUrl + '/Products/Destroy'"
      :transport-destroy-data-type="'jsonp'"

      :transport-create-url="crudServiceBaseUrl + '/Products/Create'"
      :transport-create-data-type="'jsonp'"

      :parameter-map="parameterMap"

      :schema-model-id="'ProductID'"
      :schema-model-fields="schemaModelFields">
    </kendo-datasource>

    <kendo-listview ref="listView"
                    :data-source-ref="'datasource1'"
                    :template="itemTemplate"
                    :scrollable="'endless'"
                    :height="280">
    </kendo-listview>
</template>
<script>
import { ListView, Pager } from '@progress/kendo-listview-vue-wrapper';
import { DataSource } from '@progress/kendo-datasource-vue-wrapper';
export default {
  components: {
    'kendo-listview': ListView,
    'kendo-pager': Pager,
    'kendo-datasource': DataSource
  },
 data () {
        return {
            crudServiceBaseUrl: 'https://demos.telerik.com/kendo-ui/service',
            itemTemplate: `<div class="product-view k-widget">
            <dl>
                <dt>Product Name</dt>
                <dd>#:ProductName#</dd>
                <dt>Unit Price</dt>
                <dd>#:kendo.toString(UnitPrice, "c")#</dd>
                <dt>Units In Stock</dt>
                <dd>#:UnitsInStock#</dd>
                <dt>Discontinued</dt>
                <dd>#:Discontinued#</dd>
            </dl>
        </div>`,
            schemaModelFields: {
                ProductID: { editable: false, nullable: true },
                ProductName: 'ProductName',
                UnitPrice: { type: 'number' },
                Discontinued: { type: 'boolean' },
                UnitsInStock: { type: 'number' }
            }
        }
    },
    methods: {
        parameterMap (options, operation) {
            if (operation !== 'read' && options.models) {
                return {models: kendo.stringify(options.models)};
            }
        }
    }
}
</script>
<style>
        .product-view
        {
            float: left;
            width: 50%;
            height: 300px;
            box-sizing: border-box;
            border-top: 0;
            position: relative;
        }
        .product-view:nth-child(even) {
            border-left-width: 0;
        }
        .product-view dl
        {
            margin: 10px 10px 0;
            padding: 0;
            overflow: hidden;
        }
        .product-view dt, dd
        {
            margin: 0;
            padding: 0;
            width: 100%;
            line-height: 24px;
            font-size: 18px;
        }
        .product-view dt
        {
            font-size: 11px;
            height: 16px;
            line-height: 16px;
            text-transform: uppercase;
            opacity: 0.5;
        }

        .product-view dd
        {
            height: 46px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

        }

        .product-view dd .k-widget,
        .product-view dd .k-textbox {
            font-size: 14px;
        }
        #example .k-listview
        {
            border-width: 1px 0 0;
            padding: 0;
        }
        .k-pager-wrap
        {
            border-top: 0;
        }
    </style>