export const FORM_META = {
  "display": "form",
  "components": [
    {
      "title": "NC Detail",
      "collapsible": true,
      "key": "panel",
      "type": "panel",
      "label": "Panel",
      "collapsed": true,
      "input": false,
      "tableView": false,
      "components": [
        {
          "label": "Columns",
          "columns": [
            {
              "components": [
                {
                  "label": "Products",
                  "widget": "choicesjs",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "select",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "Wip Job Number",
                  "tableView": true,
                  "key": "textField1",
                  "type": "textfield",
                  "input": true
                },
                {
                  "label": "Work Stattion",
                  "widget": "choicesjs",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "select1",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "Notification Group",
                  "widget": "choicesjs",
                  "tableView": true,
                  "key": "notificationGroup",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "Material Location",
                  "widget": "choicesjs",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "notificationGroup1",
                  "type": "select",
                  "input": true
                }
              ],
              "width": 6,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "size": "md",
              "currentWidth": 6
            },
            {
              "components": [
                {
                  "label": "Phase Detected",
                  "widget": "choicesjs",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "select",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "Platform",
                  "widget": "choicesjs",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "notificationGroup1",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "Responsive Per Group",
                  "widget": "choicesjs",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "notificationGroup2",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "NPI Checkbox",
                  "tableView": false,
                  "key": "npiCheckbox",
                  "type": "checkbox",
                  "input": true,
                  "defaultValue": false
                }
              ],
              "width": 6,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "size": "md",
              "currentWidth": 6
            }
          ],
          "key": "columns",
          "type": "columns",
          "input": false,
          "tableView": false
        }
      ]
    },
    {
      "title": "Product Details",
      "collapsible": true,
      "key": "panel1",
      "type": "panel",
      "label": "Panel",
      "collapsed": true,
      "input": false,
      "tableView": false,
      "components": [
        {
          "label": "Columns",
          "columns": [
            {
              "components": [
                {
                  "label": "Port Number",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "portNumber",
                  "type": "textfield",
                  "input": true
                },
                {
                  "label": "Commodity",
                  "widget": "choicesjs",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "select2",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "Supplier Name",
                  "tableView": true,
                  "key": "portNumber1",
                  "type": "textfield",
                  "input": true
                },
                {
                  "label": "Defective Quantity",
                  "widget": "choicesjs",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "select3",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "Supplier Notified",
                  "tableView": false,
                  "key": "supplierNotified",
                  "type": "checkbox",
                  "input": true,
                  "defaultValue": false
                },
                {
                  "label": "Serial Number",
                  "tableView": false,
                  "defaultValue": false,
                  "key": "supplierNotified1",
                  "type": "checkbox",
                  "input": true
                }
              ],
              "width": 6,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "size": "md",
              "currentWidth": 6
            },
            {
              "components": [
                {
                  "label": "Port Description",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "portDescription",
                  "type": "textfield",
                  "input": true
                },
                {
                  "label": "PO Number",
                  "tableView": true,
                  "key": "portDescription2",
                  "type": "textfield",
                  "input": true
                },
                {
                  "label": "Supplier GSL",
                  "tableView": true,
                  "key": "portDescription3",
                  "type": "textfield",
                  "input": true
                },
                {
                  "label": "NC Summary",
                  "tableView": true,
                  "key": "portDescription4",
                  "type": "textfield",
                  "input": true
                },
                {
                  "label": "Subcomponent",
                  "tableView": false,
                  "defaultValue": false,
                  "key": "supplierNotified2",
                  "type": "checkbox",
                  "input": true
                },
                {
                  "label": "Subcomponent ID",
                  "widget": "choicesjs",
                  "tableView": true,
                  "key": "subcomponentId",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "Sub-component Port Number",
                  "tableView": true,
                  "key": "subComponentPortNumber",
                  "type": "textfield",
                  "input": true
                },
                {
                  "label": "Sub-component Port Description",
                  "tableView": true,
                  "key": "subComponentPortNumber1",
                  "type": "textfield",
                  "input": true
                },
                {
                  "label": "Serial Number",
                  "widget": "choicesjs",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "select4",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "Quantity",
                  "widget": "choicesjs",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "select5",
                  "type": "select",
                  "input": true
                }
              ],
              "width": 6,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "size": "md",
              "currentWidth": 6
            }
          ],
          "key": "columns1",
          "type": "columns",
          "input": false,
          "tableView": false
        }
      ]
    },
    {
      "title": "Deviation Description",
      "collapsible": true,
      "key": "deviationDescription",
      "type": "panel",
      "label": "Panel",
      "input": false,
      "tableView": false,
      "components": [
        {
          "label": "Columns",
          "columns": [
            {
              "components": [
                {
                  "label": "Deviation ID",
                  "widget": "choicesjs",
                  "tableView": true,
                  "key": "deviationId",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "Defect Code",
                  "widget": "choicesjs",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "deviationId1",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "Deviation Quantity",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "deviationQuantity",
                  "type": "textfield",
                  "input": true
                },
                {
                  "label": "Deviation Status",
                  "widget": "choicesjs",
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "deviationId2",
                  "type": "select",
                  "input": true
                },
                {
                  "label": "Deviation Description",
                  "autoExpand": false,
                  "tableView": true,
                  "validate": {
                    "required": true
                  },
                  "key": "deviationDescription1",
                  "type": "textarea",
                  "input": true
                }
              ],
              "width": 6,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "size": "md",
              "currentWidth": 6
            },
            {
              "components": [],
              "width": 6,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "size": "md",
              "currentWidth": 6
            }
          ],
          "key": "columns2",
          "type": "columns",
          "input": false,
          "tableView": false
        }
      ],
      "collapsed": true
    },
    {
      "title": "Assignment Detail",
      "collapsible": true,
      "key": "assignmentDetail",
      "type": "panel",
      "label": "Panel",
      "input": false,
      "tableView": false,
      "collapsed": true,
      "components": []
    },
    {
      "type": "button",
      "label": "Submit",
      "key": "submit",
      "disableOnInvalid": true,
      "input": true,
      "tableView": false
    }
  ]
}
