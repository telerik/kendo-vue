<template>
    <div :style="{ margin: '-30px -30px 30px -30px' }">
      <div :style="{ display: 'flex', justifyContent: 'center' }">
        <span class="k-color-primary"  :style="{ textTransform: 'uppercase', padding: '4px 0' }">Configurator</span>
      </div>

      <div
        class="example-config"
        :style="{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
        }"
      >
        <div class="k-form-field" :style="{ flex: '1 1 300px' }">
          <KLabel>SCROLL BUTTONS VISIBILITY
            <div class="k-form-field-wrap">
                <DropDownList
                    :data-items="scrollButtonsOptions"
                    :value="scrollButtons"
                    :style="{ 'min-width': '120px' }"
                    @change="handleScrollButtonsChange"/>
            </div>
          </KLabel>
        </div>

        <div class="k-form-field" :style="{ flex: '1 1 300px' }">
          <KLabel>SCROLL BUTTONS POSITION
            <div class="k-form-field-wrap">
            <DropDownList
                :data-items="scrollButtonsPositionOptions"
                :value="scrollButtonsPosition"
                :style="{ 'min-width': '120px' }"
                @change="handleScrollButtonsPosition"
            />
          </div>
          </KLabel>
        </div>

        <div class="k-form-field" :style="{ flex: '1 1 300px' }">
          <KLabel>BUTTONS SCROLL SPEED
            <div class="k-form-field-wrap">
            <DropDownList
                :data-items="buttonScrollSpeedOptions"
                :value="buttonScrollSpeed"
                :style="{ 'min-width': '120px' }"
                @change="handleButtonScrollSpeed"
            />
          </div>
          </KLabel>
        </div>
      </div>
    </div>
</template>

<script>
import { Label as KLabel } from '@progress/kendo-vue-labels';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        KLabel,
        DropDownList
    },
    props: {
        scrollButtons:  String,
        scrollButtonsPosition: String,
        buttonScrollSpeed: Number,
    },
    emits: ['scrollButtonsChange', 'scrollButtonsPositionChange', 'buttonScrollSpeedChange'],
    data() {
        return {
            scrollButtonsOptions: ['auto', 'visible', 'hidden'],
            scrollButtonsPositionOptions: ['split', 'start', 'end'],
            buttonScrollSpeedOptions: [100, 300, 500],
        };
    },
    methods: {
        handleScrollButtonsChange(value) {
            console.log(value);
            this.$emit('scrollButtonsChange', value.value);
        },
        handleScrollButtonsPosition(value) {
            this.$emit('scrollButtonsPositionChange', value.value);
        },
        handleButtonScrollSpeed(value) {
            this.$emit('buttonScrollSpeedChange', value.value);
        },
    },
};
</script>
