<template>
  <DxScheduler :data-source="content.dataSource" :current-date="currentDate" :views="views" :start-day-hour="9"
    :current-view="content.currentView" @appointment-click="console.log(event)" />
</template>

<script>
import './dx.fluent.dx-light-theme.css';

import DxScheduler from 'devextreme-vue/scheduler';
import data from './data.ts';

export default {
  components: {
    DxScheduler
  },
  props: {
    content: { type: Object, required: true },
  },
  emits: ['trigger-event'],
  methods: {
    eventClick(event) {
      this.$emit('trigger-event', {
        name: 'onAppointmentClick',
        event: event.targetedAppointmentData
      })
    }
  },
  data() {
    return {
      currentDate: new Date(2021, 2, 29),
      dataSource: data,
      views: ['day', 'week', 'month']
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
