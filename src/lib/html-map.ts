import type { MainApp } from "../main";

declare global {
  interface HTMLElementTagNameMap {
    'main-app': MainApp
  }
}
