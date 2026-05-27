<template>
  <div>
    <GridColumnMenuSort
      :column="column"
      :sortable="sortable"
      :sort="sort"
      @closemenu="closeMenu"
      @sortchange="sortChange"
    />
    <GridColumnMenuFilter
      :column="column"
      :filterable="filterable"
      :filter="filter"
      @filterfocus="handleFocus"
      @closemenu="closeMenu"
      @expandchange="expandChange"
      @filterchange="filterChange"
    />
    <GridColumnMenuItemGroup>
      <GridColumnMenuItem
        :title="'Columns'"
        :icon-class="'k-i-columns'"
        @menuitemclick="onMenuItemClick"
      />
      <GridColumnMenuItemContent :show="columnsExpanded">
        <div class="k-column-list-wrapper">
          <form @submit="onSubmit" @reset="onReset">
            <div class="k-column-list">
              <div
                v-for="(column, idx) in currentColumns"
                :key="idx"
                class="k-column-list-item"
              >
                <span>
                  <input
                    :id="'column-visiblity-show-' + idx"
                    class="k-checkbox k-checkbox-md k-rounded-md"
                    type="checkbox"
                    readonly
                    :disabled="!column.hidden && oneVisibleColumn"
                    :checked="!column.hidden"
                    @click="onToggleColumn(idx)"
                  />
                  <label
                    :for="'column-visiblity-show-' + idx"
                    class="k-checkbox-label"
                    :style="{ userSelect: 'none' }"
                  >
                    {{ column.title }} - {{ idx }}
                  </label>
                </span>
              </div>
            </div>
            <div class="k-columnmenu-actions">
              <KButton type="reset">Reset</KButton>
              <KButton :theme-color="'primary'">Save</KButton>
            </div>
          </form>
        </div>
      </GridColumnMenuItemContent>
    </GridColumnMenuItemGroup>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
    GridColumnMenuFilter,
    GridColumnMenuSort,
    GridColumnMenuItemGroup,
    GridColumnMenuItemContent,
    GridColumnMenuItem,
} from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const props = defineProps({
    column: Object,
    sortable: [Boolean, Object],
    sort: Array,
    filter: Object,
    filterable: Boolean,
    columns: Array,
});

const emit = defineEmits(['columnssubmit', 'closemenu', 'expandchange', 'filterchange', 'sortchange']);

const currentColumns = ref([...props.columns]);
const columnsExpanded = ref(false);
const filterExpanded = ref(false);

const oneVisibleColumn = computed(() => {
    return currentColumns.value.filter((c) => !c.hidden).length === 1;
});

const handleFocus = (e) => {
    emit('contentfocus', e);
};

const onToggleColumn = (id) => {
    currentColumns.value = currentColumns.value.map((column, idx) =>
        idx === id ? { ...column, hidden: !column.hidden } : column
    );
};

const onReset = (event) => {
    event.preventDefault();
    currentColumns.value = props.columns.map((col) => ({
        ...col,
        hidden: false,
    }));
    onSubmit();
};

const onSubmit = (event) => {
    if (event) {
        event.preventDefault();
    }
    emit('columnssubmit', currentColumns.value);
    emit('closemenu');
};

const onMenuItemClick = () => {
    const value = !columnsExpanded.value;
    columnsExpanded.value = value;
    filterExpanded.value = value ? false : filterExpanded.value;
};

const expandChange = () => {
    emit('expandchange');
};

const closeMenu = () => {
    emit('closemenu');
};

const filterChange = (newDescriptor, e) => {
    emit('filterchange', newDescriptor, e);
};

const sortChange = (newDescriptor, e) => {
    emit('sortchange', newDescriptor, e);
};
</script>
