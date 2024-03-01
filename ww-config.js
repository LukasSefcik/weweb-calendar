export default {
  editor: {
    label: {
      en: "Kros Scheduler",
    },
  },

  triggerEvents: [
    {
      name: "onAppointmentClick",
      label: { en: "On appointment event click" },
      event: {
        startDate: "",
        endDate: "",
        text: "",
        description: "",
        allDay: null,
      },
    },
    {
      name: "onAppointmentUpdated",
      label: { en: "On appointment update" },
      event: {
        startDate: "",
        endDate: "",
        text: "",
        description: "",
        allDay: null,
      },
    },
    {
      name: "onAppointmentDeleted",
      label: { en: "On appointment deleted" },
      event: {
        startDate: "",
        endDate: "",
        text: "",
        description: "",
        allDay: null,
      },
    },
    {
      name: "onAppointmentAdd",
      label: { en: "On appointment add" },
      event: {
        startDate: "",
        endDate: "",
        text: "",
        description: "",
        allDay: null,
      },
    },
    {
      name: "onAppointmentRemove",
      label: { en: "On appointment remove" },
      event: {
        startDate: "",
        endDate: "",
        text: "",
        description: "",
        allDay: null,
      },
    },
    {
      name: "onDragStart",
      label: { en: "On drag start" },
      event: {
        startDate: "",
        endDate: "",
        text: "",
        description: "",
        allDay: null,
      },
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
      section: "settings",
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
    textExpr: {
      label: {
        en: "Text field name",
      },
      type: "Text",
      defaultValue: "text",
      section: "settings",
    },
    descriptionExpr: {
      label: {
        en: "Description field name",
      },
      type: "Text",
      defaultValue: "description",
      section: "settings",
    },
    startDateExpr: {
      label: {
        en: "Start date field name",
      },
      type: "Text",
      defaultValue: "startDate",
      section: "settings",
    },
    endDateExpr: {
      label: {
        en: "End date field name",
      },
      type: "Text",
      defaultValue: "endDate",
      section: "settings",
    },
  },
};
