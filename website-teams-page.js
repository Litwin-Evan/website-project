import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class WebsiteTeamsPage extends DDDSuper(LitElement) {

  static get tag() {
    return "website-teams-page";
  }

  constructor() {
    super();
    this.teams = [
      { name: "8U Putt Pack Cubs", coach: "Coach Davis", players: 12, description: "Our youngest golfers learning the basics of the game." },
      { name: "10U Putt Pack Eagles", coach: "Coach Smith", players: 15, description: "Building fundamentals and competing in local tournaments." },
      { name: "12U Putt Pack Eagles", coach: "Coach Johnson", players: 14, description: "Developing competitive skills and course management." },
      { name: "14U Iron Wedge United", coach: "Coach Williams", players: 13, description: "Advanced players competing at the regional level." }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      teams: { type: Array }
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        padding: var(--ddd-spacing-8) var(--ddd-spacing-4);
        color-scheme: light dark;
      }
      h2 {
        text-align: center;
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
        margin-bottom: var(--ddd-spacing-6);
      }
      .teams-band {
        display: flex;
        flex-wrap: wrap;
        gap: var(--ddd-spacing-4);
        justify-content: center;
      }
      .team-card {
        background-color: light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-beaverBlue));
        border-radius: var(--ddd-radius-lg);
        padding: var(--ddd-spacing-6);
        width: 280px;
        border: var(--ddd-border-md);
      }
      .team-name {
        font-size: var(--ddd-font-size-m);
        font-weight: bold;
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
        margin-bottom: var(--ddd-spacing-2);
      }
      .team-coach {
        font-size: var(--ddd-font-size-xs);
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-skyLight));
        margin-bottom: var(--ddd-spacing-2);
      }
      .team-players {
        font-size: var(--ddd-font-size-xs);
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-skyLight));
        margin-bottom: var(--ddd-spacing-2);
      }
      .team-description {
        font-size: var(--ddd-font-size-xs);
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-skyLight));
        line-height: 1.6;
      }
    `];
  }

  render() {
    return html`
      <h2>Our Teams</h2>
      <div class="teams-band">
        ${this.teams.map(team => html`
          <div class="team-card">
            <div class="team-name">${team.name}</div>
            <div class="team-coach">Coach: ${team.coach}</div>
            <div class="team-players">Players: ${team.players}</div>
            <div class="team-description">${team.description}</div>
          </div>
        `)}
      </div>
    `;
  }
}

globalThis.customElements.define(WebsiteTeamsPage.tag, WebsiteTeamsPage);