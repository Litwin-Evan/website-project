import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class WebsiteNavMenu extends DDDSuper(LitElement) {

  static get tag() {
    return "website-nav-menu";
  }

  constructor() {
    super();
    this.items = [];
    this.open = false;
  }

  static get properties() {
    return {
      ...super.properties,
      items: { type: Array },
      open: { type: Boolean }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    const dataURL = new URL("./api/menu.json", import.meta.url).href;
    fetch(dataURL)
      .then(res => res.json())
      .then(data => {
        this.items = data.items;
      });
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        color-scheme: light dark;
        background-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-coalyGray));
      }
      nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
      }
      a {
        padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
        text-decoration: none;
        color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-skyLight));
        font-size: var(--ddd-font-size-s);
        font-weight: bold;
        text-transform: uppercase;
      }
      a:hover {
        background-color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-beaverBlue));
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
      }
      button {
        display: none;
        background-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-coalyGray));
        color: var(--ddd-theme-default-white);
        border: none;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        cursor: pointer;
        font-size: var(--ddd-font-size-s);
        width: 100%;
        text-align: left;
      }
      @media (max-width: 600px) {
        button {
          display: block;
        }
        nav {
          display: none;
          flex-direction: column;
        }
        nav.open {
          display: flex;
        }
      }
    `];
  }

  render() {
    return html`
      <button @click="${() => this.open = !this.open}">
        ${this.open ? "▲ Close Menu" : "☰ Menu"}
      </button>

      <nav class="${this.open ? 'open' : ''}">
        ${this.items.map(item => html`
          <a href="?page=${item.slug}">${item.title}</a>
        `)}
      </nav>
    `;
  }
}

globalThis.customElements.define(WebsiteNavMenu.tag, WebsiteNavMenu);