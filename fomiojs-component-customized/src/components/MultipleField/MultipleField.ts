/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from "formiojs";
const FieldComponent = Components.components.field;
import editForm from "./MultipleField.form";

/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
export default class MultipleField extends FieldComponent {
  public checks: Array<Array<any>>;

  public items: Array<any>;
  public itemSize: number = 0;

  constructor(component, options, data) {
    super(component, options, data);
    this.items = ["1231231231"];
  }

  static schema() {
    return FieldComponent.schema({
      type: "multiplefield",
      items: (this as any).items || [],
    });
  }

  public static editForm = editForm;

  static builderInfo = {
    title: "Field Array",
    group: "custom",
    icon: "fa fa-table",
    weight: 70,
    documentation: "http://help.form.io/userguide/#table",
    schema: MultipleField.schema(),
  };

  get tableClass() {
    let tableClass = "table ";
    ["striped", "bordered", "hover", "condensed"].forEach((prop) => {
      if (this.component[prop]) {
        tableClass += `table-${prop} `;
      }
    });
    return tableClass;
  }

  renderCell(row, col) {
    return this.renderTemplate("input", {
      input: {
        type: "input",
        ref: `${this.component.key}-${row}`,
        attr: {
          id: `${this.component.key}-${row}-${col}`,
          class: "form-control",
          type: "text",
        },
        value: this.items[row]
      },
    });
  }

  renderDelete(row, col) {
    return this.renderTemplate("button", {
      button: {
        type: "input",
        ref: `${this.component.key}-${row}`,
        attr: {
          id: `${this.component.key}-${row}-${col}`,
          class: "form-control",
          type: "button",
        },
      },
    });
  }

  public render(children) {
    return super.render(
      this.renderTemplate("multiplefield", {
        tableClass: this.tableClass,
        renderCell: this.renderCell.bind(this),
        renderDelete: this.renderDelete.bind(this),
      })
    );
  }

  /**
   * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
   * elements to attach functionality to.
   *
   * @param element
   * @returns {Promise}
   */
  attach(element) {
    const refs = {};
    refs["addRowzzz"] = "multiple";
    for (let i = 0; i < this.items.length; i++) {
      refs[`removeRowzz-${i}`] = 'multiple';
    }

    this.loadRefs(element, refs);

    this.checks = [];

    const com = Array.prototype.slice.call(this.refs[`addRowzzz`], 0);

    if (Array.isArray(com)) {
      com.map((target) => {
        this.addEventListener(
          target,
          "click",
          () => {
            this.addItem();
          },
          true
        );
      });
    }

    for (let i = 0; i < this.items.length; i++) {
      const com = Array.prototype.slice.call(this.refs[`removeRowzz-${i}`], 0);
      // Attach click events to each input in the row
      if (Array.isArray(com)) {
        com.map((target) => {
          this.addEventListener(
            target,
            "click",
            () => {
              this.removeItem(i);
            },
            true
          );
        });
      }
    }

    // Allow basic component functionality to attach like field logic and tooltips.
    return super.attach(element);
  }

  addItem() {
    this.items.push(Math.random());
    this.rebuild();
  }

  removeItem(index) {
    this.items = this.items.filter((e, i) => !i != index);
    this.rebuild();
  }
}
