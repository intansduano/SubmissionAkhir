import './meal-list.js'

class MealItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
              .wrapper .container {
          width: 1024px;
          border-radius: 8px;
          margin: 16px;
          background: #ffffff;
          padding: 16px;
          flex-grow: 1;
          height: fit-content;
      }

      .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
      }

          .item>.inner h2 {
        margin-bottom: unset;
        }

        .item>.inner p {
            margin-top: 5px;
        }


      </style>
      
      <div class="container">
        <h2 class="container-header">Stok Tersedia</h2>
        <div class="list-item" id="todos" src="${this._meal.strMealThumb}" alt="Meal">
        <h2>${this._meal.strMeal}</h2>
        <h4>${this._club.strCategory}</h4>
        </div>   
      </div>    
           `;
    }
}

customElements.define("meal-item", MealItem);