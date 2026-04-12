import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./website-schedule.js";
import "./website-hero-banner.js";
import "./website-news-band.js";
import "./website-stats-band.js";
import "./website-teams-page.js";

export class WebsiteRouter extends DDDSuper(LitElement) {

  static get tag() {
    return "website-router";
  }

  constructor() {
    super();
    this.page = "home";
  }

  static get properties() {
    return {
      ...super.properties,
      page: { type: String }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.readUrl();
    window.addEventListener("popstate", () => this.readUrl());
  }

  readUrl() {
    const params = new URLSearchParams(window.location.search);
    this.page = params.get("page") || "home";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        padding: var(--ddd-spacing-4);
      }
    `];
  }

  render() {
    if (this.page === "schedule") {
      return html`<website-schedule></website-schedule>`;
    }
    if (this.page === "teams") {
      return html`<website-teams-page></website-teams-page>
      `;
    }
    return html`
        <website-hero-banner></website-hero-banner>
        <website-stats-band></website-stats-band>
        <website-schedule></website-schedule>
        <website-news-band></website-news-band>
    `;
  }
}

globalThis.customElements.define(WebsiteRouter.tag, WebsiteRouter);