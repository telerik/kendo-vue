<template>
  <div > 
    <Tooltip
            :position="position" :anchor-element="anchor"
                >
                <div class="k-form">
        <fieldset>
          <legend>Change position</legend>
          <input
            type="radio"
            name="position"
            id="default"
            class="k-radio"
            @change="onPositionChange"
          />
          <label class="k-radio-label" for="default">
            Default
          </label>

          <input
            type="radio"
            name="position"
            id="top"
            class="k-radio"
            @change="onPositionChange"
          />
          <label class="k-radio-label" for="top">
            Top
          </label>

          <input
            type="radio"
            name="position"
            class="k-radio"
            id="bottom"
            @change="onPositionChange"
          />
          <label class="k-radio-label" for="bottom">
            Bottom
          </label>

          <input
            type="radio"
            name="position"
            id="left"
            class="k-radio"
            @change="onPositionChange"
          />
          <label class="k-radio-label" for="left">
            Left
          </label>

          <input
            type="radio"
            name="position"
            class="k-radio"
            id="right"
            @change="onPositionChange"
          />
          <label class="k-radio-label" for="right">
            Right
          </label>
        </fieldset>
      </div>
      <div class="k-form">
        <fieldset>
          <legend>Change anchor</legend>
          <input
            type="radio"
            name="anchor"
            id="target"
            class="k-radio"
            @change="onAnchorChange"
          />
          <label class="k-radio-label" for="target">
            Target
          </label>

          <input
            type="radio"
            name="anchor"
            id="pointer"
            class="k-radio"
            @change="onAnchorChange"
          />
          <label class="k-radio-label" for="pointer">
            Pointer
          </label>
        </fieldset>
      </div>
      <div
        :style="{
          textAlign: 'center',
          paddingTop: '100px',
        }"
      >
        <button title="some title" class="k-button">
          Hover me
        </button>
      </div>
            </Tooltip>
          </div>
</template>
<script lang="ts">
import { Tooltip } from '@progress/kendo-vue-tooltip';

export default {
  components: {
    Tooltip
  },
  data() {
    return {
      anchor: 'pointer',
      position: 'top'
    };
  },
  methods: {
      onPositionChange (event) {
        if (event.target.id !== "default") {
          this.position = event.target.id;
        } else {
           this.position = undefined;
        }
      },
      onAnchorChange (event) {
        if (event.target.id) {
          this.anchor = event.target.id;
        }
      }
  }
};
</script>
