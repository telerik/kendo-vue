<template>
    <div class="row">
        <div class="col-md-6">
            <dl>
                <dt>
                    Zoom: {{ direction }}
                </dt>
                <dd>
                    <KButton @click="onClick">Animate</KButton>
                </dd>
            </dl>
            <Zoom :appear="index % 2" :direction="direction" :stack-children="true">
                <div class="content" key='key'>{{ index }}</div>
            </Zoom>
        </div>
        <div class="col-md-6">
            <dl>
                <dt>
                    Direction:
                </dt>
                <dd>
                    <div class="example-config">
                        <label>
                            <input type="radio" name="direction" :value="'in'" :checked="direction === 'in'"
                                @click="onChange" />
                            &nbsp;In
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="direction" :value="'out'" :checked="direction === 'out'"
                                @click="onChange" />
                            &nbsp;Out
                        </label>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script setup>
import './styles.css';
import { Zoom } from '@progress/kendo-vue-animation';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { ref } from 'vue';

const index = ref(1);
const direction = ref('in');

function onClick() {
    index.value = index.value + 1;
}

function onChange(e) {
    direction.value = e.target.value;
}
</script>
