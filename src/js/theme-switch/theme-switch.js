import { LitElement, html } from 'lit'

import moonSvg from '../partials/moon-svg.js'
import sunSvg from '../partials/sun-svg.js'

import css from './css.js'

class ThemeSwitch extends LitElement {
  static styles = css
  static properties = {
    isDarkMode: { type: Boolean },
    isLightMode: { type: Boolean },
    isNoPreference: { type: Boolean },
  }

  constructor() {
    super()
    const theme = localStorage.getItem('theme')

    if (theme) {
      this.isDarkMode = theme === 'dark'
      this.isLightMode = theme !== 'dark'
      this.isNoPreference = false
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      this.isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches
      this.isNoPreference = window.matchMedia('(prefers-color-scheme: no-preference)').matches
    }
  }

  onClick(theme) {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)

    this.isNoPreference = false

    if (theme === 'dark') {
      this.isDarkMode = true
      this.isLightMode = false
    } else {
      this.isDarkMode = false
      this.isLightMode = true
    }
  }

  render() {
    return this.isLightMode || this.isNoPreference
      ? html`
          <button
            type="button"
            aria-label="switch to dark mode"
            title="switch to dark mode"
            @click="${() => this.onClick('dark')}"
          >
            ${moonSvg}
          </button>
        `
      : html`
          <button
            type="button"
            aria-label="switch to light mode"
            title="switch to light mode"
            @click="${() => this.onClick('light')}"
          >
            ${sunSvg}
          </button>
        `
  }
}

customElements.define('theme-switch', ThemeSwitch)
