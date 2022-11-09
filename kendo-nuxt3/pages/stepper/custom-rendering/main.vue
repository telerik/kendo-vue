<template>
<div>
    <div class="mb-5">
      <Stepper
          class="emoji-stepper"
          :value="value"
          @change="handleChange"
          :items="stepsWithEmoji"
          :item="'StepWithEmoji'"
        >
         <template v-slot:StepWithEmoji="{props}">
           <Step v-bind="props" @change="(e) => props.onChange(e)">
                <span class="k-step-indicator" aria-hidden="true">
                    <span class="emoji">{{props.emoji}}</span>
                </span>
                <span class="k-step-label">
                    <span class="k-step-text">{{props.label}}</span>
                </span>
                </Step>
        </template>
      </Stepper>
      </div>
      <div class="mb-1">
        <Stepper
          :class="'custom-stepper'"
          :value="value"
          @change="handleChange"
          :items="customSteps"
          :item="'CustomStep'"
        >
            <template v-slot:CustomStep="{props}">
          <Step  v-bind="props">
            <div class="custom-step">
                <span :class="props.icon" />
            </div>
            <span class="step-label">{{props.label}}</span>
            </Step>
        </template>
        </Stepper>
      </div>
</div>
</template>
<script>
import {
 Stepper, Step
    } from '@progress/kendo-vue-layout';

export default {
    components: {
       Stepper, Step
    },
    data () {
      return {
        value: 2,
        stepsWithEmoji: [
            {
                label: "Happy",
                emoji: "😀",
            },
            {
                label: "Angry",
                emoji: "😠",
            },
            {
                label: "Cool",
                emoji: "😎",
            },
            {
                label: "Love",
                emoji: "😍",
            },
        ],
        customSteps: [
            {
                label: "Configuration",
                icon: "k-icon k-i-gear",
            },
            {
                label: "Sizing",
                icon: "k-icon k-i-pan",
            },
            {
                label: "Preview",
                icon: "k-icon k-i-preview",
            },
            {
                label: "Submit",
                icon: "k-icon k-i-file-add",
            },
        ]
      };
    },
    methods: {
       handleChange (e) {
        this.value = e.value;
       }
    }
};
</script>
<style>
.emoji-stepper .emoji {
        height: 100%;
        line-height: 30px;
        font-size: 24px;
    }
    .custom-stepper .k-progressbar {
        height: 4px;
        top: 18px;
    }

    .custom-stepper .k-progressbar .k-state-selected {
        background: linear-gradient(to right, #ffc837, #ff8008);
    }

    .custom-step {
        width: 40px;
        height: 40px;
        border: 2px solid #ff8008;
        border-radius: 10px;
        background-clip: padding-box;
        border-radius: 10px;
        box-sizing: border-box;
        text-align: center;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
    }

    .k-step-done .custom-step {
        background-image: radial-gradient(circle at center, #ffC837 10px, #ff8008);
    }

    .k-step:not(.k-step-done):not(.k-step-current) .custom-step {
        border: 2px solid #ccc;
    }

    .k-step-link .k-icon {
        font-size: 24px;
        color: #000;
    }

    .k-step-link .step-label {
        color: #75240d;
        font-weight: bold;
    }
</style>
