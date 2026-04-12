import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class WebsiteSchedule extends DDDSuper(LitElement) {

  static get tag() {
    return "website-schedule";
  }

  constructor() {
    super();
    this.games = [];
    this.view = "cards";
  }

  static get properties() {
    return {
      ...super.properties,
      games: { type: Array },
      view: { type: String }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    fetch("/api/schedule.json")
      .then(res => res.json())
      .then(data => {
        this.games = data.games;
      });
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        padding: var(--ddd-spacing-4);
        color-scheme: light dark;
      }
      h2 {
        text-align: center;
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
      }
      .schedule-band {
        display: flex;
        flex-wrap: wrap;
        gap: var(--ddd-spacing-4);
        justify-content: center;
      }
      .game-card {
        background-color: light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-beaverBlue));
        border: var(--ddd-border-md);
        border-radius: var(--ddd-radius-lg);
        padding: var(--ddd-spacing-4);
        width: 250px;
      }
      .teams {
        font-weight: bold;
        font-size: var(--ddd-font-size-s);
        margin-bottom: var(--ddd-spacing-2);
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
      }
      .details {
        font-size: var(--ddd-font-size-xs);
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-skyLight));
      }
      .calendar {
        width: 100%;
        border-collapse: collapse;
      }
      .calendar th {
        background-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-coalyGray));
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-2);
        text-align: left;
      }
      .calendar td {
        border: var(--ddd-border-md);
        padding: var(--ddd-spacing-2);
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
      }
    `];
  }

  render() {
    const params = new URLSearchParams(window.location.search);
    const isCalendar = params.get("page") === "schedule";

    if (isCalendar) {
      return html`
        <h2>Full Schedule</h2>
        <table class="calendar">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Home</th>
              <th>Away</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            ${this.games.map(game => html`
              <tr>
                <td>${game.date}</td>
                <td>${game.time}</td>
                <td>${game.home}</td>
                <td>${game.away}</td>
                <td>${game.location}</td>
              </tr>
            `)}
          </tbody>
        </table>
      `;
    }

    return html`
      <h2>Upcoming Games</h2>
      <div class="schedule-band">
        ${this.games.map(game => html`
          <div class="game-card">
            <div class="teams">${game.home} vs ${game.away}</div>
            <div class="details">${game.date} at ${game.time}</div>
            <div class="details">${game.location}</div>
          </div>
        `)}
      </div>
    `;
  }
}

globalThis.customElements.define(WebsiteSchedule.tag, WebsiteSchedule);