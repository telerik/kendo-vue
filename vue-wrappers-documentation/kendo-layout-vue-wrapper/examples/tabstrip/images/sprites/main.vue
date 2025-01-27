<template>
    <kendo-tabstrip id="tabstrip-sprites"
                    :data-source="localDataSource"
					:data-text-field="'text'"
					:data-sprite-css-class="'spriteCssClass'"
					:data-content-field="'content'">
	</kendo-tabstrip>
</template>
<script>
import { markRaw } from 'vue';
import { TabStrip } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-tabstrip': TabStrip
  },
   data: function () {
       return {
            localDataSource: markRaw(new kendo.data.DataSource({
                data: [{
                        text: "Brazil",
                        spriteCssClass: "brazilFlag",
                        content: "Brazil, officially the Federative Republic of Brazil, is the largest country in South America. It is the world's fifth largest country, both by geographical area and by population with over 192 million people. It is the only Portuguese-speaking country in the Americas and the largest lusophone country in the world."
                    },
                    {
                        text: "India",
                        spriteCssClass: "indiaFlag",
                        content: "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by geographical area, the second-most populous country with over 1.2 billion people, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the north-east; and Burma and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India's Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia."
                    },
                    {
                        text: "Netherlands",
                        spriteCssClass: "netherlandsFlag",
                        content: "The Netherlands is a constituent country of the Kingdom of the Netherlands, located mainly in North-West Europe and with several islands in the Caribbean. Mainland Netherlands borders the North Sea to the north and west, Belgium to the south, and Germany to the east, and shares maritime borders with Belgium, Germany and the United Kingdom. It is a parliamentary democracy organised as a unitary state. The country capital is Amsterdam and the seat of government is The Hague. The Netherlands in its entirety is often referred to as Holland, although North and South Holland are actually only two of its twelve provinces."

                    }]
            }))
        }
   }
}
</script>
<style>
    #tabstrip-sprites .k-sprite {
        background-image: url("https://demos.telerik.com/kendo-ui/content/shared/styles/flags.png");
    }
    .brazilFlag {
        background-position: 0 0;
    }
    .indiaFlag {
        background-position: 0 -32px;
    }
    .netherlandsFlag {
        background-position: 0 -64px;
    }
    .k-tabstrip .k-content {
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>
