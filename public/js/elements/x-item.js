class XItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const num = this.getAttribute('num');

    requestAnimationFrame(() => {
      this.innerHTML = `
      <button>Click me ${num}</button>
    `;

      const button = this.querySelector('button');
      button.style.backgroundColor = 'steelblue';
      button.addEventListener('click', () => {
        console.log(num);
      });
    });
  }
}

customElements.define('x-item', XItem);
