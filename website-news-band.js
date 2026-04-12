import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class WebsiteNewsBand extends DDDSuper(LitElement) {

  static get tag() {
    return "website-news-band";
  }

  constructor() {
    super();
    this.articles = [
      { title: "Putt Pack Spring Season Kicks Off!", date: "April 1, 2026", summary: "The spring season is here and our young golfers are ready to compete across State College." },
      { title: "New Coaching Staff Announced", date: "March 15, 2026", summary: "Putt Pack is excited to welcome three new coaches to help develop our players this season." },
      { title: "Registration Open for Summer Camp", date: "March 1, 2026", summary: "Sign up now for our summer golf camp for ages 6-18. Spots are filling up fast!" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      articles: { type: Array }
    };
  }

  static get styles() {
    return [super.styles, css`
    :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        padding: var(--ddd-spacing-8) var(--ddd-spacing-4);
        color-scheme: light dark;
        border-top: 4px solid light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-beaverBlue));
        margin-top: var(--ddd-spacing-8);
    }
      h2 {
        text-align: center;
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
        margin-bottom: var(--ddd-spacing-6);
      }
      .news-band {
        display: flex;
        flex-wrap: wrap;
        gap: var(--ddd-spacing-4);
        justify-content: center;
      }
      .news-card {
        background-color: light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-beaverBlue));
        border-radius: var(--ddd-radius-lg);
        padding: var(--ddd-spacing-4);
        width: 280px;
        border: var(--ddd-border-md);
      }
      .news-date {
        font-size: var(--ddd-font-size-xs);
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-skyLight));
        margin-bottom: var(--ddd-spacing-2);
      }
      .news-title {
        font-size: var(--ddd-font-size-s);
        font-weight: bold;
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
        margin-bottom: var(--ddd-spacing-2);
      }
      .news-summary {
        font-size: var(--ddd-font-size-xs);
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-skyLight));
        line-height: 1.6;
      }
    `];
  }

  render() {
    return html`
      <h2>Latest News</h2>
      <div class="news-band">
        ${this.articles.map(article => html`
          <div class="news-card">
            <div class="news-date">${article.date}</div>
            <div class="news-title">${article.title}</div>
            <div class="news-summary">${article.summary}</div>
          </div>
        `)}
      </div>
    `;
  }
}

globalThis.customElements.define(WebsiteNewsBand.tag, WebsiteNewsBand);