<template>
    <div class="k-grid"  :style="{
                        display: 'block',
                        position: 'absolute',
                        zIndex: 20000,
                        padding: '8px 12px',
                        top: top + 'px',
                        left: left + 'px'
                    }" >
    <table class="k-grid-table">
        <tbody>
            <tr>
                <td class="k-master-row k-alt" >
                    <span :class="hintIcon"
                            style="cursor: 'move'">
                    </span>
                </td>
                <td  class="k-master-row k-alt">
                {{ dataItem.ProductID }}
                </td>
                <td  class="k-master-row k-alt">
                {{ dataItem.ProductName }}
                </td>
                <td class="k-master-row k-alt" >
                {{ dataItem.UnitPrice }}
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>
<script>

export default {
  props: {
    left: Number,
    top: Number,
    showContent: Boolean,
    dataItem: {
      type: Object,
      default: {}
    }
  },
  computed:{
    hintIcon: function(){
      return this.showContent? 'k-icon k-i-insert-middle' : 'k-icon k-i-cancel'
    }
  }
}
</script>
