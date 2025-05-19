import { changemode } from "./changemode.js";
window.changemode = changemode;

import Header from "../components/header-component.js";
import ChefCard from "../components/togooch-component.js";
let currentIndex = 0;
const itemsPerPage = 5;
let cooks = [];

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
    fetch('../json/chef.json')
    .then(res => res.json())
    .then(data => {
      console.log('Loaded data:', data);
      cooks = data;
      createChef();
    }) 
    .catch(err => console.error('Failed to load chef.json:', err));
  };
  window.createChef = createChef;