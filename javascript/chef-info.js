import { changemode } from "./changemode.js";
import Header from "../components/header-component.js";
import ChefCard from "../components/togooch-component.js";
import Food from "../components/food-component.js";
import filterFood from "../components/filterFood-component.js";
  
window.changemode = changemode; // ene DOM deerh changemode functiond iishee importloj oruulj irsn changemode functioniig onooj ugsn
let currentIndex = 0;
let itemsPerPage = 9;
let foods = []; 
let filterredFoods = [];

function filterByCategory() {
  const filterComponent = document.querySelector('filter-food');
  const shadow = filterComponent.shadowRoot;
 
  const selectedCategory = shadow.getElementById('category').value;
  if(selectedCategory==="all"){
    currentIndex=0;
    filterredFoods=foods;
    
  }else{
filterredFoods = foods.filter(item => item.category.toLowerCase() === selectedCategory);
console.log(filterredFoods);
currentIndex=0;

console.log(itemsPerPage);
  }
}
function filterByTime() {
  const filterComponent = document.querySelector('filter-food');
  const shadow = filterComponent.shadowRoot;
  const selectedTime = shadow.getElementById('time').value;

  if (selectedTime === "10-20") {
    filterredFoods=filterredFoods.filter(item => item.time >= 10 && item.time <= 20);
  } else if (selectedTime === "20-40") {
    filterredFoods=filterredFoods.filter(item => item.time >= 20 && item.time <= 40);
  } else if (selectedTime === "40-60") {
    filterredFoods=filterredFoods.filter(item => item.time >= 40 && item.time <= 60);
  } else if (selectedTime === "60+") {
    filterredFoods=filterredFoods.filter(item => item.time >= 60);
  }
}
function sortByLikes() {
  const filterComponent = document.querySelector('filter-food');
  const shadow = filterComponent.shadowRoot;
  const selectedSort = shadow.getElementById('sort').value;

  if (selectedSort === "asc") {
    filterredFoods.sort((a, b) => b.like_count - a.like_count);
  } else if (selectedSort === "desc") {
    filterredFoods.sort((a, b) => a.like_count - b.like_count);
  }
}



function renderFilterredFoods() {
  filterByCategory();
  filterByTime();
  sortByLikes();
  del();
  createFood();
}

function createFood() {
  const container = document.getElementById('foods-container');

  const end = currentIndex + itemsPerPage;
  const slicedData = filterredFoods.slice(currentIndex, end);
  

  slicedData.forEach(item => {
    const food = document.createElement('food-card');
    food.setAttribute('image', item.image);
    food.setAttribute('name', item.name);
    container.appendChild(food);

  });
  currentIndex += itemsPerPage;

  if (currentIndex >= filterredFoods.length) {
    document.getElementById('see-more').style.display = 'none';
  }else{
    document.getElementById('see-more').style.display = "block";
  }
}

function del(){
  document.getElementById('foods-container').innerHTML = '';
}
  
  window.onload = () => {
    fetch('../json/foods.json') 
    .then(res => res.json())
    .then(data => {
      foods = data;
      filterredFoods = foods; 
      createFood();
      
    })
    .catch(err => console.error('Failed to load food.json:', err));
  };
  window.createFood = createFood;
  window.del = del;
  window.renderFilterredFoods=renderFilterredFoods;
  