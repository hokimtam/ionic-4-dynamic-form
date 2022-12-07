var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from "formiojs";
var FieldComponent = Components.components.field;
import editForm from "./MultipleField.form";
/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
var MultipleField = /** @class */ (function (_super) {
    __extends(MultipleField, _super);
    function MultipleField(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.itemSize = 0;
        _this.items = [{ "1": 1 }];
        return _this;
    }
    MultipleField.schema = function () {
        return FieldComponent.schema({
            type: "multiplefield",
            items: this.items || [],
        });
    };
    Object.defineProperty(MultipleField.prototype, "tableClass", {
        get: function () {
            var _this = this;
            var tableClass = "table ";
            ["striped", "bordered", "hover", "condensed"].forEach(function (prop) {
                if (_this.component[prop]) {
                    tableClass += "table-" + prop + " ";
                }
            });
            return tableClass;
        },
        enumerable: false,
        configurable: true
    });
    MultipleField.prototype.renderCell = function (row, col) {
        return this.renderTemplate("input", {
            input: {
                type: "input",
                ref: this.component.key + "-" + row,
                attr: {
                    id: this.component.key + "-" + row + "-" + col,
                    class: "form-control",
                    type: "text",
                },
                value: this.items[row]
            },
        });
    };
    MultipleField.prototype.renderDelete = function (row, col) {
        return this.renderTemplate("button", {
            button: {
                type: "input",
                ref: this.component.key + "-" + row,
                attr: {
                    id: this.component.key + "-" + row + "-" + col,
                    class: "form-control",
                    type: "button",
                },
            },
        });
    };
    MultipleField.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate("multiplefield", {
            tableClass: this.tableClass,
            renderCell: this.renderCell.bind(this),
            renderDelete: this.renderDelete.bind(this),
        }));
    };
    /**
     * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
     * elements to attach functionality to.
     *
     * @param element
     * @returns {Promise}
     */
    MultipleField.prototype.attach = function (element) {
        var _this = this;
        var refs = {};
        refs["addRowzzz"] = "multiple";
        for (var i = 0; i < this.items.length; i++) {
            refs["removeRowzz-" + i] = 'multiple';
        }
        this.loadRefs(element, refs);
        this.checks = [];
        var com = Array.prototype.slice.call(this.refs["addRowzzz"], 0);
        if (Array.isArray(com)) {
            com.map(function (target) {
                _this.addEventListener(target, "click", function () {
                    _this.addItem();
                }, true);
            });
        }
        var _loop_1 = function (i) {
            var com_1 = Array.prototype.slice.call(this_1.refs["removeRowzz-" + i], 0);
            // Attach click events to each input in the row
            if (Array.isArray(com_1)) {
                com_1.map(function (target) {
                    _this.addEventListener(target, "click", function () {
                        _this.removeItem(i);
                    }, true);
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.items.length; i++) {
            _loop_1(i);
        }
        // Allow basic component functionality to attach like field logic and tooltips.
        return _super.prototype.attach.call(this, element);
    };
    MultipleField.prototype.addItem = function () {
        this.items.push(Math.random());
        this.rebuild();
    };
    MultipleField.prototype.removeItem = function (index) {
        this.items = this.items.filter(function (e, i) { return !i != index; });
        this.rebuild();
    };
    MultipleField.editForm = editForm;
    MultipleField.builderInfo = {
        title: "Field Array",
        group: "custom",
        icon: "fa fa-table",
        weight: 70,
        documentation: "http://help.form.io/userguide/#table",
        schema: MultipleField.schema(),
    };
    return MultipleField;
}(FieldComponent));
export default MultipleField;
