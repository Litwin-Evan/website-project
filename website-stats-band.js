import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class WebsiteStatsBand extends DDDSuper(LitElement) {

  static get tag() {
    return "website-stats-band";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        color-scheme: light dark;
        background-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-coalyGray));
        padding: var(--ddd-spacing-12) var(--ddd-spacing-4);
      }
      .stats-band {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--ddd-spacing-12);
      }
      .stat {
        text-align: center;
        color: var(--ddd-theme-default-white);
        min-width: 150px;
      }
      .stat-number {
        font-size: 4rem;
        font-weight: bold;
        color: var(--ddd-theme-default-skyLight);
        line-height: 1;
        margin-bottom: var(--ddd-spacing-2);
      }
      .stat-label {
        font-size: var(--ddd-font-size-s);
        text-transform: uppercase;
        color: var(--ddd-theme-default-white);
        letter-spacing: 2px;
      }
      .stat-divider {
        width: 40px;
        height: 3px;
        background-color: var(--ddd-theme-default-skyLight);
        margin: var(--ddd-spacing-2) auto;
      }
    `];
  }

  render() {
    return html`
      <div class="stats-band">
        <div class="stat">
          <div class="stat-number">200+</div>
          <div class="stat-divider"></div>
          <div class="stat-label">Youth Golfers</div>
        </div>
        <div class="stat">
          <div class="stat-number">15</div>
          <div class="stat-divider"></div>
          <div class="stat-label">Years Running</div>
        </div>
        <div class="stat">
          <div class="stat-number">3</div>
          <div class="stat-divider"></div>
          <div class="stat-label">State Championships</div>
        </div>
        <div class="stat">
          <div class="stat-number">12</div>
          <div class="stat-divider"></div>
          <div class="stat-label">Coaches</div>
        </div>
      </div>
    `;
  }
}
globalThis.customElements.define(WebsiteStatsBand.tag, WebsiteStatsBand);