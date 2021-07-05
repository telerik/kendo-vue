<template>
 <div class='container-fluid'>
            <div class="d-flex border-bottom py-2">
                <div class="d-flex">
                    <div class='project-name d-flex'>
                        <span class="mx-0 my-auto logo">
                            {{projectName}}
                        </span>
                    </div>
                </div>
                <div class='d-flex ml-auto nav'>
                    <MenuNavContainer />
                </div>
            </div>
        </div>
</template>
<script>
import MenuNavContainer from "./MenuNavContainer.vue"

export default {
    components: {
        MenuNavContainer
    },
    props: {
        projectName: String
    }
}
</script>