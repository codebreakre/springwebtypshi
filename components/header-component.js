class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
        <a href="/html/nevtreh-.html">Бүртгүүлэх</a>
    </header> 
    <nav>
      <section style="font-family: 'Inter', sans-serif; font-weight: 200;line-height: 24px; font-size:30px ;width: 191px; height: 24px; margin-right: 32%;">
            foodime
        </section>
        <section>
            <a href="/html/index.html">Нүүр</a>
            <a href="/html/chef_list.html">Тогооч нар</a>
            <a href="/html/foods.html">Жор</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
         </section>
         </nav>
    `;
  }
}

export default Header;
customElements.define('header-component', Header);

//eniig page bolgonii tolgoi heseg deer zuragdah headereer songoj bolno