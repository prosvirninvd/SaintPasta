let galleryGrid = document.getElementsByClassName('gallery-grid')[0];
function nextPhoto(event) {
    const childWidth = galleryGrid.children[0].clientWidth; 
    galleryGrid.scrollLeft += childWidth;
}
function previousPhoto(event) {
    const childWidth = galleryGrid.children[0].clientWidth; 
    galleryGrid.scrollLeft -= childWidth;
}
let productGrid = document.getElementsByClassName('product-grid')[0];
function nextProduct(event) {
    const childWidth = productGrid.children[0].clientWidth;
    productGrid.scrollLeft += childWidth;
}
function previousProduct(event) {
    const childWidth = productGrid.children[0].clientWidth;
    productGrid.scrollLeft -= childWidth;
}
let activeSwitch = document.getElementsByClassName('product-switch-active')[0];
function switchPasta(target) {
    activeSwitch.classList.remove('product-switch-active');
    target.classList.add('product-switch-active');
    activeSwitch = target;
}