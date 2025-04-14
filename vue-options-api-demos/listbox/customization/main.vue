<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col" style="padding-right: 0">
        <h6>Not Discontinued</h6>
        <ListBox
          :style="{ height: '400px', width: '100%' }"
          :dataItems="notDiscontinued"
          :text-field="'ProductName'"
          :selectedField="SELECTED_FIELD"
          @itemclick="itemClick"
          :toolbar="'toolbar'"
          :item="'item'"
        >
          <template v-slot:toolbar>
            <ListBoxToolbar
              :tools="[
                'moveUp',
                'moveDown',
                'transferTo',
                'transferFrom',
                'transferAllTo',
                'transferAllFrom',
                'remove',
              ]"
              :dataItems="notDiscontinued"
              :dataConnected="discontinued"
              @toolclick="handleToolBarClick"
            />
          </template>
          <template v-slot:item="{ props }">
            <div>
              <span :style="{ fontWeight: 'bold' }">{{
                props.dataItem.ProductName
              }}</span>
              <br />
              <span>Price: {{ props.dataItem.UnitPrice }}$</span>
            </div>
          </template>
        </ListBox>
      </div>
      <div class="col" style="padding-right: 0; padding-left: 9px">
        <h6>Discontinued</h6>
        <ListBox
          :style="{ height: '400px', width: '100%' }"
          :dataItems="discontinued"
          :textField="'ProductName'"
          :selectedField="SELECTED_FIELD"
          @itemclick="itemClick2"
          :item="'item'"
        >
          <template v-slot:item="{ props }">
            <div>
              <span :style="{ fontWeight: 'bold' }">{{
                props.dataItem.ProductName
              }}</span>
              <br />
              <span>Price: {{ props.dataItem.UnitPrice }}$</span>
            </div>
          </template>
        </ListBox>
      </div>
    </div>
  </div>
</template>
<script>
import {
  ListBox,
  ListBoxToolbar,
  processListBoxData,
} from '@progress/kendo-vue-listbox';
import products from './products.json';

const parsedProducts = products.map((product) => {
  product.selected = false;
  return product;
});

const SELECTED_FIELD = 'selected';

export default {
  components: {
    ListBox,
    ListBoxToolbar,
  },
  data() {
    return {
      SELECTED_FIELD,
      notDiscontinued: parsedProducts.filter(
        (product) => !product.Discontinued
      ),
      discontinued: parsedProducts.filter((product) => product.Discontinued),
    };
  },
  methods: {
    itemClick(e) {
      this.handleItemClick(e, 'notDiscontinued', 'discontinued');
    },
    itemClick2(e) {
      this.handleItemClick(e, 'discontinued', 'notDiscontinued');
    },
    handleItemClick(event, data, connectedData) {
      this[data] = this[data].map((item) => {
        if (item.ProductID === event.dataItem.ProductID) {
          item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.event.ctrlKey) {
          item[SELECTED_FIELD] = false;
        }
        return item;
      });
      this[connectedData] = this[connectedData].map((item) => {
        item[SELECTED_FIELD] = false;
        return item;
      });
    },
    handleToolBarClick(e) {
      let toolName = e.toolName || '';
      let result = processListBoxData(
        this.notDiscontinued,
        this.discontinued,
        toolName,
        SELECTED_FIELD
      );

      this.notDiscontinued = result.listBoxOneData;
      this.discontinued = result.listBoxTwoData;
    },
  },
};
</script>
