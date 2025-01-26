<template>
<div>
	<editor :tag="'div'">
        <h2>
            Comprehensive HTML5/JavaScript framework <br />
            for modern web and mobile app development
        </h2>
        <p>
            Kendo UI is everything professional developers need
            to build HTML5 sites and mobile apps. Today, productivity
            of an average HTML/jQuery developer is hampered by
            assembling a Frankenstein framework of disparate
            JavaScript libraries and plug-ins.
        </p>
        <p>
            Kendo UI has it all: rich jQuery-based widgets,
            a simple and consistent programming interface,
            a rock-solid DataSource, validation, internationalization,
            a MVVM framework, themes, templates and the list goes on.
        </p>
    </editor>
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
