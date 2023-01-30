<template>
    <div class="row">
        <div class="col-6">
          <p>Simple Steps</p>
          <Stepper :value="value" @change="handleChange" :items="steps" />
        </div>
        <div class="col-6">
          <p>Steps with icons</p>
          <Stepper :value="value" @change="handleChange" :items="icons" />
        </div>
        <div class="col-6 pt-5">
          <p>Steps with labels</p>
          <Stepper
            :value="value"
            @change="handleChange"
            :items="stepsWithLabel"
          />
        </div>
        <div class="col-6 pt-5">
          <p>Steps with icons and labels</p>
          <Stepper
            :value="value"
            @change="handleChange"
            :items="iconsWithLabel"
          />
        </div>
        <div class="col-6 pt-5">
          <p>Steps with custom text</p>
          <Stepper :value="value" @change="handleChange" :items="customText" />
        </div>
        <div class="col-6 pt-5">
          <p>Labels Only</p>
          <Stepper
            :value="value"
            @change="handleChange"
            :mode="'labels'"
            :items="labelOnly"
          />
        </div>
      </div>
</template>
<script lang="ts">
import {
 Stepper
    } from '@progress/kendo-vue-layout';

export default {
    components: {
       Stepper
    },
    data () {
      return {
        value: 1,
        steps: [{}, {}, {}],
        stepsWithLabel: [
            {
                label: "Step 1",
            },
            {
                label: "Step 2",
            },
            {
                label: "Step 3",
            },
        ],
        icons: [
            {
                icon: "k-i-lock",
            },
            {
                icon: "k-i-user",
            },
            {
                icon: "k-i-track-changes",
            },
        ],
        iconsWithLabel: [
            {
                icon: "k-i-lock",
                label: "Step 1",
            },
            {
                icon: "k-i-user",
                label: "Step 2",
            },
            {
                icon: "k-i-track-changes",
                label: "Step 3",
            },
        ],
        customText: [
            {
                text: "A",
            },
            {
                text: "B",
            },
            {
                text: "C",
            },
        ],
        labelOnly: [
            {
                label: "Step 1",
            },
            {
                label: "Step 2",
            },
            {
                label: "Step 3",
            },
        ]
      }
    },
    methods: {
      handleChange (e) {
        this.value = e.value;
      }
    }
};
</script>
