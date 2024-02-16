export default {
  editor: {
    label: {
      en: "Kros Scheduler",
    },
  },
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
