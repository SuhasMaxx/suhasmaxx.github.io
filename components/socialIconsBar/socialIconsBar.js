import { LitElement, html, css } from "./../../lib/lit-all.min.js";

/* TODO : The component doesnt work with font-awesome somehow. Lit not suported */
export class SocialIconsBar extends LitElement {
  static styles = [
    css`
      .social-icons {
        width: 100%;
        margin: auto;
        text-align: center;
      }

      .social-icons i {
        margin: 1rem;
        font-size: 30px;
      }

      .social-icons a,
      .social-icons a:visited {
        color: inherit;
      }
    `,
  ];

  render() {
    return html`<div class="social-icons">
      <a href="https://www.facebook.com/Suhas.Maxx" target="_blank"
        ><i class="fab fa-facebook"></i
      ></a>
      <a href="https://www.linkedin.com/in/suhas-sanmukh/" target="_blank"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a href="https://github.com/SuhasMaxx" target="_blank"
        ><i class="fab fa-github"></i
      ></a>
      <a href="https://www.instagram.com/suhasmaxx/" target="_blank"
        ><i class="fab fa-instagram"></i
      ></a>
    </div>`;
  }
}
customElements.define("social-icons-bar", SocialIconsBar);
