import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("main-app")
export class MainApp extends LitElement {
  @property()
  docsHint = "Click on the Vite and Lit logos to learn more";

  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `;
  }

  private _onClick() {
    this.count++;
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `;
}
