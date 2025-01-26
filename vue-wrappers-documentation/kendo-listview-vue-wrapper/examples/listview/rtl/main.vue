<template>
 <kendo-datasource ref="datasource1"
      :page-size="7"
      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"
      :transport-read-data-type="'jsonp'" >
    </kendo-datasource>

    <kendo-listview :data-source-ref="'datasource1'" :template="itemTemplate">
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
            itemTemplate: `
                <div class="product">
                    <img src="https://demos.telerik.com/kendo-ui/content/web/foods/#= ProductID #.jpg" alt="#: ProductName # image" />
                    <h3>#:ProductName#</h3>
                    <p>#:kendo.toString(UnitPrice, "c")#</p>
                </div>`
        }
    }
}
</script>
 <style>
        .product
        {
            float: right;
            width: 220px;
            height: 110px;
            margin: 0;
            padding: 5px;
            cursor: pointer;
        }
        .product img
        {
            float: right;
            width: 110px;
            height: 110px;
        }
        .product h3
        {
            margin: 0;
            padding: 10px 10px 0 0;
            font-size: .9em;
            overflow: hidden;
            font-weight: normal;
            float: right;
            max-width: 100px;
            text-transform: uppercase;
        }
        .k-pager-wrap
        {
            border-top: 0;
        }
        .k-listview:after
        {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }
        #example .k-listview
        {
            padding: 0;
            min-height: 360px;
        }
    </style>
