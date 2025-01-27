<template>
  <kendo-tooltip :width="400"
            :height="210"
            :filter="'a'"
            :content="getContent">
      <ul id="products" class="dairy-photos">
          <li>
              <a href="#" data-id="11" title="A cheese made in the artisan tradition by rural dairy farmers in the north of Spain">
                  <img :src="baseUrl + '11.jpg'" /> Queso de Cabrales
              </a>
          </li>
          <li>
              <a href="#" data-id="12" title="A cheese made in the La Mancha region of Spain from the milk of sheep of the Manchega breed">
                  <img :src="baseUrl + '12.jpg'" /> Queso<br /> Manchego
              </a>
          </li>
          <li>
              <a href="#" data-id="33" title="A white cheese made from goat milk">
                  <img :src="baseUrl + '33.jpg'" /> Geitost
              </a>
          </li>
      </ul>
    </kendo-tooltip>
</template>
<script>
import { Tooltip } from '@progress/kendo-popups-vue-wrapper';

export default {
  components: {
    'kendo-tooltip': Tooltip
  },
  data: function () {
    return {
        baseUrl: 'https://demos.telerik.com/kendo-ui/content/web/foods/'
    };
  },
    methods: {
        getContent (e) {
            return kendo.template(`<img src="https://demos.telerik.com/kendo-ui/content/web/foods/200/#=target.data('id')#.jpg" alt="#=target.data('title')#" />
               <p>#=target.data('title')#</p>`)(e);
        }
    }
}
</script>
<style>
    .dairy-photos {
        list-style-type: none;
        margin: 15px 0 15px 10px;
        padding: 0;
        text-align: center;
    }
    .dairy-photos li {
        display: inline-block;
        margin: 5px;
        padding: 0;
        vertical-align: top;
    }
    .dairy-photos a {
        display: block;
        width: 110px;
        height: 155px;
        padding: 0 0 0 10px;
        font-size: .9em;
        line-height: 1.2em;
        text-transform: uppercase;
        color: #777;
        background-color: rgba(255,255,255,0.8);
        -moz-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
        -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
    }
    .dairy-photos a:hover {
        color: #fff;
        background-color: #000;
    }
    .dairy-photos a img {
        margin: 0 0 5px -10px;
    }
    .k-tooltip-content {
        vertical-align: middle;
    }
    .k-tooltip-content img,
    .k-tooltip-content p {
        float: left;
    }
    .k-tooltip-content p {
        font-size: 1.4em;
        line-height: 1.2;
        padding: 20px;
        width: 180px;
        text-align: left;
        box-sizing: border-box;
    }
</style>

