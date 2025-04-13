<template>
    <span class="contact-item">
    <div class="k-avatar k-avatar-solid k-avatar-circle k-avatar-primary k-avatar-md">
    <span class="k-avatar-image">
        <img :src="dataItem.image" :alt="'Avatar Image'"/>
    </span>
    </div>
    <span class="contact-details">
        <span class="contact-name">{{dataItem.name}}</span>
        <span class="contact-role">{{dataItem.role}}</span>
    </span>
    </span>
</template>
<script>
export default {
    name: 'CustomItem',
    props: {
        dataItem: Object,
    },
}
</script>
