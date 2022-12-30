const body = document.querySelector('body');

// Change Product Main Image Function:

const mainImg = document.querySelector('.mainImg');
const productPhotos = document.querySelectorAll('.photo');

productPhotos.forEach(photo => photo.addEventListener('click', (event) => handleChangeImage(event)));

function handleChangeImage(eventInfo) {

    const photoImg = eventInfo.target.parentNode.querySelector('.photoImg');

    const imgThumbAddress = photoImg.getAttribute('src');

    const imgAddress = imgThumbAddress.substring(0, imgThumbAddress.indexOf('-thumbnail'));

    mainImg.setAttribute('src', imgAddress + '.jpg');
}

// Change Product Image Mobile Function:

const mainImageArrow = document.querySelectorAll('.mainImageArrow');
let imagePositionCounter = 0;
let hasActiveStatement = false;

mainImageArrow.forEach(arrow => arrow.addEventListener(
    'click', (eventInfo) => handleChangeMobileProductImage(eventInfo)
));

function handleChangeMobileProductImage(eventInfo) {

    if(eventInfo.target.dataset.side === 'left') {

        if(imagePositionCounter != 0){
            --imagePositionCounter;
            let currentMobileImageWrapper = productPhotos[imagePositionCounter];
            let currentMobileThumbnailAddress = currentMobileImageWrapper.querySelector('img').getAttribute('src');
            let currentMobileImageAddress = currentMobileThumbnailAddress.substring(0, currentMobileThumbnailAddress.indexOf('-thumbnail'))
            mainImg.setAttribute('src', currentMobileImageAddress + '.jpg');
        }
        
        if(imagePositionCounter === 0){
            eventInfo.target.classList.add('activeArrowButton');
        }

        if(imagePositionCounter === 2) {
            mainImageArrow[1].classList.remove('activeArrowButton');
        }

    } else if(eventInfo.target.dataset.side === 'right'){
        if(imagePositionCounter <= 2){
            ++imagePositionCounter;
            let currentMobileImageWrapper = productPhotos[imagePositionCounter];
            let currentMobileThumbnailAddress = currentMobileImageWrapper.querySelector('img').getAttribute('src');
            let currentMobileImageAddress = currentMobileThumbnailAddress.substring(0, currentMobileThumbnailAddress.indexOf('-thumbnail'))
            mainImg.setAttribute('src', currentMobileImageAddress + '.jpg');
        }

        if(imagePositionCounter === 3){
            eventInfo.target.classList.add('activeArrowButton');
        }

        if(imagePositionCounter === 1) {
            mainImageArrow[0].classList.remove('activeArrowButton');
        }
    }
}

// Change Product Quantity Function:

const decreaseQuantityButton = document.querySelector('.decreaseAmount');
const increaseQuantityButton = document.querySelector('.increaseAmount');
const productQuantity = document.querySelector('.productQuantity');
let productQuantityNumber = 0;

decreaseQuantityButton.addEventListener('click', () => {
    if(productQuantityNumber != 0) {
        productQuantity.innerText = --productQuantityNumber;
    }
})

increaseQuantityButton.addEventListener('click', () => {
    if(productQuantityNumber != 99) {
        productQuantity.innerText = ++productQuantityNumber;
    }
})

// Toggle Cart Modal Function:

const userCart = document.querySelector('.userCart');
const cartProductsModal = document.querySelector('.cartProductsModal');

userCart.addEventListener('click', () => {
    cartProductsModal.classList.toggle('active');
});

// Add to Cart Function:

const addToCartButton = document.querySelector('.addToCartButton');
const cartItemsCounter = document.querySelector('.cartItemsCounter');

const cartEmpty = document.querySelector('.cartEmpty');

const productInCart = document.querySelector('.productInCart');
const productInCartQuantity = document.querySelector('.productInCartQuantity');
const finalPrice = document.querySelector('.finalPrice');

addToCartButton.addEventListener('click', () => {
    handleAddToCart(productQuantityNumber);
});

function handleAddToCart(productQuantityNumber) {
    if(productQuantityNumber != 0) {

        productInCart.classList.add('active');
        cartEmpty.classList.add('disabled');

        productInCartQuantity.innerText = productQuantityNumber;
        finalPrice.innerText = `$${125 * productQuantityNumber}`

        cartItemsCounter.classList.add('active');
        cartItemsCounter.innerText = productQuantityNumber;
    }
}

// Delete Product in Cart Function:

const deleteProductInCart = document.querySelector('.deleteProductInCart');

deleteProductInCart.addEventListener('click', () => {
    handleDeleteProductInCart()
});

function handleDeleteProductInCart() {
    productInCart.classList.remove('active');

    if(cartEmpty.classList.contains('disabled')) {
        cartEmpty.classList.remove('disabled');
    }

    cartEmpty.classList.add('active');
    cartItemsCounter.classList.remove('active');
}

// Toggle Menu Function:

const burguerButton = document.querySelector('.burguerButton');
const mobileMenu = document.querySelector('.headerNavbar');
const menuModalBlur = document.querySelector('.menuModalBlur');
const hideMenuModalButton = document.querySelector('.hideMenuModalButton');

burguerButton.addEventListener('click', (eventInfo) => handleShowMenu(eventInfo));
hideMenuModalButton.addEventListener('click', (eventInfo) => handleHideMenu(eventInfo));

function handleShowMenu() {
    mobileMenu.classList.add('activeMobileMenu');
    menuModalBlur.classList.add('menuModalBlurActive');
    body.classList.add('activeStatementBodySize');
    document.documentElement.scrollTop = 0;
}

function handleHideMenu() {
    mobileMenu.classList.remove('activeMobileMenu');
    menuModalBlur.classList.remove('menuModalBlurActive');
    body.classList.remove('activeStatementBodySize');
}

// Product Images Zoom Function:

const mainPhoto = document.querySelector('.mainImg');
const photoAreaWrapper = document.querySelector('.photoAreaWrapper');
let isPhotoMenuZoom = false;

mainPhoto.addEventListener('click', (eventInfo) => handleAddZoomImage(eventInfo));
menuModalBlur.addEventListener('click', (eventInfo) => handleRemoveZoomImage(eventInfo));

function handleAddZoomImage(eventInfo) {

    if(window.screen.width > 1000) {
        photoAreaWrapper.classList.add('activeProductPhotos');
        menuModalBlur.classList.add('modalBlurImageMenu');
        mainPhoto.classList.add('activeMainImage');
        body.classList.add('activeStatementBodySize');
        document.documentElement.scrollTop = 0;
    }

    isPhotoMenuZoom = true;
}

function handleRemoveZoomImage(eventInfo) {

    if(isPhotoMenuZoom && window.screen.width > 1000) {
        menuModalBlur.classList.remove('modalBlurImageMenu');
        mainPhoto.classList.remove('activeMainImage');
        body.classList.remove('activeStatementBodySize');
        photoAreaWrapper.classList.remove('activeProductPhotos');
    }
}
