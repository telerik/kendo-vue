<template>
    <div :style="{ margin: '-30px -30px 30px -30px' }">
        <div :style="{ display: 'flex', justifyContent: 'center' }">
            <span class="k-color-primary" :style="{ textTransform: 'uppercase', padding: '4px 0' }">Configurator</span>
        </div>
        <div
            class="example-config"
            :style="{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
            }"
        >
            <span v-if="shape !== undefined" class="k-form-field">
                <Label>
                    Shape
                    <div class="k-form-field-wrap">
                        <ButtonGroup>
                            <KButton
                                v-for="(shapeElement, index) in shapes"
                                :key="index"
                                :togglable="true"
                                :selected="shapeElement === shape"
                                @click="handleShapeChange(shapeElement)"
                            >
                                {{ shapeElement || 'None' }}
                            </KButton>
                        </ButtonGroup>
                    </div>
                </Label>
            </span>
            <span class="k-form-field">
                <Label>
                    Size
                    <div class="k-form-field-wrap">
                        <DropDownList
                            :data-items="sizes"
                            :value="size"
                            :style="{
                                'min-width': '120px',
                            }"
                            @change="handleSizeChange"
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
                            :item-render="'colorItemRender'"
                            :style="{
                                'min-width': '150px',
                            }"
                            @change="handleThemeColorChange"
                        >
                            <template #colorItemRender="{ props }">
                                <li
                                    :class="props.itemClass"
                                    @click="(ev) => props.onClick(ev)"
                                    :style="{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }"
                                >
                                    {{ props.dataItem }}{{ ' ' }}
                                    <span
                                        :style="{
                                            width: '16px',
                                            height: '16px',
                                            background: 'currentColor',
                                            display: 'inline-block',
                                        }"
                                        :class="['k-color-' + props.dataItem]"
                                    ></span>
                                </li>
                            </template>
                        </DropDownList>
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
                            :style="{
                                'min-width': '120px',
                            }"
                            @change="handleFillModeChange"
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
                            :style="{
                                'min-width': '120px',
                            }"
                            @change="handleRoundedChange"
                        />
                    </div>
                </Label>
            </span>
        </div>
    </div>
</template>

<script setup>
import { Label } from '@progress/kendo-vue-labels';
import { ButtonGroup, Button as KButton } from '@progress/kendo-vue-buttons';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

defineProps({
    shape: String,
    size: String,
    themeColor: String,
    fillMode: String,
    rounded: String,
});

const emit = defineEmits(['shapechange', 'sizechange', 'themecolorchange', 'fillmodechange', 'roundedchange']);

const shapes = ['rectangle', 'square'];
const sizes = ['small', 'medium', 'large'];
const themeColors = ['base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'inverse'];
const fillModes = ['solid', 'outline', 'flat', 'link'];
const roundedOptions = ['none', 'small', 'medium', 'large', 'full'];

const handleShapeChange = (shape) => {
    emit('shapechange', shape);
};

const handleSizeChange = (event) => {
    emit('sizechange', event);
};

const handleThemeColorChange = (event) => {
    emit('themecolorchange', event);
};

const handleFillModeChange = (event) => {
    emit('fillmodechange', event);
};

const handleRoundedChange = (event) => {
    emit('roundedchange', event);
};
</script>
