<template>
  <div>
    <Grid
      :style="{ height: '350px' }"
      :data-items="products"
      :data-item-key="'ProductID'"
      :detail="'detailTemplate'"
      :columns="columns"
      :expand-field="'expanded'"
      :expand-column="expandColumn"
      @expandchange="onExpandChange"
    >
      <template #detailTemplate="{ props }">
        <DetailComponent :data-item="props.dataItem" />
      </template>

      <template #expandCell="{ props }">
        <td v-bind="props.tdProps">
          <Button
            v-if="hasDescription(props.dataItem)"
            fill-mode="flat"
            :svg-icon="props.dataItem.expanded ? arrowDownIcon : arrowUpIcon"
            @click.stop="toggleRow(props.dataItem)"
          />
        </td>
      </template>
    </Grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Grid } from "@progress/kendo-vue-grid";
import { Button } from "@progress/kendo-vue-buttons";
import { arrowDownIcon, arrowUpIcon } from "@progress/kendo-svg-icons";
import DetailComponent from "./DetailComponent.vue";
import { products } from "./products";

export default defineComponent({
  name: "App",
  components: { Grid, Button, DetailComponent },
  data() {
    return {
      products: products.map((p: any) => ({ ...p, expanded: false })),
      columns: [
        { field: "ProductID", title: "ID" },
        { field: "ProductName", title: "Product" },
        { field: "Category.CategoryName", title: "Category" },
        { field: "UnitPrice", title: "Price" },
      ],
      expandColumn: { width: 56, cell: "expandCell" },
      arrowDownIcon,
      arrowUpIcon,
    };
  },
  methods: {
    hasDescription(item: any) {
      const desc = item?.Category?.Description;
      return desc && String(desc).trim() !== "";
    },
    toggleRow(item: any) {
      item.expanded = !item.expanded;
    },
    onExpandChange(event: any) {
      const field = event.target?.$props?.expandField || "expanded";
      event.dataItem[field] = !event.dataItem[field];
    },
  },
});
</script>
