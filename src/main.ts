import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("main-app")
export class MainApp extends LitElement {
  render() {
    return html`
      <div>
        Turn anything into a pokemon

        <textarea
          placeholder="Short description of the pokemon"
          id="input"
        ></textarea>
        <button>Generate</button>
      </div>
    `;
  }
}
