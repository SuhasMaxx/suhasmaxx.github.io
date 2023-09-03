import { LitElement, html } from "./../../lib/lit-all.min.js";
import { neonFlickrStyles } from "./neonFlickrText.styles.js";

export class NeonFlickrText extends LitElement {
  static styles = [neonFlickrStyles];

  static get properties() {
    return {
      text: { type: String },
    };
  }

  render() {
    return html`<div class="logo">
      <b>Hi, <span>I</span> am S<span>u</span>h<span>a</span>s</b>
    </div>`;
  }
}
customElements.define("neon-flickr-text", NeonFlickrText);
