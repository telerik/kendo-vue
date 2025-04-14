<template>
    <div class="example-wrapper row">
        <div class="col-xs-12 col-sm-6 example-config">
            <input @click="handleSelect" id="slide" class="k-radio k-radio-md" name="type" type="radio" value="slide"
                :checked="true" />
            <label for="slide" class="k-radio-label">
                &nbsp;Slide
            </label>
            <br />
            <input @click="handleSelect" name="type" id="push" class="k-radio k-radio-md" type="radio" value="push" />
            <label for="push" class="k-radio-label">
                &nbsp;Push
            </label>
            <br />
            <input @click="handleSelect" name="type" id="expand" class="k-radio k-radio-md" type="radio"
                value="expand" />
            <label for="expand" class="k-radio-label">
                &nbsp;Expand
            </label>
            <br />
            <input @click="handleSelect" name="type" id="fade" class="k-radio k-radio-md" type="radio" value="fade" />
            <label for="fade" class="k-radio-label">
                &nbsp;Fade
            </label>
            <br />
            <input @click="handleSelect" name="type" id="zoom" class="k-radio k-radio-md" type="radio" value="zoom" />
            <label for="zoom" class="k-radio-label">
                &nbsp;Zoom
            </label>
            <br />
            <input @click="handleSelect" name="type" id="reveal" class="k-radio k-radio-md" type="radio"
                value="reveal" />
            <label for="reveal" class="k-radio-label">
                &nbsp;Reveal
            </label>
            <br />
            <kbutton type="submit" @click="animate">Animate</kbutton>
        </div>
        <div class="col-xs-12 col-sm-6 example-col">
            <Expand :appear="show" v-if="animationType === 'expand'">
                <div class="content">
                    Content
                </div>
            </Expand>
            <Fade :appear="show" v-else-if="animationType === 'fade'">
                <div class="content">
                    Content
                </div>
            </Fade>
            <Push :appear="show" v-else-if="animationType === 'push'">
                <div class="content">
                    Content
                </div>
            </Push>
            <Reveal :appear="show" v-else-if="animationType === 'reveal'">
                <div class="content">
                    Content
                </div>
            </Reveal>
            <Zoom :appear="show" v-else-if="animationType === 'zoom'">
                <div class="content">
                    Content
                </div>
            </Zoom>
            <Slide :appear="show" v-else-if="animationType === 'slide'">
                <div class="content">
                    Content
                </div>
            </Slide>
        </div>
    </div>
</template>
<script>
import './styles.css';
import { Expand, Fade, Push, Reveal, Slide, Zoom } from '@progress/kendo-vue-animation';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'Expand': Expand,
        'Fade': Fade,
        'Push': Push,
        'Reveal': Reveal,
        'Zoom': Zoom,
        'Slide': Slide,
        'kbutton': Button
    },
    data: function () {
        return {
            animationType: 'slide',
            show: false
        };
    },
    methods: {
        animate() {
            this.show = !this.show;
        },
        handleSelect(event) {
            this.animationType = event.target.value;
        }
    }
}
</script>
