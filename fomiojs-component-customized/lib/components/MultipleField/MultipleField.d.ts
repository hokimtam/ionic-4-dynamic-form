/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from "formiojs";
declare const FieldComponent: typeof Components.components.field;
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
    checks: Array<Array<any>>;
    items: Array<any>;
    itemSize: number;
    constructor(component: any, options: any, data: any);
    static schema(): import("formiojs").ExtendedComponentSchema<any>;
    static editForm: typeof editForm;
    static builderInfo: {
        title: string;
        group: string;
        icon: string;
        weight: number;
        documentation: string;
        schema: import("formiojs").ExtendedComponentSchema<any>;
    };
    get tableClass(): string;
    renderCell(row: any, col: any): any;
    renderDelete(row: any, col: any): any;
    render(children: any): any;
    /**
     * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
     * elements to attach functionality to.
     *
     * @param element
     * @returns {Promise}
     */
    attach(element: any): any;
    addItem(): void;
    removeItem(index: any): void;
}
export {};
