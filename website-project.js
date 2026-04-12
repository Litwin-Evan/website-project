/**
 * Copyright 2026 Evan Litwin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./website-top-banner.js";
import "./website-nav-menu.js";
import "./website-schedule.js";
import "./website-router.js";
import "./website-hero-banner.js";
import "./website-footer.js";

/**
 * `website-project`
 * 
 * @demo index.html
 * @element website-project
 */
export class WebsiteProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "website-project";
  }

  constructor() {
    super();
    this.logo = "";
    this.leagueName = "";
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/website-project.ar.json", import.meta.url).href +
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
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--website-project-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <website-top-banner 
          logo="${this.logo}" 
          .leagueName="${this.leagueName}">
      </website-top-banner>
  
      <website-nav-menu></website-nav-menu>
  
      <website-router></website-router>

      <website-footer></website-footer>
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

globalThis.customElements.define(WebsiteProject.tag, WebsiteProject);

//testing change

//testing change 2