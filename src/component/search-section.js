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
        this.shadowDOM.innerHTML =
            `
            <style> 
        .form-container {
    display: flex;
    padding: 16px;
    flex-direction: column;
    height: 465px;
    border-radius: 16px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: lighter;
}

.shadow {
    box-shadow: 10px 10px 10px 10px rgba(154, 160, 185, .05), 10px 15px 40px rgba(166, 173, 201, .2);
}

.form-group input {
    font-family: Raleway, sans-serif;
    background: #F5F1FF;
    border: 2px solid #ffa012;
    border-radius: 8px;
    padding: 16px;
    box-sizing: border-box;
    margin-bottom: 8px;
    font-size: 24px;
}

.form-title {
    margin: auto 0;
}

.btn-submit {
    width: fit-content;
    font-family: Raleway, sans-serif;
    border-radius: 16px;
    padding: 12px 24px;
    border: 2px solid #ffa012;
    color: #000000;
    font-size: 24px;
    margin-top: auto;
    align-self: flex-end;
    cursor: pointer;
}

.btn-submit:hover {
    background: #ffa012;
    color: white;
}

input[type=text],
input[type=number],
input[type=search],
input[type=date],
.btn-submit:focus {
    outline: none;
}
</style> 

            <div class="form-group form-title">
                    <label for="title" class="search-title">Cari Nama Meals</label>
                    <input type="search" id="search-input" name="title" placeholder="Masukkan nama meals...">
                </div>
                <center><input type="submit" id="search-button" value="Cari" name="Submit" class="btn-submit">
            `;

        //this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-section', SearchSection);