<template>
    <div class="demo-container">
        <div class="configuration-panel">
            <div class="config-grid">
                <div class="config-row">
                    <Label class="label-inline">
                        Allow Multiple
                        <Checkbox
                            :value="multipleFiles"
                            @change="(e) => (multipleFiles = e.value ?? false)"
                        />
                    </Label>
                </div>

                <div class="config-row">
                    <Label class="label-inline">
                        Restrict Size (5MB)
                        <Checkbox
                            :value="restrictFileSize"
                            @change="(e) => (restrictFileSize = e.value ?? false)"
                        />
                    </Label>
                </div>

                <div class="config-row">
                    <Label class="label-inline">
                        Disabled
                        <Checkbox :value="disabled" @change="(e) => (disabled = e.value ?? false)" />
                    </Label>
                </div>

                <div class="config-row">
                    <Label class="label-compact">File Types:</Label>
                    <DropDownList
                        :data-items="fileTypeOptions"
                        :value="selectedFileTypeOption"
                        @change="handleFileTypeChange"
                        text-field="text"
                        data-item-key="value"
                        class="dropdown-compact"
                    />
                </div>
            </div>
        </div>

        <PromptBox
            :value="promptValue"
            @change="handleValueChange"
            :upload-button-config="uploadButtonSettings"
            placeholder="Attach files and type a message..."
            @promptaction="handleSend"
        />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { Checkbox } from '@progress/kendo-vue-inputs';
import { Label } from '@progress/kendo-vue-labels';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const fileTypeOptions = [
    { text: 'All Files', value: 'all' },
    { text: 'Images (.png, .jpg, .jpeg, .gif)', value: 'images' },
    { text: 'Documents (.pdf, .doc, .docx)', value: 'documents' },
    { text: 'Code Files (.js, .ts, .json)', value: 'code' },
];

const promptValue = ref('');
const multipleFiles = ref(false);
const restrictFileSize = ref(true);
const disabled = ref(false);
const selectedFileType = ref('all');

const uploadButtonSettings = computed(() => {
    const settings = {
        multiple: multipleFiles.value,
        disabled: disabled.value,
    };

    if (restrictFileSize.value) {
        settings.restrictions = {
            maxFileSize: 5 * 1024 * 1024,
        };
    }

    switch (selectedFileType.value) {
        case 'images':
            settings.accept = 'image/jpeg,image/png,image/gif';
            settings.restrictions = {
                ...settings.restrictions,
                allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'],
            };
            break;
        case 'documents':
            settings.accept = '.pdf,.doc,.docx';
            settings.restrictions = {
                ...settings.restrictions,
                allowedExtensions: ['.pdf', '.doc', '.docx'],
            };
            break;
        case 'code':
            settings.accept = '.js,.ts,.json,.html,.css';
            settings.restrictions = {
                ...settings.restrictions,
                allowedExtensions: ['.js', '.ts', '.json', '.html', '.css'],
            };
            break;
        default:
            settings.accept = undefined;
    }

    return settings;
});

const selectedFileTypeOption = computed(
    () => fileTypeOptions.find((opt) => opt.value === selectedFileType.value) || fileTypeOptions[0]
);

const handleValueChange = (event) => {
    promptValue.value = event.value;
};

const handleFileTypeChange = (event) => {
    selectedFileType.value = event.value.value;
};

const handleSend = () => {
    promptValue.value = '';
};
</script>

<style>
.demo-container {
    max-width: 700px;
    margin: 0 auto;
}

.configuration-panel {
    background-color: var(--kendo-color-base);
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 20px;
    margin-bottom: 20px;
}

.config-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 16px;
    align-items: center;
}

.config-row {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 32px;
}

.label-inline {
    display: flex;
    align-items: center;
    gap: 8px;
}

.label-compact {
    min-width: 80px;
    font-size: 13px;
}

.dropdown-compact {
    flex: 1;
    min-width: 0;
}

.demo-container .k-prompt-box {
    width: 100%;
}

.selected-files {
    padding-top: 8px;
    border-top: 1px solid #ddd;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
    font-size: 13px;
}

.file-tag {
    background: #e3f2fd;
    padding: 2px 8px;
    border-radius: 3px;
    font-size: 12px;
}
</style>
