import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class WebsiteFooter extends DDDSuper(LitElement) {

  static get tag() {
    return "website-footer";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        color-scheme: light dark;
      }
      .footer {
        background-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-coalyGray));
        color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-skyLight));
        padding: var(--ddd-spacing-8) var(--ddd-spacing-4);
        display: flex;
        flex-wrap: wrap;
        gap: var(--ddd-spacing-8);
        justify-content: center;
        margin-top: var(--ddd-spacing-8);
        border-top: 4px solid light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-beaverBlue));
      }
      .section {
        max-width: 300px;
      }
      h3 {
        margin: var(--ddd-spacing-0) var(--ddd-spacing-0) var(--ddd-spacing-2) var(--ddd-spacing-0);
        font-size: var(--ddd-font-size-s);
        text-transform: uppercase;
      }
      p {
        font-size: var(--ddd-font-size-xs);
        line-height: 1.6;
        margin: var(--ddd-spacing-0);
      }
      a {
        color: light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-skyLight));
        text-decoration: none;
      }
      a:hover {
        color: var(--ddd-theme-default-white);
      }
      .copyright {
        background-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-coalyGray));
        color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-skyLight));
        text-align: center;
        padding: var(--ddd-spacing-4);
        font-size: var(--ddd-font-size-xs);
        border-top: 1px solid light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-beaverBlue));
      }
    `];
  }

  render() {
    return html`
      <div class="footer">
        <div class="section">
          <h3>Putt Pack</h3>
          <p>The premier youth golf association in State College, PA. Developing young golfers since 2010.</p>
        </div>
        <div class="section">
          <h3>Contact</h3>
          <p>PO Box 1234<br>State College, PA 16801</p>
        </div>
        <div class="section">
          <h3>Quick Links</h3>
          <p>
            <a href="?page=home" style="color:white;">Home</a><br>
            <a href="?page=schedule" style="color:white;">Schedule</a><br>
            <a href="?page=teams" style="color:white;">Teams</a>
          </p>
        </div>
      </div>
      <div class="copyright">
        2026 Putt Pack Youth Golf Association. All Rights Reserved.
      </div>
    `;
  }
}

globalThis.customElements.define(WebsiteFooter.tag, WebsiteFooter);