<template>
    <div class="example">
        <div>
            <dl>
                <dt>
                    Slide:
                </dt>
                <dd>
                     <KButton @click="animate">Animate</KButton>
                </dd>
            </dl>
            <Slide :appear="show">
                <div class="content">CONTENT</div>
            </Slide>
        </div>
    </div>
</template>

<script setup>
import './styles.css';
import { Slide } from '@progress/kendo-vue-animation';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { ref } from 'vue';

const show = ref(true);

function animate() {
    show.value = !show.value;
}
</script>
