/**
 * Copyright 2026 Evan Litwin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { ref } from "lit/directives/ref.js";

/**
 * `website-top-banner`
 * 
 * @demo index.html
 * @element website-top-banner
 */
export class WebsiteTopBanner extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "website-top-banner";
  }

  constructor() {
    super();
    this.logo = "";
    this.leagueName = "";
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/", import.meta.url).href +
        "/../",
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
        logo: { type: String, reflect: true},
        leagueName: { type: String, reflect: true},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        color-scheme: light dark;
      }
      .wrapper {
        margin: 0;
        padding: var(--ddd-spacing-4);
        background-color: light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-coalyGray));
        height: 200px;
        width: 100%;
        display: flex;
        box-sizing: border-box;
        align-items: center;
        position: relative;
        font-weight: 700;
      }
      .league-name {
        font-size: var(--ddd-font-size-m);
        text-align: center;
        margin-top: 0px;
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
       
      }
      .hover-underline {
        font-size: 2rem;
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
        position: relative;
        display: inline-block;
}

.hover-underline::after,
.hover-underline::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, var(--ddd-theme-default-inventOrange), var(--ddd-theme-default-opportunityGreen));
  bottom: -5px;
  left: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease-out;
}

.hover-underline::before {
  top: -5px;
  transform-origin: left;
}

.hover-underline:hover::after,
.hover-underline:hover::before {
  transform: scaleX(1);
}
      
      

      
      img {
        width: 400px;
        height: 225px;
      }
      h3 {
        text-align: center;
      }
      h3 span {
        font-size: var(--website-top-banner-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    
    <div class="wrapper">
      <img src="${this.logo}" alt="Logo">
      <div class="league-name hover-underline">Mini Golf League</div>
    
    </div>

    `;

  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(WebsiteTopBanner.tag, WebsiteTopBanner);
