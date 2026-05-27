<template>
    <div style="display: flex; flex-direction: column; align-items: center">
      <Breadcrumb :dataItems="items" />
  </div>
</template>

<script>
import { Breadcrumb } from '@progress/kendo-vue-layout';

export default {
    name: 'App',
    components: { Breadcrumb },
    data() {
        return {
            items: [
                {
                    id: 'dashboard',
                    text: 'Dashboard',
                    iconClass: 'k-i-dashboard',
                },
                {
                    id: 'patients',
                    text: 'Patients',
                },
                {
                    id: 'john-doe',
                    text: 'John Doe',
                },
                {
                    id: 'medical-history',
                    text: 'Medical History',
                },
                {
                    id: 'lab-reports',
                    text: 'Lab Reports',
                },
            ],
        };
    }

};
</script>

<style scoped>
</style>
