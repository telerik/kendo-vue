<template>
  <div class="example">
    <div>
      <dl>
        <dt>Color:</dt>
        <dd>
          <dropdownlist
            :style="{ width: '230px' }"
            name="color"
            v-model="color"
            :data-items="colors"
          >
          </dropdownlist>
        </dd>
        <dt>Slide:</dt>
        <dd>
          <KButton @click="animate">Animate</KButton>
        </dd>
      </dl>
      <Slide
        :appear="show"
        class="wrapper"
        :style="{ color: color, border: `1px solid ${color}` }"
      >
        <div class="content">CONTENT</div>
      </Slide>
    </div>
  </div>
</template>

<script setup>
import './styles.css';
import { Slide } from '@progress/kendo-vue-animation';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { DropDownList as dropdownlist } from '@progress/kendo-vue-dropdowns';
import { ref } from 'vue';

const show = ref(false);
const color = ref('red');
const colors = ['red', 'green', 'blue'];

function animate() {
    show.value = !show.value;
}
</script>
