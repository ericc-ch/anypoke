import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("main-app")
export class MainApp extends LitElement {
  render() {
    return html`
      <main>
        <div>Turn anything into a pokemon</div>

        <textarea
          placeholder="Short description of the pokemon"
          id="input"
        ></textarea>

        <button>Generate</button>
      </main>
    `;
  }
}
