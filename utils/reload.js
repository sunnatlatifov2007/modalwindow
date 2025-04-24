function reloadProducts(products, place) {
    place.innerHTML = '';

    products.forEach((product) => {
        const card = document.createElement('div');
        const image = document.createElement('img');
        const infoBlock = document.createElement('div');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const detailsBlock = document.createElement('div');
        const priceBlock = document.createElement('div');
        const priceImage = document.createElement('img');
        const price = document.createElement('p');
        const rateBlock = document.createElement('div');
        const rateImage = document.createElement('img');
        const rate = document.createElement('p');
        const quantityBlock = document.createElement('div');
        const quantityImage = document.createElement('img');
        const quantity = document.createElement('p');
        const buttonBlock = document.createElement('div');
        const button = document.createElement('button');

        card.classList.add('card');
        image.classList.add('photo');
        infoBlock.classList.add('info');
        description.classList.add('desc');
        detailsBlock.classList.add('details');
        priceBlock.classList.add('price');
        priceImage.classList.add('size');
        price.classList.add('priceVal');
        rateBlock.classList.add('rate');
        rateImage.classList.add('size');
        rate.classList.add('rateVal');
        quantityBlock.classList.add('buys');
        quantityImage.classList.add('size');
        quantity.classList.add('quantity');
        buttonBlock.classList.add('btn');
        button.classList.add('favorite-btn');

        image.src = product.image;
        priceImage.src = './images/price.png';
        rateImage.src = './images/rating.png';
        quantityImage.src = './images/quantity.png';

        title.textContent = product.title.slice(0, 50) + '...';
        title.classList.add('title');
        description.textContent = product.description.slice(0, 200) + '...';
        price.textContent = product.price + ' ₽';
        price.classList.add('price');
        rate.textContent = product.rating.rate;
        quantity.textContent = product.rating.count;
        button.textContent = 'В избранное';

        priceBlock.append(priceImage, price);
        rateBlock.append(rateImage, rate);
        quantityBlock.append(quantityImage, quantity);
        detailsBlock.append(priceBlock, rateBlock, quantityBlock);
        buttonBlock.append(button);
        infoBlock.append(title, description, detailsBlock, buttonBlock);
        card.append(image, infoBlock);
        place.append(card);

        button.addEventListener('click', () => {
            const index = favorites.findIndex(item => item.title === product.title);

            if (index === -1) {
                favorites.push(product);
                button.classList.add('active');
                button.textContent = 'Добавлено';
                addToFavoritesModal(product);
            } else {
                favorites.splice(index, 1);
                button.classList.remove('active');
                button.textContent = 'В избранное';
                reloadFavoritesModal(); 
            }
        });
    });
}






