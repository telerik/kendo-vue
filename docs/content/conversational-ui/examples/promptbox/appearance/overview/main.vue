<template>
    <div>
        <div class="configurator">
            <div class="configurator-header">
                <span class="k-color-primary">CONFIGURATOR</span>
            </div>
            <div class="configurator-options">
                <span class="k-form-field">
                    <Label>
                        Size
                        <div class="k-form-field-wrap">
                            <DropDownList
                                :data-items="sizes"
                                :value="size"
                                @change="handleSizeChange"
                                :style="{ minWidth: '120px' }"
                            />
                        </div>
                    </Label>
                </span>
                <span class="k-form-field">
                    <Label>
                        Border Radius
                        <div class="k-form-field-wrap">
                            <DropDownList
                                :data-items="roundedOptions"
                                :value="rounded"
                                @change="handleRoundedChange"
                                :style="{ minWidth: '120px' }"
                            />
                        </div>
                    </Label>
                </span>
                <span class="k-form-field">
                    <Label>
                        Fill Mode
                        <div class="k-form-field-wrap">
                            <DropDownList
                                :data-items="fillModes"
                                :value="fillMode"
                                @change="handleFillModeChange"
                                :style="{ minWidth: '120px' }"
                            />
                        </div>
                    </Label>
                </span>
                <span class="k-form-field">
                    <Label>
                        Theme Color
                        <div class="k-form-field-wrap">
                            <DropDownList
                                :data-items="themeColors"
                                :value="themeColor"
                                @change="handleThemeColorChange"
                                :style="{ minWidth: '120px' }"
                            />
                        </div>
                    </Label>
                </span>
            </div>
        </div>

        <div class="example-config">
            <PromptBox
                :value="value"
                @change="handleValueChange"
                mode="single"
                placeholder="Type your message..."
                :upload-button-config="buttonConfig"
                :speech-to-text-button-config="buttonConfig"
                :action-button-config="buttonConfig"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Label } from '@progress/kendo-vue-labels';

const value = ref('');
const size = ref('medium');
const rounded = ref('medium');
const fillMode = ref('solid');
const themeColor = ref('base');

const sizes = ['small', 'medium', 'large'];
const roundedOptions = ['small', 'medium', 'large', 'full'];
const fillModes = ['solid', 'flat', 'outline', 'clear', 'link'];
const themeColors = ['base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'inverse'];

const buttonConfig = computed(() => ({
    size: size.value,
    rounded: rounded.value,
    fillMode: fillMode.value,
    themeColor: themeColor.value,
}));

const handleValueChange = (event) => {
    value.value = event.value;
};

const handleSizeChange = (event) => {
    size.value = event.value;
};

const handleRoundedChange = (event) => {
    rounded.value = event.value;
};

const handleFillModeChange = (event) => {
    fillMode.value = event.value;
};

const handleThemeColorChange = (event) => {
    themeColor.value = event.value;
};
</script>

<style>
.configurator {
    margin: -30px -30px 30px -30px;
}

.configurator-header {
    display: flex;
    justify-content: center;
    padding: 4px 0;
}

.configurator-header span {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 11px;
    letter-spacing: 0.5px;
}

.configurator-options {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
    background-color: var(--kendo-color-base);
}

.configurator-options .k-form-field {
    flex: 1 1 0px;
    min-width: 150px;
    margin: 5px;
}

.example-config {
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: var(--kendo-color-base);
}
</style>
