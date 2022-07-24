let searchForm = document.querySelector('.search-form');
let navbar = document.querySelector('.navbar');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');

const removeAll = (elements) => {
  elements.forEach((element) => {
    element.classList.remove('active');
  });
};

document.querySelector('#search-btn').onclick = () => {
  removeAll([shoppingCart, loginForm, navbar]);
  searchForm.classList.toggle('active');
};

document.querySelector('#cart-btn').onclick = () => {
  removeAll([loginForm, navbar, searchForm]);
  shoppingCart.classList.toggle('active');
};

document.querySelector('#login-btn').onclick = () => {
  removeAll([shoppingCart, navbar, searchForm]);
  loginForm.classList.toggle('active');
};

document.querySelector('#menu-btn').onclick = () => {
  removeAll([shoppingCart, loginForm, searchForm]);
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  removeAll([shoppingCart, loginForm, searchForm, navbar]);
};
