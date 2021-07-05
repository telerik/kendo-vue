<template>
 <div class="container-fluid">
            <div class='d-flex'>
                 <div>
                <div class='mb-2 links'>
                    <a href="https://www.telerik.com/purchase/license-agreement/kendo-ui?utm_medium=cpm&utm_source=vscode-app&utm_campaign=kendo-ui-vue-awareness-license-agreement">License Agreement</a>
                </div>
                <div class='copyright'>
                    Copyright © {{currentYear}} Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.
                </div>
                </div>
                <div class='d-flex ml-auto'>
                    <div class="social">
                    <a href="https://www.facebook.com/KendoUI/"><img src="../assets/images/facebook.svg" alt="facebook" /></a>
                    <a href="https://twitter.com/KendoUI"><img src="../assets/images/twitter.svg" alt="twitter" /></a>
                    <a href="https://www.youtube.com/results?search_query=kendovue"><img src="../assets/images/youtube.svg" alt="youtube" /></a>
                    <a href="https://www.linkedin.com/showcase/telerik/"><img src="../assets/images/linkedin.svg" alt="linkedin" /></a>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>

export default {
     data: function() {
        return {
            currentYear: new Date().getFullYear()
        }
    }
}
</script>
