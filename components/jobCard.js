import { LitElement, html, css } from "./../lib/lit-all.min.js";

export class JobCard extends LitElement {
  static styles = [
    css`
      .job-card-container {
        cursor: pointer;
        margin: 8px;
        padding: 12px 18px;
        /* background-color: #44ffee; */
        color: #97feed;
        display: flex;
        justify-content: center;
      }

      .job-title {
        color: #191c1d;
        font-size: 20px;
      }

      .job-details {
        color: #3e9cea;
        font-size: 14px;
      }

      .job-duration {
        color: #2c3133;
        font-size: 10px;
      }
      /*  */

      .company-logo {
        width: 200px;
        height: 60px;
        display: block;
        background-repeat: no-repeat;
        background-size: 70%;
        background-position: center;
        margin-right: 10px;
        background-color: white;
        padding: 5px;
        min-width: 150px;
      }

      .zeus{
        background-size: 60%;
      }

      .lm {
        background-size: 70%;
      }
      .tcs {
        background-size: 60%;
      }
      .sogeti{
        background-size: 40%;
      }

      .details{
        min-width: 60%;
        border-left: 2px solid #191c1d;
        padding-left: 15px;
      }
    `,
  ];

  static get properties() {
    return {
      URL: { type: String },
      title: { type: String },
      post: { type: String },
      duration: { type: String },
      icon: { type: String },
      ext: { type: String },
    };
  }

  constructor() {
    super();
    if (!this.ext) {
      this.ext = "png";
    }
  }

  render() {
    return html`<div class="job-card-container">
      <a
        class="company-logo ${this.icon}"
        href=${this.URL}
        target="_blank"
        style="background-image: url('./../assets/logos/${this.icon}.${this
          .ext}');"
      ></a>
      <div class="details">
      <div class="job-title">
          ${this.title}
        </div>
        <div class="job-details">
          ${this.post}
        </div>
        <div class="job-duration">
          ${this.duration}
        </div>
    </div>
      </div>
      `;
  }
}
customElements.define("job-card", JobCard);
