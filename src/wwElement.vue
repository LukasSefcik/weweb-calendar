<template>
  <DxScheduler
      :data-source="content.dataSource"
      :current-date="currentDate"
      :views="views"
      :start-day-hour="9"
      :current-view="content.currentView"
      @appointment-click="eventClick"
  >
    <DxAppointmentDragging
        :group="content.draggingGroupName"
        :on-remove="onAppointmentRemove"
        :on-add="onAppointmentAdd"
    />
  </DxScheduler>
</template>

<script>
import './dx.fluent.dx-light-theme.css';

import DxScheduler, { DxAppointmentDragging } from 'devextreme-vue/scheduler';

export default {
  components: {
    DxScheduler,
    DxAppointmentDragging
  },
  props: {
    content: {type: Object, required: true},
  },
  emits: ['trigger-event'],
  methods: {
    eventClick(event) {
      console.log('eventClick', event);
      this.$emit('trigger-event', {
        name: 'onAppointmentClick',
        event: event.targetedAppointmentData
      })
    },
    onAppointmentRemove(event) {
      console.log('onAppointmentRemove', event);
    },
    onAppointmentAdd(event) {
      console.log('onAppointmentAdd', event);
    }
  },
  data() {
    return {
      currentDate: new Date(2021, 2, 29),
      views: ['day', 'week', 'month']
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
