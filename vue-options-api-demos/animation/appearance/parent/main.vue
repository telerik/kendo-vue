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
            <kbutton @click="animate">Animate</kbutton>
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
<script>
import './styles.css';
import { Slide } from '@progress/kendo-vue-animation';
import { Button } from '@progress/kendo-vue-buttons';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        Slide: Slide,
        kbutton: Button,
        dropdownlist: DropDownList,
    },
    data: function () {
        return {
            show: false,
            color: 'red',
            colors: ['red', 'green', 'blue'],
        };
    },
    methods: {
        animate() {
            this.show = !this.show;
        },
    },
};
</script>
