var addToCartButtons = document.getElementsByClassName("tour-btn");
for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event) {
  $(".sidebar").empty();

  var button = event.target;
  var shopItem = button.parentElement;
  var date = shopItem.getElementsByClassName("tour-date")[0].innerText;
  var city = shopItem.getElementsByClassName("tour-city")[0].innerText;
  var arena = shopItem.getElementsByClassName("tour-arena")[0].innerText;
  addItemToCart(date, city, arena);
}

function addItemToCart(date, city, arena) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  var cartRowContents = `
  <section class="sidebar">
     <h2 class="section-header">CART</h2>
      <div class="cart-item cart-column">
          <span class="cart-item-date">${date}</span>
          <span class="cart-item-title">${city}</span>
      </div>
      <span class="cart-price cart-column">${arena}</span>

      <div class="cart-quantity cart-column">
          <h6>No. of Tickets: <h6>
          <input class="cart-quantity-input" id="cart-quantity-input" type="number" value="1">
      </div>
      <div class="remove-button">
      <button class="btn btn-danger" type="button"><i id ="remove-btn" class="far fa-times"></i></button>
      </div>
      <div class="total">
      <strong class="cart-total-title">Total</strong>
      <span class="cart-total-price" id="cart-total-price">£24.59</span>
      </div>
      <div class="purchase">
      <button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>
      </div>
      </section>`;

  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);

  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);

  var removeBtn = document
    .getElementById("remove-btn")
    .addEventListener("click", removeCart);
}

function quantityChanged() {
  var quantity = document.getElementById("cart-quantity-input").value;
  var convertQuantity = parseInt(quantity);
  console.log(convertQuantity);

  var total = convertQuantity * 24.59;
  console.log(total);

  document.getElementById("cart-total-price").innerText = "£" + total;

  if(convertQuantity < 0){
    document.getElementById("cart-total-price").innerText = "£0";
    alert("Please enter a valid quantity");
  }
}

function removeCart() {
  $(".sidebar").remove();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

var addAlbumBtns = document.getElementsByClassName("shop-item-button");
for (var i = 0; i < addAlbumBtns.length; i++) {
  var buttonTwo = addAlbumBtns[i];
  buttonTwo.addEventListener("click", addAlbumClicked);
}

function addAlbumClicked (event) {
  $(".album-section").empty();

  //album variables.
  var button = event.target;
  var albumItem = button.parentElement.parentElement;
  console.log(albumItem);
  var title = albumItem.getElementsByClassName("album-title")[0].innerText;
  console.log(title);
  var image = albumItem.getElementsByClassName("shop-item-image")[0].src;
  console.log(image);
  albumCart(title, image);
}

function albumCart (title, image) {
  var albumItems = document.getElementsByClassName("album-items")[0];

  var albumDiv = document.createElement("div");
  albumDiv.classList.add("album-div");

  var albumShopCart = `
  <section class="album-section">
  <h2 class="section-header">CART</h2>
  <div class="cart-item-album">
      <span class="cart-item-date">${title}</span>
      <img class="cart-item-title" src ="${image}" width="120" height="120">
  </div>

  <div class="cart-quantity cart-column">
      <h6>Qty: <h6>
      <input class="album-quantity" id="album-quantity-input" type="number" value="1">
  </div>
  <div class="remove-button">
  <button class="btn btn-danger" type="button"><i id="remove-btn-two" class="far fa-times"></i></button>
  </div>
  <div class="total">
  <strong class="cart-total-title">Total</strong>
  <span class="cart-total-price" id="album-total-price"></span>
  </div>
  <div class="purchase">
  <button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>
  </div>
  </section>`;
  
  albumDiv.innerHTML = albumShopCart;
  albumItems.append(albumDiv);
  console.log(albumItems);


albumDiv
.getElementsByClassName("album-quantity")[0]
.addEventListener("change", quantityAlbumChanged);

  var removeAlbumBtn = document
    .getElementById("remove-btn-two")
    .addEventListener("click", removeAlbumCart);
    console.log(removeAlbumBtn);

}

function quantityAlbumChanged() {

  var price = document.getElementsByClassName("shop-item-price")[0].innerText;
  console.log(price);

  var quantity = document.getElementById("album-quantity-input").value;
  console.log(quantity);
  var albumQuantity = parseInt(quantity);
  console.log(albumQuantity);

  var total = albumQuantity * price;
  console.log(total);

  document.getElementById("album-total-price").innerText = "£" + total;

  if(albumQuantity < 0){
    document.getElementById("album-total-price").innerText = "£0";
    alert("Please enter a valid quantity");
  }
}

function removeAlbumCart() {
  $(".album-section").remove();
}




