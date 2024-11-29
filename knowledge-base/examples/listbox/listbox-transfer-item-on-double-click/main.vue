<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col" style="padding-right: 0">
        <h6>Not Discontinued</h6>
        <ListBox
          :style="{ height: '400px', width: '100%' }"
          :dataItems="notDiscontinued"
          :textField="'ProductName'"
          :selectedField="SELECTED_FIELD"
          :toolbar="'toolbar'"
          :item="'item'"
        >
          <template v-slot:item="{ props }">
            <div
              @dblclick="
                handleDoubleClick(
                  props.dataItem,
                  'notDiscontinued',
                  'discontinued'
                )
              "
            >
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
          :item="'item'"
        >
          <template v-slot:item="{ props }">
            <div
              @dblclick="
                handleDoubleClick(
                  props.dataItem,
                  'discontinued',
                  'notDiscontinued'
                )
              "
            >
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
import { ListBox, ListBoxToolbar } from '@progress/kendo-vue-listbox';
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
    handleDoubleClick(dataItem, sourceList, targetList) {
      this[sourceList] = this[sourceList].filter(
        (item) => item.ProductID !== dataItem.ProductID
      );
      this[targetList] = [...this[targetList], dataItem];
    },
  },
};
</script>
