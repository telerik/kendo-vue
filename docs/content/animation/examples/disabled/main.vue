<template>
    <div class="example">
        <div>
            <dl>
                <dt>
                    <dl>
                        <input type="checkbox" id="enter" class="k-checkbox k-checkbox-md k-rounded-md" name="animation"
                            v-model="animation" />
                        <label for="animation" class="k-checkbox-label">
                            Animation&nbsp;
                        </label>
                    </dl>
                </dt>
                <dt>
                    Slide:
                </dt>
                <dd>
                    <KButton @click="animate">Animate</KButton>
                </dd>
            </dl>
            <Slide :appear="show" :enter="animation" :exit="animation">
                <div class="content">
                    CONTENT
                </div>
            </Slide>
        </div>
    </div>
</template>

<script setup>
import './styles.css';
import { Slide } from '@progress/kendo-vue-animation';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { ref } from 'vue';

const show = ref(false);
const animation = ref(true);

function animate() {
    show.value = !show.value;
}
</script>
