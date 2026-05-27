<template>
    <div class="row">
                <div class="col-md-6">
                    <dl>
                        <dt>
                            Expand: {{direction}}
                        </dt>
                        <dd>
                            <KButton @click="onClick">Animate</KButton>
                        </dd>
                    </dl>
                  <Expand :appear="show" :direction="direction">
                         <div class="content">
                            Content
                            </div >
                    </Expand>
                </div>
                <div class="col-md-6">
                    <dl>
                        <dt>
                            Direction:
                        </dt>
                        <dd>
                            <div class="example-config">
                                <label>
                                    <input
                                         type="radio"
                                         name="direction"
                                         :value="'vertical'"
                                         :checked="direction === 'vertical'"
                                         @click="onChange"
                                     />
                                    &nbsp;Vertical
                                </label>
                                <br />
                                <label>
                                    <input
                                         type="radio"
                                         name="direction"
                                         :value="'horizontal'"
                                         :checked="direction === 'horizontal'"
                                         @click="onChange"
                                     />
                                    &nbsp;Horizontal
                                </label>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
</template>

<script setup>
import './styles.css';
import { Expand } from '@progress/kendo-vue-animation';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { ref } from 'vue';

const show = ref(false);
const direction = ref('vertical');

function onClick() {
    show.value = !show.value;
}

function onChange(e) {
    direction.value = e.target.value;
}
</script>
