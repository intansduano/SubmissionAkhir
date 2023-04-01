class SearchSection extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
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

        //this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-section', SearchSection);