import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class WebsiteHeroBanner extends DDDSuper(LitElement) {

  static get tag() {
    return "website-hero-banner";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        color-scheme: light dark;
      }
      .hero {
        background-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-coalyGray));
        color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-skyLight));
        text-align: center;
        padding: var(--ddd-spacing-16) var(--ddd-spacing-4);
      }
      h1 {
        font-size: var(--ddd-font-size-4x);
        margin: var(--ddd-spacing-0);
        text-transform: uppercase;
      }
      p {
        font-size: var(--ddd-font-size-m);
        margin: var(--ddd-spacing-4) var(--ddd-spacing-0);
      }
      a {
        display: inline-block;
        margin-top: var(--ddd-spacing-4);
        padding: var(--ddd-spacing-3) var(--ddd-spacing-8);
        background-color: light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-beaverBlue));
        color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-white));
        text-decoration: none;
        font-weight: bold;
        border-radius: var(--ddd-radius-xl);
        text-transform: uppercase;
        border: 3px solid light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-skyLight));
        box-shadow: var(--ddd-boxShadow-sm);
      }
      a:hover {
        background-color: light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-nittanyNavy));
      }
    `];
  }

  render() {
    return html`
      <div class="hero">
        <h1>Putt Pack</h1>
        <p>The Premier Youth Golf Association in State College, PA</p>
        <a href="?page=schedule">View Schedule</a>
      </div>
    `;
  }
}

globalThis.customElements.define(WebsiteHeroBanner.tag, WebsiteHeroBanner);