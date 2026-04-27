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
        background-image: url("https://i.ibb.co/JjQrJDn2/Gemini-Generated-Image-659cb9659cb9659c.png");
        background-size: cover;
        background-position: center;
        text-align: center;
        height: 450px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 0;
      }
      h1 {
        font-size: 5rem;
        margin: var(--ddd-spacing-0);
        text-transform: uppercase;
        color: white;
        position: relative;
        z-index: 1;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
        letter-spacing: 4px;
      }
      p {
        font-size: var(--ddd-font-size-l);
        margin: var(--ddd-spacing-4) var(--ddd-spacing-0);
        color: white;
        position: relative;
        z-index: 1;
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
        letter-spacing: 2px;
      }
      a {
        display: inline-block;
        margin-top: var(--ddd-spacing-6);
        padding: var(--ddd-spacing-4) var(--ddd-spacing-12);
        background-color: transparent;
        color: white;
        text-decoration: none;
        font-weight: bold;
        border-radius: var(--ddd-radius-xl);
        text-transform: uppercase;
        border: 3px solid white;
        box-shadow: var(--ddd-boxShadow-sm);
        position: relative;
        z-index: 1;
        font-size: var(--ddd-font-size-s);
        letter-spacing: 2px;
        transition: background-color 0.3s ease;
      }
      a:hover {
        background-color: rgba(255, 255, 255, 0.2);
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