
const cards = document.querySelector('.cards');
const showPart = document.querySelector('header button[data-show="part"]');
const showAll = document.querySelector('header button[data-show="all"]');
const modalbutton = document.getElementById("btn2");
const modalwindow = document.querySelector(".modalwindow");
const cancelbutton = document.getElementById("x");
const favorites = [];
const favoritesList = document.querySelector('.favorites-list');

showPart.onclick = () => {
    const slicedArray = productsArray.slice(0, 5);
    reloadProducts(slicedArray, cards);
};

showAll.onclick = () => {
    reloadProducts(productsArray, cards);
};

modalbutton.addEventListener("click", () => {
    reloadFavoritesModal(); 
    modalwindow.style.display = "flex";
});

cancelbutton.addEventListener("click", () => {
    modalwindow.style.display = "none";
});

function addToFavoritesModal(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.classList.add('photo');
    image.src = product.image;

    const info = document.createElement('div');
    info.classList.add('info');

    const title = document.createElement('h3');
    title.textContent = product.title.slice(0, 50) + '...';

    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = product.description.slice(0, 200) + '...';

    const details = document.createElement('div');
    details.classList.add('details');

    const priceBlock = document.createElement('div');
    priceBlock.classList.add('price');
    const priceImg = document.createElement('img');
    priceImg.src = './images/price.png';
    priceImg.classList.add('size');
    const price = document.createElement('p');
    price.classList.add('priceVal');
    price.textContent = product.price + ' ₽';
    priceBlock.append(priceImg, price);

    const rateBlock = document.createElement('div');
    rateBlock.classList.add('rate');
    const rateImg = document.createElement('img');
    rateImg.src = './images/rating.png';
    rateImg.classList.add('size');
    const rate = document.createElement('p');
    rate.classList.add('rateVal');
    rate.textContent = product.rating.rate;
    rateBlock.append(rateImg, rate);

    const quantityBlock = document.createElement('div');
    quantityBlock.classList.add('buys');
    const quantityImg = document.createElement('img');
    quantityImg.src = './images/quantity.png';
    quantityImg.classList.add('size');
    const quantity = document.createElement('p');
    quantity.classList.add('quantity');
    quantity.textContent = product.rating.count;
    quantityBlock.append(quantityImg, quantity);

    details.append(priceBlock, rateBlock, quantityBlock);
    info.append(title, desc, details);
    card.append(image, info);

    favoritesList.append(card);
}

function reloadFavoritesModal() {
    favoritesList.innerHTML = '';
    favorites.forEach(product => {
        addToFavoritesModal(product);
    });
}

reloadProducts(productsArray, cards);









