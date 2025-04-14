<template>
  <div>
    <h1 :class="'title-basic-usage-bottomnav k-color-primary'">Calendar</h1>
    <div :class="'list'">
      <div :class="'section'">11/5 Monday</div>
      <div :class="'list-item'">
        <div>16:00</div>
        <div :class="'v-line k-bg-error'" />
        <div>Job interview for internal position</div>
      </div>
      <div :class="'list-item'">
        <div>21:00</div>
        <div :class="'v-line k-bg-info'" />
        <div>Martha Birthday</div>
      </div>
      <div :class="'section'">Tomorrow</div>
      <div :class="'list-item'">
        <div :class="'centered'">No upcoming events</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
