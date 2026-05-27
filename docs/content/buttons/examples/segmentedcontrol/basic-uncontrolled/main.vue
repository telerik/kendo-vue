<template>
    <div class="segmented-demo card-container">
        <div class="k-card custom-card">
            <div class="card-row">
                <div class="card-column no-flex">
                    <div class="sidebar-container k-skeleton">
                        <div class="avatar-name-container">
                            <div class="k-skeleton skeleton-avatar" />
                            <div class="name-container">
                                <div class="k-skeleton skeleton-text" />
                                <div class="k-skeleton skeleton-small-text-short" />
                            </div>
                        </div>
                        <div class="description-container">
                            <div class="k-skeleton skeleton-small-text" />
                            <div class="k-skeleton skeleton-small-text" />
                            <div class="k-skeleton skeleton-small-text" />
                        </div>
                    </div>
                </div>
                <div class="card-column">
                    <div class="avatar-title-container">
                        <div class="k-skeleton skeleton-avatar" />
                        <h4 class="k-h4">Create Your Account</h4>
                    </div>

                    <div class="component-container">
                        <h4 class="profile-text">Profile Type</h4>
                        <SegmentedControl
                            :class="'k-align-self-start'"
                            :value="selectedValue"
                            @change="handleChange"
                            :size="'large'"
                            :items="items"
                        />
                        <div v-if="description" class="description-wrapper">
                            <span class="description-title">{{ description.title }}</span>
                            <span class="hint">{{ description.text }}</span>
                        </div>
                    </div>
                    <div class="skeleton-container">
                        <div class="k-skeleton skeleton-box-large" />
                        <div class="k-skeleton skeleton-box-large" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { SegmentedControl } from '@progress/kendo-vue-buttons';
import './styles.css';

const profileDescriptions = {
    personal: {
        title: 'Personal',
        text: 'For individual use \u2014 share basic information, preferences, and connect with others.'
    },
    business: {
        title: 'Business',
        text: 'For companies or organizations \u2014 showcase services, contact details, and professional information.'
    }
};

const items = [
    { value: 'personal', text: 'Personal' },
    { value: 'business', text: 'Business' },
    { value: 'education', text: 'Education', disabled: true }
];

const selectedValue = ref('personal');
const description = computed(() => profileDescriptions[selectedValue.value]);

const handleChange = (value) => {
    selectedValue.value = value;
};
</script>
