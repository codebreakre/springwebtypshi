import { changemode } from "./changemode.js";
import Header from "../components/header.js";
customElements.define('header-component', Header);
import ChefCard from "./components/togooch.js";

  
window.changemode = changemode; // ene DOM deerh changemode functiond iishee importloj oruulj irsn changemode functioniig onooj ugsn

const foods = [
    { name: "Burger", image: "zurag/hool.jpg" },
    { name: "Pizza", image: "zurag/hool.jpg" },
    { name: "Sushi", image: "zurag/hool.jpg" },
    { name: "Pasta", image: "zurag/hool.jpg" },
    { name: "Fried Rice", image: "zurag/hool.jpg" },
    { name: "Steak", image: "zurag/hool.jpg" },
    { name: "Tacos", image: "zurag/hool.jpg" },
    { name: "Noodles", image: "zurag/hool.jpg" },
    { name: "Salad", image: "zurag/hool.jpg" },
    { name: "Hot Dog", image: "zurag/hool.jpg" },
{ name: "Pancakes", image: "zurag/hool.jpg" },
{ name: "Ice Cream", image: "zurag/hool.jpg" },
{ name: "Sandwich", image: "zurag/hool.jpg" },
{ name: "Dumplings", image: "zurag/hool.jpg" },
{ name: "BBQ Ribs", image: "zurag/hool.jpg" },
{ name: "Curry", image: "zurag/hool.jpg" },
{ name: "Lasagna", image: "zurag/hool.jpg" },
{ name: "Cheesecake", image: "zurag/hool.jpg" },
{ name: "Soup", image: "zurag/hool.jpg" }
  ];

  let currentIndex = 0;
const itemsPerPage = 9;

function createFood() {
  const container = document.getElementById('foods-container');

  const end = currentIndex + itemsPerPage;
  const slicedData = foods.slice(currentIndex, end);

  slicedData.forEach(item => {

    container.innerHTML += `
            <article>
                <img src="${item.image}" alt="">
                <section>
                    <p>${item.name}</p>
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
    
    });

    currentIndex += itemsPerPage;

    if (currentIndex >= foods.length) {
        document.getElementById('see-more').style.display = 'none';
    }
  }
  
  window.onload = () => {
    createFood();
  };
  