<template>
 <div>
    <div class="example">
        <div class="upload">
            <upload
                :auto-upload="false"
                :actions-layout="actionsLayout"
                :default-files="[]"
                :with-credentials="false"
                :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
                :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"       
            ></upload>
        </div>
        <div class="example-config">
            <h5>Actions Layout</h5>
            <input id="start" class="k-radio k-radio-md" type="radio" name="layout" value="start" :checked="actionsLayout === 'start'" @click="handleChange" />
            <label for="start" class="k-radio-label">Start</label>
            <br />
            <input id="center" class="k-radio k-radio-md" type="radio" name="layout" value="center" :checked="actionsLayout === 'center'" @click="handleChange" />
            <label for="center" class="k-radio-label">Center</label>
            <br />
            <input id="end" class="k-radio k-radio-md" type="radio" name="layout" value="end" :checked="actionsLayout === 'end'" @click="handleChange" />
            <label for="end" class="k-radio-label">End</label>
            <br />
            <input id="stretched" class="k-radio k-radio-md" type="radio" name="layout" value="stretched" :checked="actionsLayout === 'stretched'" @click="handleChange" />
            <label for="stretched" class="k-radio-label">Stretched</label>
            <span class="k-form-hint">*Please, select files to view the action buttons.</span>
        </div>
        </div>
    </div>
</template>
<script>
import { Upload } from '@progress/kendo-vue-upload';

export default {
    components: {
        upload: Upload
    },
    data () {
        return {
            actionsLayout: 'end'
        };
    },
    methods: {
        handleChange (e) {
            this. actionsLayout = e.target.value;
        }
    }
}
</script>
 <style>
    .example {
        display: flex;
        gap: 20px;
    }
    .upload { flex: 1 0 60%; }
    .example-config { flex: 1 0 30%; }
</style>
