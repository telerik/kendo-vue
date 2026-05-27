<template>
    <div class="row">
                <div class="col-md-6">
                    <dl>
                        <dt>
                            Fade: {{direction}}
                        </dt>
                        <dd>
                            <KButton @click="onClick">Animate</KButton>
                        </dd>
                    </dl>
                  <Fade :appear="index%2" :direction="direction" :stack-children="true">
                       <div class="content" key='key'>{{index}}</div>
                    </Fade>
                </div>
            </div>
</template>

<script setup>
import './styles.css';
import { Fade } from '@progress/kendo-vue-animation';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { ref } from 'vue';

const index = ref(1);
const direction = ref('vertical'); // Assuming default direction is vertical

function onClick() {
    index.value = index.value + 1;
}
</script>
