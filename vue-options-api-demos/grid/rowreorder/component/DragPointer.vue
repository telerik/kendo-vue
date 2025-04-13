<template>
    <div class="k-drop-hint k-drop-hint-h" :style="{'position': 'absolute', 'z-index': 20000, 'top': targetTopOffset +'px', 'left': targetLeftOffset + 'px'}">          
        <div class="k-drop-hint-start"></div>
        <div class="k-drop-hint-line"></div>
    </div>
</template>
<script>

export default {
  props: {
    targetLeftOffset: Number,
    targetTopOffset: Number,
  }
}
</script>
