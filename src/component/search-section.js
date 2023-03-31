class SearchSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
            `
            <div class="form-group form-title">
                    <label for="title" class="search-title">Cari Nama Mahasiswa</label>
                    <input type="search" id="search-input" name="title" placeholder="Masukkan nama mahasiswa...">
                </div>
                <center><input type="submit" id="search-button" value="Cari" name="Submit" class="btn-submit">
            `;
    }
}

customElements.define('search-section', SearchSection);