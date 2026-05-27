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
                    Roundness
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
        </div>
    </div>
</template>

<script setup>
import { Label } from '@progress/kendo-vue-labels';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

defineProps({
    size: String,
    themeColor: String,
    rounded: String,
});

const emit = defineEmits(['sizechange', 'themecolorchange', 'roundedchange']);

const sizes = ['small', 'medium', 'large'];
const themeColors = ['base', 'primary', 'secondary', 'tertiary'];
const roundedOptions = ['small', 'medium', 'large', 'full'];

const handleSizeChange = (event) => {
    emit('sizechange', event);
};

const handleThemeColorChange = (event) => {
    emit('themecolorchange', event);
};

const handleRoundedChange = (event) => {
    emit('roundedchange', event);
};
</script>
