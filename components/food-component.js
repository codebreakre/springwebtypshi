class Food extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }
  
  render() {
    const image = this.getAttribute("image");
    const name = this.getAttribute("name");
      
    this.innerHTML = `
      <article>
                <img src="${image}" alt="">
                <section>
                    <p>${name}</p>
                    <section class="count-section">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-suit-heart-fill" stroke="black" stroke-width="2" viewBox="0 0 20 20">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                          </svg>  
                          <p>count
                          </p>
                        </section> 
                </section>
            </article>
            `;
  }
}
export default Food;
customElements.define('food-card', Food);