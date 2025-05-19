class filterFood extends HTMLElement {
constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
}
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
            <section id="sort-food">
            <h2>Filter and Sort Foods</h2>
    <label for="sort">Sort by likes:</label>
    <select id="sort">
         <option value="asc">More First</option>
         <option value="desc">Less First</option>
    </select>


    <label for="category">Category:</label>
    <select id="category">
    <option value="all">All</option>
    <option value="breakfast">Breakfast</option>
    <option value="lunch">Lunch</option>
    <option value="dinner">Dinner</option>
    </select>

    <label for="time">Time:</label>
    <select id="time">
    <option value="all">All</option>
    <option value="10-20">10-20 minut</option>
    <option value="20-40">20-40 minut</option>  
    <option value="40-60">40-60 minut</option>
    <option value="60+">60+ minut</option>
    </select>
        <button onclick="renderFilterredFoods()">Filter</button>
</section>  
<style>
    #sort-food {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
</style>
    
        `;
    }
  
}
export default filterFood;
customElements.define('filter-food', filterFood);