<template>
  <button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" @click="addRecord">Add new record</button>

    <kendo-datasource :page-size="4" :batch="true" ref="datasource1"
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
                    :edit-template="editTemplate"
                    @cancel="onCancel"
                    @change="onChange"
                    @dataBound="onDataBound"
                    @dataBinding="onDataBinding"
                    @edit="onEdit"
                    @remove="onRemove"
                    @save="onSave">
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
            <div class="edit-buttons">
                <a class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-edit-button" href="\\\\#"><span class="k-icon k-i-edit"></span></a>
                <a class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-delete-button" href="\\\\#"><span class="k-icon k-i-close"></span></a>
            </div>
        </div>`,
            editTemplate: `<div class="product-view k-widget">
                    <dl>
                        <dt>Product Name</dt>
                        <dd>
                            <input type="text" class="k-textbox" data-bind="value:ProductName" name="ProductName" required="required" validationMessage="required" />
                            <span data-for="ProductName" class="k-invalid-msg"></span>
                        </dd>
                        <dt>Unit Price</dt>
                        <dd>
                            <input type="text" data-bind="value:UnitPrice" data-role="numerictextbox" data-type="number" name="UnitPrice" required="required" min="1" validationMessage="required" />
                            <span data-for="UnitPrice" class="k-invalid-msg"></span>
                        </dd>
                        <dt>Units In Stock</dt>
                        <dd>
                            <input type="text" data-bind="value:UnitsInStock" data-role="numerictextbox" name="UnitsInStock" required="required" data-type="number" min="0" validationMessage="required" />
                            <span data-for="UnitsInStock" class="k-invalid-msg"></span>
                        </dd>
                        <dt>Discontinued</dt>
                        <dd><input type="checkbox" name="Discontinued" data-bind="checked:Discontinued"></dd>
                    </dl>
                    <div class="edit-buttons">
                        <a class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-update-button" href="\\\\#"><span class="k-icon k-i-check"></span></a>
                        <a class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-cancel-button" href="\\\\#"><span class="k-icon k-i-cancel"></span></a>
                    </div>
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
        addRecord () {
            this.$refs.listView.kendoWidget().add();
        },
        parameterMap (options, operation) {
            if (operation !== 'read' && options.models) {
                return {models: kendo.stringify(options.models)};
            }
        },
        onCancel () {
            console.log("Event :: cancel");
        },
        onChange () {
            console.log("Event :: change");
        },
        onDataBound () {
            console.log("Event :: dataBound");
        },
        onDataBinding () {
            console.log("Event :: dataBinding");
        },
        onEdit () {
            console.log("Event :: edit");
        },
        onRemove () {
            console.log("Event :: remove");
        },
        onSave () {
            console.log("Event :: save");
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
            overflow: hidden;
            min-height: 298px;
        }
        .edit-buttons
        {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: right;
            padding: 5px;
            background-color: rgba(0,0,0,0.1);
        }
        .k-pager-wrap
        {
            border-top: 0;
        }
        span.k-invalid-msg
        {
            position: absolute;
            margin-left: 6px;
        }

        .k-add-button {
            margin-bottom: 2em;
        }
    </style>
