<template>
<td @dragover="dragOver">
    <span class="k-icon k-i-reorder"
            draggable="true"
            style="cursor: 'move'"
            @dragstart="dragStart"
            @dragend="dragEnd">
    </span>
</td>
</template>
<script>
export default {
    emits:{
        dragover: null,
        dragstart: null,
        dragend: null
    },
    props: {
        dataItem: Object
    },
    methods: {
        dragOver(e){
          this.$emit('dragover', this.dataItem);
        },
        dragStart(e) {
          this.$emit('dragstart', this.dataItem);
        },
        dragEnd(e) {
          this.$emit('dragend');
        }
    }
}
</script>
