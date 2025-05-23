<template>
    <h1 class="k-px-md-15 k-p-5 k-m-0">Settings</h1>
    <div class="k-d-grid k-grid-cols-12 k-gap-4 k-gap-lg-6 k-mb-5 k-overflow-hidden k-p-md-5 k-px-md-15 k-p-5">
        <div class="k-col-span-12 k-col-span-xl-7 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow">
            <PersonalInfo />
        </div>
        <div class="k-col-span-12 k-col-span-xl-5 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-1 k-h-full">
            <Calendar />
        </div>
        <div class="k-col-span-12 k-col-span-xl-7 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow">
          <CardInfo />
        </div>
        <div class="k-col-span-12 k-col-span-xl-5 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-1 k-h-full">
          <Weather />
        </div>
    </div>
</template>
<script setup>
import Calendar from "@/components/Settings/Calendar.vue";
import PersonalInfo from "@/components/Settings/PersonalInfo.vue";
import CardInfo from "@/components/Settings/CardInfo.vue";
import Weather from "@/components/Settings/Weather.vue";
</script>