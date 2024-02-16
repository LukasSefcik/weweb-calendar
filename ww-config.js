export default {
  editor: {
    label: {
      en: "Kros Scheduler",
    },
  },
  triggerEvents: [
    {
      name: "onAppointmentClick",
      label: { en: "On appoinment event click" },
      event: {
        event: {
          targetedAppointmentData: {
            startDate: "",
            endDate: "",
            title: "",
            allDay: null,
          },
        },
      },
      default: true,
    },
  ],
  properties: {
    dataSource: {
      label: {
        en: "DataSource",
      },
      type: "Info",
      options: {
        text: { en: "Bind your data to the scheduler" },
      },
      defaultValue: [],
      bindable: true,
    },
    currentView: {
      label: {
        en: "Current View",
      },
      type: "TextSelect",
      options: {
        options: [
          { label: "Day", value: "day" },
          { label: "Week", value: "week" },
          { label: "Month", value: "month" },
        ],
      },
      defaultValue: "week",
    },
  },
};
