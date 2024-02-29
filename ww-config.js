export default {
  editor: {
    label: {
      en: "Kros Scheduler",
    },
  },

  triggerEvents: [
    {
      name: "onAppointmentClick",
      label: {en: "On appointment event click"},
      event: {
        startDate: "",
        endDate: "",
        text: "",
        description: "",
        allDay: null,
      },
    },
    // {
    //   name: "onAppointmentAdd",
    //   label: {en: "On appointment add"},
    //   event: {
    //     startDate: "",
    //     endDate: "",
    //     text: "",
    //     description: "",
    //     allDay: null,
    //   },
    // },
    // {
    //   name: "onAppointmentRemove",
    //   label: {en: "On appointment remove"},
    //   event: {
    //     startDate: "",
    //     endDate: "",
    //     text: "",
    //     description: "",
    //     allDay: null,
    //   },
    // },
    // {
    //   name: "onDragStart",
    //   label: {en: "On drag start"},
    //   event: {
    //     startDate: "",
    //     endDate: "",
    //     text: "",
    //     description: "",
    //     allDay: null,
    //   },
    // }
  ],

  properties: {
    dataSource: {
      label: {
        en: "DataSource",
      },
      type: "Info",
      options: {
        text: {en: "Bind your data to the scheduler"},
      },
      defaultValue: [],
      bindable: true,
      section: "settings",
    },
    currentView: {
      label: {
        en: "Current View",
      },
      type: "TextSelect",
      options: {
        options: [
          {label: "Day", value: "day"},
          {label: "Week", value: "week"},
          {label: "Month", value: "month"},
        ],
      },
      defaultValue: "week",
      section: "settings",
    },
    draggingGroupName: {
      label: {
        en: "Dragging Group Name",
      },
      type: "Text",
      defaultValue: "",
      section: "settings",
    },
  }
};
