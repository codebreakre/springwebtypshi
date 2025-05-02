import { changemode } from "./changemode.js";
window.changemode = changemode;

const cooks = [
    { name: "Tengis", description: "Lorem ipsum dolor sit amet..." },
    { name: "Anu", description: "Another awesome chef!" },
    { name: "Togooch", description: "Lorem ipsum dolor sit amet..." },
    { name: "Munkh", description: "Lorem ipsum dolor sit amet..." },
    { name: "Togooch", description: "Lorem ipsum dolor sit amet..." },
    { name: "Togooch", description: "Lorem ipsum dolor sit amet..." },
    { name: "Togooch", description: "Lorem ipsum dolor sit amet..." },
    { name: "Togooch", description: "Lorem ipsum dolor sit amet..." },
    // хүсвэл нэмж болно
]

function createChefCard(item) {
  return `
    <section id="Togooc_info">
      <img src="zurag/profile.jpg" alt="profile">
      <article>
        <section id="ner_medee">
          <p id="cook-name">${item.name}</p>
          <p id="bitter-text">${item.description}</p>
        </section>
        <section class="count-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-suit-heart-fill" stroke="black" stroke-width="2" viewBox="0 0 20 20">
            <path d="..." />
          </svg>
          <p>count</p>
        </section>            
      </article>
    </section>
  `;
}
let currentIndex = 0;
const itemsPerPage = 5;

function createChef() {
  const container = document.getElementById('cooks-container');
  const end = currentIndex + itemsPerPage;
  const slicedData = cooks.slice(currentIndex, end);

  slicedData.forEach(item => {
    container.innerHTML += createChefCard(item);
  });

  currentIndex += itemsPerPage;

  if (currentIndex >= cooks.length) {
    document.getElementById('see-more').style.display = 'none';
  }
}

  
  window.onload = () => {
    createChef();
  };