class XForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const name = this.getAttribute('name');

    requestAnimationFrame(() => {
      this.innerHTML = `
        <form>
          <input type="text" name="">
          <button>Go</button>
        </form>
      `;

      this.style.backgroundColor = 'steelblue';
      this.addEventListener('submit', event => {
        event.preventDefault();
        console.log('submit', name);
      });
    });
  }
}

customElements.define('x-form', XForm);
