import state from "./model.js";

////////////////////
const productsPage = document.querySelector(".products_container");
const productPage = document.querySelector(".productPage");
const img__buttons = document.querySelectorAll(".product__image");
const close_button = document.querySelector(".close-btn");

let dataId = "";
const products = state.data;
productsPage.style.display = "grid";

////////////////////

img__buttons.forEach((img_btn) => {
  img_btn.addEventListener("click", (e) => {
    //getting student id
    dataId = e.target.getAttribute("data-id");

    //hiding products page
    productsPage.style.display = "none";
    //removing hidden class
    productPage.classList.toggle("hidden");

    // sending id to display product
    const [selectedProduct] = products.filter((product) => {
      if (product.id === dataId) return product;
    });

    if (productPage.querySelector(".product_container"))
      productPage.querySelectorAll(".product_container").forEach((div) => {
        div.style.display = "none";
      });

    //rendering product on page
    const htmlMarkup = `
                <div class="product_container" data-id="${selectedProduct.id}">
                <div class="product__image">
                    <img src="${selectedProduct.image}" width="100%"  alt="product image">
                </div>
                <div class="product__details">
                    <div class="product__title">
                        ${selectedProduct.name}
                    </div>
                    <div class="product__description">
                        ${selectedProduct.description}
                    </div>
                    <div class="product__link">
                        Site link- <a href="${selectedProduct.url}" target="_blank" rel="noopener noreferrer"> Visit </a>
                    </div>
                </div>
            </div>
                `;

    productPage.insertAdjacentHTML("beforeEnd", htmlMarkup);
  });
});

close_button.addEventListener("click", () => {
  //removing hidden class
  productPage.classList.toggle("hidden");
  productsPage.style.display = "grid";
});
