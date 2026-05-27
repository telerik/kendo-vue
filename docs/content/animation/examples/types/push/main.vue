<template>
    <div class="row">
      <div class="col-md-6">
        <dl>
          <dd>
            <KButton @click="onClick">Animate</KButton>
          </dd>
        </dl>
        <Push :appear="show">
          <div class="content">CONTENT</div>
        </Push>
      </div>
    </div>
</template>

<script setup>
import './styles.css';
import { Push } from '@progress/kendo-vue-animation';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { ref } from 'vue';

const show = ref(false);

function onClick() {
    show.value = !show.value;
}
</script>
