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
        new URL("./locales/website-top-banner.ar.json", import.meta.url).href +
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
      }
      .league-name {
        font-size: var(--website-top-banner-league-name-font-size, var(--ddd-font-size-m));
        text-align: center;
        margin-top: 0px;
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
      }
      img {
        width: 150px;
        height: 150px;
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
    console.log("leagueName:", this.leagueName);
    return html`
<div class="wrapper">
    <img src="${this.logo}" alt="Logo">
    <div class="league-name">${this.leagueName}</div>
  <slot></slot>
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
