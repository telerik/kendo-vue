<template>
  <Draggable
    v-if="field === 'reorder'"
    @press="onPress"
    @drag="onDrag"
    @release="onRelease"
    ref="draggable"
  >
    <td :data-itemid="dataItem.ProductID" :class="tdClass">
      <span class="k-icon k-i-reorder" :style="{ cursor: 'move' }">
        <SvgIcon :icon="reorderIcon" />
      </span>
    </td>
  </Draggable>
  <td v-else :data-itemid="dataItem.ProductID" :class="tdClass">
    {{ getNestedValue(field, dataItem) }}
  </td>
</template>
<script>
import { Draggable, SvgIcon } from '@progress/kendo-vue-common';
import { reorderIcon } from '@progress/kendo-svg-icons';
export default {
  emits: {
    pressHandler: null,
    dragHandler: null,
    releaseHandler: null,
  },
  components: {
    Draggable,
    SvgIcon,
  },
  props: {
    field: String,
    dataItem: Object,
    dropPosition: String,
  },
  computed: {
    tdClass: function () {
      return this.dropPosition === 'above' ? 'above' : 'below';
    },
  },
  data() {
    return {
      isDragged: false,
      reorderIcon,
    };
  },
  methods: {
    getNestedValue: function (fieldName, dataItem) {
      const path = fieldName.split('.');
      let data = dataItem;
      path.forEach((p) => {
        data = data ? data[p] : undefined;
      });
      return data;
    },
    onPress(event) {
      const element = this.$refs.draggable && this.$refs.draggable.element;
      if (!event.isTouch) {
        event.originalEvent.preventDefault();
      }
      this.isDragged = true;
      if (element) {
        this.$emit('pressHandler', this.$props.dataItem, event, element);
      }
    },
    onDrag(event) {
      document.getElementsByTagName('body')[0].style.cursor = 'move';
      const element = this.$refs.draggable && this.$refs.draggable.element;
      if (!event.isTouch) {
        event.originalEvent.preventDefault();
      }
      event.originalEvent.stopPropagation();
      if (element) {
        this.$emit('dragHandler', this.$props.dataItem, event, element);
      }
    },
    onRelease(event) {
      document.getElementsByTagName('body')[0].style.cursor = 'default';
      const element = this.$refs.draggable && this.$refs.draggable.element;
      this.isDragged = false;
      if (element) {
        this.$emit('releaseHandler', this.$props.dataItem, event, element);
      }
    },
  },
};
</script>
<style scoped>
html .k-grid.dragging tbody tr:hover td.below {
  border-bottom-color: red;
  border-bottom-width: 2px;
}
html .k-grid.dragging tbody tr:hover td.above {
  border-top-color: red;
  border-top-width: 2px;
}
</style>
