<template>
<div>
    <treeview>
        <li data-expanded="true">
            <span class="k-icon k-i-folder"></span>
            My Web Site
            <ul>
                <li data-expanded="true">
                    <span class="k-icon k-i-folder"></span>images
                    <ul>
                        <li><span class="k-icon k-i-image"></span>logo.png</li>
                        <li><span class="k-icon k-i-image"></span>body-back.png</li>
                        <li><span class="k-icon k-i-image"></span>my-photo.jpg</li>
                    </ul>
                </li>
                <li data-expanded="true">
                    <span class="k-icon k-i-folder"></span>resources
                    <ul>
                        <li data-expanded="true">
                            <span class="k-icon k-i-folder"></span>pdf
                            <ul>
                                <li><span class="k-icon k-i-pdf"></span>brochure.pdf</li>
                                <li><span class="k-icon k-i-pdf"></span>prices.pdf</li>
                            </ul>
                        </li>
                        <li><span class="k-icon k-i-folder"></span>zip</li>
                    </ul>
                </li>
                <li><span class="k-icon k-i-html5"></span>about.html</li>
                <li><span class="k-icon k-i-html5"></span>contacts.html</li>
                <li><span class="k-icon k-i-html5"></span>index.html</li>
                <li><span class="k-icon k-i-html5"></span>portfolio.html</li>
            </ul>
        </li>
    </treeview>
</div>
</template>

<script>
import { TreeView } from '@progress/kendo-treeview-vue-wrapper';

export default {
    name: 'App',
    components: {
       'treeview': TreeView,
    }
}
</script>
