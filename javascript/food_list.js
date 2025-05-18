import { changemode } from "./changemode.js";
import Header from "../components/header-component.js";
customElements.define('header-component', Header);
import ChefCard from "../components/togooch-component.js";
import Food from "../components/food-component.js";

  
window.changemode = changemode; // ene DOM deerh changemode functiond iishee importloj oruulj irsn changemode functioniig onooj ugsn
let currentIndex = 0;
const itemsPerPage = 9;
let foods = []; 

function createFood() {
  const container = document.getElementById('foods-container');

  const end = currentIndex + itemsPerPage;
  const slicedData = foods.slice(currentIndex, end);
  

  slicedData.forEach(item => {
    const food = document.createElement('food-card');
    food.setAttribute('image', item.image);
    food.setAttribute('name', item.name);
    container.appendChild(food);

  });

  currentIndex += itemsPerPage;

  if (currentIndex >= foods.length) {
    document.getElementById('see-more').style.display = 'none';
  }
}
  
  window.onload = () => {
    fetch('../json/foods.json') 
    .then(res => res.json())
    .then(data => {
      foods = data;
      createFood();
    })
    .catch(err => console.error('Failed to load food.json:', err));
  };
  window.createFood = createFood;

  