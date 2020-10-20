import { LitElement } from 'lit-element';
export declare class DropzoneElement extends LitElement {
    /** Public attributes */
    /** Private properties */
    _dropzone: HTMLElement;
    static get styles(): import("lit-element").CSSResult[];
    protected getPreviewTemplate(): string;
    protected initDropzone(): void;
    firstUpdated(): void;
    render(): import("lit-element").TemplateResult;
}
