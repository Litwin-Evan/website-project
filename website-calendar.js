import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class WebsiteCalendar extends DDDSuper(LitElement) {

  static get tag() {
    return "website-calendar";
  }

  constructor() {
    super();
    this.games = [];
    this.today = new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
  }

  static get properties() {
    return {
      ...super.properties,
      games: { type: Array },
      currentMonth: { type: Number },
      currentYear: { type: Number }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.games = [
      { id: 1, home: "Putt Pack Eagles", away: "Birdie Boys", date: "April 15, 2026", time: "6:00 PM", location: "State College Mini Golf Club" },
      { id: 2, home: "Iron Putter United", away: "Putt Pack Eagles", date: "April 20, 2026", time: "2:00 PM", location: "Bryce Jordan Center Fields" },
      { id: 3, home: "Putt Pack Eagles", away: "Par Three Gangsters", date: "April 27, 2026", time: "4:00 PM", location: "State College Mini Golf Club" },
      { "id": 4, "home": "Putt Pack Eagles", "away": "Birdie Gals", "date": "May 8, 2026", "time": "4:00 PM", "location": "State College Mini Golf Club" }
    ];
  }

  getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  getFirstDayOfMonth(month, year) {
    return new Date(year, month, 1).getDay();
  }

  getGameForDay(day) {
    return this.games.filter(game => {
      const gameDate = new Date(game.date);
      return (
        gameDate.getDate() === day &&
        gameDate.getMonth() === this.currentMonth &&
        gameDate.getFullYear() === this.currentYear
      );
    });
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
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
      .controls {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-4);
      }
      .controls button {
        background-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-beaverBlue));
        color: white;
        border: none;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-lg);
        cursor: pointer;
        font-size: var(--ddd-font-size-s);
      }
      .controls button:hover {
        opacity: 0.8;
      }
      .month-label {
        font-size: var(--ddd-font-size-m);
        font-weight: bold;
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
        min-width: 200px;
        text-align: center;
      }
      .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 2px;
      }
      .day-header {
        text-align: center;
        font-weight: bold;
        font-size: var(--ddd-font-size-xs);
        padding: var(--ddd-spacing-2);
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-skyLight));
        background-color: light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-coalyGray));
      }
      .day-cell {
        min-height: 80px;
        padding: var(--ddd-spacing-2);
        border: 1px solid light-dark(var(--ddd-theme-default-limestoneLight), var(--ddd-theme-default-coalyGray));
        background-color: light-dark(white, var(--ddd-theme-default-beaverBlue));
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
        font-size: var(--ddd-font-size-xs);
      }
      .day-cell.empty {
        background-color: light-dark(var(--ddd-theme-default-limestoneLight), var(--ddd-theme-default-coalyGray));
      }
      .day-cell.today {
        background-color: light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-nittanyNavy));
        border: 2px solid light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-skyLight));
      }
      .day-number {
        font-weight: bold;
        margin-bottom: var(--ddd-spacing-1);
      }
      .game-tag {
        background-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-skyLight));
        color: light-dark(white, var(--ddd-theme-default-nittanyNavy));
        border-radius: var(--ddd-radius-sm);
        padding: 2px 4px;
        font-size: 20px;
        margin-top: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `];
  }

  render() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const daysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
    const firstDay = this.getFirstDayOfMonth(this.currentMonth, this.currentYear);

    const cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(html`<div class="day-cell empty"></div>`);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === this.today.getDate() &&
        this.currentMonth === this.today.getMonth() &&
        this.currentYear === this.today.getFullYear();

      const gamesOnDay = this.getGameForDay(day);

      cells.push(html`
        <div class="day-cell ${isToday ? 'today' : ''}">
          <div class="day-number">${day}</div>
          ${gamesOnDay.map(game => html`
            <div class="game-tag">${game.home} vs ${game.away}</div>
          `)}
        </div>
      `);
    }

    return html`
      <h2>Schedule</h2>
      <div class="controls">
        <button @click="${this.prevMonth}">Prev</button>
        <div class="month-label">${monthNames[this.currentMonth]} ${this.currentYear}</div>
        <button @click="${this.nextMonth}">Next</button>
      </div>
      <div class="calendar-grid">
        ${dayNames.map(d => html`<div class="day-header">${d}</div>`)}
        ${cells}
      </div>
    `;
  }
}

globalThis.customElements.define(WebsiteCalendar.tag, WebsiteCalendar);