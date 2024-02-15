<template>
  <DxScheduler time-zone="America/Los_Angeles" :data-source="dataSource" :start-day-hour="9" current-view="week"/>
</template>

<script>
import "./dx.fluent.dx-light-theme.css";
//const views: DxSchedulerTypes.ViewType[] = ['week', 'month'];
//const currentDate = new Date(2021, 2, 28);
//const dataSource = data;

import DxScheduler from 'devextreme-vue/scheduler';
import data from './data.ts';

export default {
  components: {
    DxScheduler
  },
  props: {
    content: {type: object, required: true},
  },
  methods: {
    sayHelloWorld() {
      alert('Hello world!')
    }
  },
  dataSource: [
    {
      text: "website re-design plan",
      startDate: new Date("2021-03-29t16:30:00.000z"),
      endDate: new Date("2021-03-29t18:30:00.000z"),
    },
    {
      text: "book flights to san fran for sales trip",
      startDate: new Date("2021-03-29t19:00:00.000z"),
      endDate: new Date("2021-03-29t20:00:00.000z"),
      allDay: true,
    }
  ]
}
//export default {
//    props: {
//        content: { type: object, required: true },
//    },
//    computed: {
//        textstyle() {
//            return {
//                color: this.content.textcolor,
//            };
//        },
//    },
//};
</script>

<style lang="css" scoped>
@import "./dx.fluent.dx-light-theme.css";
</style>
