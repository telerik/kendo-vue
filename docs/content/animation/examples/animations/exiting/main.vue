<template>
    <div class="example">
       <div>
           <dl>
               <dt>
                   Animate:
               </dt>
               <dd>
                    <KButton @click="animate">Animate</KButton>
               </dd>
           </dl>
           <Animation :appear="show"
                   :transition-name="'custom-animation'"
                   :component-child-class-name="'child'">
               <div class="content">CONTENT</div>
           </Animation>
       </div>
   </div>
</template>

<script setup>
import './styles.css';
import { Animation } from '@progress/kendo-vue-animation';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { ref } from 'vue';

const show = ref(true);

function animate() {
    show.value = !show.value;
}
</script>
