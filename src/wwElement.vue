<template>
  <DxScheduler
    all-day-panel-mode="hidden"
    first-day-of-week="1"
    :data-source="content.dataSource"
    :views="views"
    :current-view="content.currentView"
    :editing="true"
    :text-expr="content.textExpr"
    :description-expr="content.descriptionExpr"
    :start-date-expr="content.startDateExpr"
    :end-date-expr="content.endDateExpr"
    @appointment-click="onAppointmentClick"
    @appointment-updated="onAppointmentUpdated"
    @appointment-deleted="onAppointmentDeleted"
  >
    <DxAppointmentDragging
      :group="content.draggingGroupName"
      :on-add="onAppointmentAdd"
      :on-remove="onAppointmentRemove"
      :on-drag-start="onDragStart"
    />
  </DxScheduler>
</template>

<script>
import "./dx.fluent.dx-light-theme.css";
import { devextremeSkLocales } from "./devextreme-locales.js";

import { DxScheduler, DxAppointmentDragging } from "devextreme-vue/scheduler";
import { locale, loadMessages } from "devextreme/localization";

export default {
  components: {
    DxScheduler,
    DxAppointmentDragging,
  },
  created() {
    loadMessages(devextremeSkLocales);
    locale("sk-SK");
  },
  props: {
    content: { type: Object, required: true },
  },
  emits: ["trigger-event"],
  methods: {
    onAppointmentClick(event) {
      event.cancel = true;
      this.$emit("trigger-event", {
        name: "onAppointmentClick",
        event: event.targetedAppointmentData,
      });
    },
    onAppointmentUpdated(event) {
      console.log("onAppointmentUpdated", event);
      this.$emit("trigger-event", {
        name: "onAppointmentUpdated",
        event: event.appointmentData,
      });
    },
    onAppointmentDeleted(event) {
      console.log("onAppointmentDeleted", event);
      this.$emit("trigger-event", {
        name: "onAppointmentDeleted",
        event: event.appointmentData,
      });
    },
    onAppointmentRemove(event) {
      console.log("onAppointmentRemove", event);
      this.$emit("trigger-event", {
        name: "onAppointmentRemove",
        event: event.toItemData,
      });
    },
    onAppointmentAdd(event) {
      console.log("onAppointmentAdd", event);
      this.$emit("trigger-event", {
        name: "onAppointmentAdd",
        event: event.itemData,
      });
    },
    onDragStart(event) {
      console.log("onDragStart", event);
      this.$emit("trigger-event", {
        name: "onDragStart",
        event: event.itemData,
      });
    },
  },
  data() {
    return {
      views: ["agenda", "day", "workWeek", "week", "month"],
    };
  },
};
</script>

<style lang="scss" scoped>
.dx-scheduler-header-panel-container {
  overflow-y: scroll !important;
}
</style>
