<template>
<div>
    <editor style="height:280px"></editor>
</div>
</template>

<script>
import { Editor } from '@progress/kendo-editor-vue-wrapper';

export default {
    name: 'App',
    components: {
       'editor': Editor,
    }
}
</script>
