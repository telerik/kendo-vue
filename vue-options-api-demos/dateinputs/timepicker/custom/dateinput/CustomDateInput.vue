<template>
   <div>
      <input :style="inputStyle" :max="23" :min="0" :type="'number'" data-section="hours" :value="value.getHours()" @change="handleChange" />,
      <input :style="inputStyle" :max="59" :min="0" :type="'number'" data-section="minutes" :value="value.getMinutes()" @change="handleChange" />
  </div>
</template>
<script>
export default {
      props: {
          value: Date
      },
    emits: {
        change: null
      },
      data () {
        return {
            inputStyle: {
                width: '90px'
            },
            today: new Date()
        }
      },
      methods: {
          handleChange (event) {
            const date = {
                hours: this.$props.value.getHours(),
                minutes: this.$props.value.getMinutes()
            };
      
            date[event.target.getAttribute('data-section')] = Number(event.target.value);

            const value = new Date(
                this.today.getFullYear(),
                this.today.getMonth(),
                this.today.getDate(),
                date.hours,
                date.minutes
            );
            this.$emit('change', {
                value,
                event
            }); 
          }
      }
  }
</script>
