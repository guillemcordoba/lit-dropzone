import { html, css, LitElement, query } from 'lit-element';
import Dropzone from 'dropzone';
// @ts-ignore
import basicStyles from 'dropzone/dist/min/basic.min.css';
// @ts-ignore
import dropzoneStyles from 'dropzone/dist/min/dropzone.min.css';

export class DropzoneElement extends LitElement {
  /** Public attributes */

  /** Private properties */

  @query('#dropzone') _dropzone!: HTMLElement;

  static get styles() {
    return [
      css`
        :host {
          display: contents;
        }

        #dropzone {
          background: white;
          border-radius: 5px;
          border: 2px dashed rgb(0, 135, 247);
          border-image: none;
        }

        .center-content {
          align-items: center;
          justify-content: center;
        }
      `,
    ];
  }

  protected getPreviewTemplate(): string {
    return `
    <DIV class="dz-preview dz-file-preview">
    <DIV class="dz-image"><IMG data-dz-thumbnail=""></DIV>
    <DIV class="dz-details">
    <DIV class="dz-size"><SPAN data-dz-size=""></SPAN></DIV>
    <DIV class="dz-filename"><SPAN data-dz-name=""></SPAN></DIV></DIV>
    <DIV class="dz-progress"><SPAN class="dz-upload" 
    data-dz-uploadprogress=""></SPAN></DIV>
    <DIV class="dz-error-message"><SPAN data-dz-errormessage=""></SPAN></DIV>
    <div class="dz-success-mark">
      <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
        <title>Check</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
            <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>
        </g>
      </svg>
    </div>
  `;
  }

  protected initDropzone(): void {
    new Dropzone(this._dropzone, {
      previewTemplate: this.getPreviewTemplate(),
      url: 'nourl.no',
    });
  }

  firstUpdated() {
    this.initDropzone();
  }

  render() {
    return html`
      <style>
        ${basicStyles}
        ${dropzoneStyles}
      </style>
      <div
        id="dropzone"
        style="flex: 1; display: flex;"
        class="dropzone center-content"
      ></div>
    `;
  }
}
