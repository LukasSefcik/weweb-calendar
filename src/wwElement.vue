<template>
  <DxScheduler :data-source="content.dataSource"
               :current-date="currentDate"
               :views="views"
               :start-day-hour="9"
               :current-view="content.currentView"
               :editing="true"
               @appointment-click="eventClick">
    <DxAppointmentDragging :group="content.draggingGroupName"
                           :on-add="onAppointmentAdd"
                           :on-remove="onAppointmentRemove"
                           :drag-start="onDragStart"
    />
  </DxScheduler>
</template>

<script>
import './dx.fluent.dx-light-theme.css';

import { DxScheduler, DxAppointmentDragging } from 'devextreme-vue/scheduler';

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
      this.$emit('trigger-event', {
        name: 'onAppointmentClick',
        event: event.targetedAppointmentData
      })
    },
    onAppointmentRemove(event) {
      console.log('onAppointmentRemove', event);
      this.$emit('trigger-event', {
        name: 'onAppointmentRemove',
        event: event.toItemData
      })
    },
    onAppointmentAdd(event) {
      console.log('onAppointmentAdd', event);
      this.$emit('trigger-event', {
        name: 'onAppointmentAdd',
        event: event.itemData
      })
    },
    onDragStart(event) {
      console.log('onDragStart', event);
      this.$emit('trigger-event', {
        name: 'onDragStart',
        event: event.itemData.Target
      })
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
