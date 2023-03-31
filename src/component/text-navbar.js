class TextNavbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h1>Daftar Hadir Mahasiswa</h1>`;
    }
}

customElements.define('text-navbar', TextNavbar);