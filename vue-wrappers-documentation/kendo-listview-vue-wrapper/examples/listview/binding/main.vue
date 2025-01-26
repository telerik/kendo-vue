<template>
   <kendo-datasource :page-size="10" ref="datasource1"
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
    #listView {
        padding: 10px 5px;
        margin-bottom: -1px;
        min-height: 300px;
    }
    .product {
        float: left;
        position: relative;
        width: 111px;
        height: 170px;
        margin: 0 5px;
        padding: 0;
    }
    .product img {
        width: 110px;
        height: 110px;
    }
    .product h3 {
        margin: 0;
        padding: 3px 5px 0 0;
        max-width: 96px;
        overflow: hidden;
        line-height: 1.1em;
        font-size: .9em;
        font-weight: normal;
        text-transform: uppercase;
        color: #999;
    }
    .product p {
        visibility: hidden;
    }
    .product:hover p {
        visibility: visible;
        position: absolute;
        width: 110px;
        height: 110px;
        top: 0;
        margin: 0;
        padding: 0;
        line-height: 110px;
        vertical-align: middle;
        text-align: center;
        color: #fff;
        background-color: rgba(0,0,0,0.75);
        transition: background .2s linear, color .2s linear;
        -moz-transition: background .2s linear, color .2s linear;
        -webkit-transition: background .2s linear, color .2s linear;
        -o-transition: background .2s linear, color .2s linear;
    }
    .k-listview:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
</style>
