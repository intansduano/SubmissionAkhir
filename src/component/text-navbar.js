class TextNavbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h1>Data Ketersediaan <i>Meals<i></h1>`;
    }
}

customElements.define('text-navbar', TextNavbar);