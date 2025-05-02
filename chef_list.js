import { changemode } from "./changemode.js";
window.changemode = changemode;

import Header from "../components/header.js";
customElements.define('header-component', Header);

import ChefCard from "./components/togooch.js";

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
let currentIndex = 0;
const itemsPerPage = 5;

function createChef() {
  const container = document.getElementById('cooks-container');
  const end = currentIndex + itemsPerPage;
  const slicedData = cooks.slice(currentIndex, end);

  slicedData.forEach(item => {
    const chef = document.createElement('chef-card');
    chef.setAttribute('name', item.name);
    chef.setAttribute('description', item.description);
    container.appendChild(chef);
  });

  currentIndex += itemsPerPage;

  if (currentIndex >= cooks.length) {
    document.getElementById('see-more').style.display = 'none';
  }
}

  
  window.onload = () => {
    createChef();
  };
  