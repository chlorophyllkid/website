import { css } from 'lit'

export default css`
  :host {
    justify-self: end;
  }

  button {
    background: transparent;
    border: 0;
    color: inherit;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    color: var(--primary-color);
  }

  button:focus {
    outline: 1px solid var(--primary-color);
  }

  button > svg {
    width: 100%;
  }
`
